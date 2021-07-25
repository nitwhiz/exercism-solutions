export class Allergies {
	/**
	 * @param {number} code
	 */
	constructor(code) {
		this.code = Math.floor(code) & 0xff;
	}

	list() {
		return Allergies.codeOrder.filter(item => this.allergicTo(item));
	}

	/**
	 * @param {string} item
	 */
	allergicTo(item) {
		return (this.code & Allergies.codeTable[item]) !== 0;
	}
}

Allergies.codeTable = {
	eggs: 1,
	peanuts: 2,
	shellfish: 4,
	strawberries: 8,
	tomatoes: 16,
	chocolate: 32,
	pollen: 64,
	cats: 128
};

Allergies.codeOrder = [
	'eggs',
	'peanuts',
	'shellfish',
	'strawberries',
	'tomatoes',
	'chocolate',
	'pollen',
	'cats'
];
