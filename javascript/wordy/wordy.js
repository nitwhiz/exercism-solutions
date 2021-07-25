class ArgumentError extends Error {
	constructor(msg) {
		super(msg);
	}
}

class Token {
	constructor(value = null) {
		this.next = null;
		this.value = value;
	}

	static test(input) {
		return true;
	}

	static consume(input, lastToken) {
		lastToken.next = new Token();

		return input;
	}

	get validNext() {
		return [];
	}
}

class NullToken extends Token {
	get validNext() {
		return [QuestionToken];
	}
}

class QuestionToken extends Token {
	static test(input) {
		return /^what is\s/i.test(input);
	}

	static consume(input, lastToken) {
		lastToken.next = new QuestionToken();

		return input.replace(/^what is/i, '').trim();
	}

	get validNext() {
		return [NumericToken];
	}
}

class NumericToken extends Token {
	static test(input) {
		return /^-?\d+\.?\d*(\s|\?)/i.test(input);
	}

	static consume(input, lastToken) {
		const match = input.match(/^-?\d+\.?\d*/);

		if (match === null) {
			throw new ArgumentError('unable to match numeric');
		}

		lastToken.next = new NumericToken(parseInt(match[0], 10));

		return input.replace(new RegExp('^' + match[0]), '').trim();
	}

	get validNext() {
		return [BasicOperatorToken, PowerOperatorToken, TerminatorToken];
	}
}

class OperatorToken extends Token {}

class BasicOperatorToken extends OperatorToken {
	static test(input) {
		return /^(plus)|(minus)|(multiplied by)|(divided by)\s/.test(input);
	}

	static consume(input, lastToken) {
		const match = input.match(/^((plus)|(minus)|(multiplied by)|(divided by))/);

		if (match === null) {
			throw new ArgumentError('unable to match operator');
		}

		const tokenValue = match[0]
			.replace(/\sby/i, '')
			.replace('multiplied', 'multiply')
			.replace('divided', 'divide');

		lastToken.next = new BasicOperatorToken(tokenValue);

		return input.replace(new RegExp('^' + match[0]), '').trim();
	}

	get validNext() {
		return [NumericToken];
	}
}

class PowerOperatorToken extends OperatorToken {
	static test(input) {
		return /^raised to the \d+(th|st) power/.test(input);
	}

	static consume(input, lastToken) {
		const match = input.match(/^raised to the (\d+)(th|st) power/);

		if (match === null) {
			throw new ArgumentError('unable to match operator');
		}

		lastToken.next = new PowerOperatorToken(parseInt(match[1], 10));

		return input.replace(new RegExp('^' + match[0]), '').trim();
	}

	get validNext() {
		return [TerminatorToken];
	}
}

class TerminatorToken extends Token {
	static test(input) {
		return /^\s*\?/.test(input);
	}

	static consume(input, lastToken) {
		lastToken.next = new TerminatorToken();

		return '';
	}
}

class WordProblem {
	constructor(question) {
		this._question = question;
	}

	_evaluate(tokenChain) {
		let currentToken = tokenChain;

		let acc = 0;
		let currentOperation = null;

		while (currentToken !== null) {
			if (currentOperation instanceof PowerOperatorToken) {
				acc = Math.pow(acc, currentOperation.value);
				currentOperation = null;
			} else if (currentToken instanceof NumericToken) {
				if (currentOperation === null) {
					acc = currentToken.value;
				} else if (currentOperation instanceof BasicOperatorToken) {
					switch (currentOperation.value) {
						case 'plus':
							acc += currentToken.value;
							break;
						case 'minus':
							acc -= currentToken.value;
							break;
						case 'divide':
							acc /= currentToken.value;
							break;
						case 'multiply':
							acc *= currentToken.value;
							break;
						default:
							throw new ArgumentError('invalid expression');
					}

					currentOperation = null;
				}
			} else if (currentToken instanceof OperatorToken) {
				currentOperation = currentToken;
			}

			currentToken = currentToken.next;
		}

		return acc;
	}

	_tokenize(question) {
		let input = question;
		let tokenChain = new NullToken();
		let lastToken = tokenChain;

		while (input !== '') {
			let foundMatchingToken = false;

			for (const cls of lastToken.validNext) {
				if (cls.test(input)) {
					foundMatchingToken = true;

					input = cls.consume(input, lastToken);

					lastToken = lastToken.next;

					break;
				}
			}

			if (!foundMatchingToken) {
				throw new ArgumentError('no matching tokens available');
			}
		}

		return tokenChain;
	}

	answer() {
		return this._evaluate(this._tokenize(this._question));
	}
}

export { WordProblem, ArgumentError };
