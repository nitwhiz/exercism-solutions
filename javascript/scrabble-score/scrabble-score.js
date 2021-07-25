/**
 * @param {string} letter
 */
const getScoreForLetter = letter => {
	const scoreTable = {
		aeioulnrst: 1,
		dg: 2,
		bcmp: 3,
		fhvwy: 4,
		k: 5,
		jx: 8,
		qz: 10
	};

	for (const s in scoreTable) {
		if (s.includes(letter)) {
			return scoreTable[s];
		}
	}

	return 0;
};

/**
 * @param {string} word
 */
export const score = word =>
	word
		.toLowerCase()
		.split('')
		.reduce((acc, curr) => {
			return acc + getScoreForLetter(curr);
		}, 0);
