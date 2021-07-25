const QUESTION = 'Sure.';
const YELL = 'Whoa, chill out!';
const YELL_QUESTION = "Calm down, I know what I'm doing!";
const SILENCE = 'Fine. Be that way!';
const ANYTHING = 'Whatever.';

/**
 * @param {string} message
 */
export const hey = message => {
	const trimmedMessage = message.trim();

	const isQuestion = trimmedMessage.charAt(trimmedMessage.length - 1) === '?';
	const hasChars = trimmedMessage.match(/[a-zA-Z]/) !== null;
	const isSameAsUpperCase = trimmedMessage.toUpperCase() === trimmedMessage;
	const isNothing = trimmedMessage.replace(/\s/g, '').length === 0;

	if (isQuestion) {
		if (hasChars) {
			if (isSameAsUpperCase) {
				return YELL_QUESTION;
			}
		}

		return QUESTION;
	} else if (isNothing) {
		return SILENCE;
	} else if (hasChars && isSameAsUpperCase) {
		return YELL;
	}

	return ANYTHING;
};
