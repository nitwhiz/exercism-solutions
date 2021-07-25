const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

/**
 * @param {string} input
 */
export const isPangram = input => {
	const alphabet = {};

	for (const c of input.toLowerCase().split('')) {
		alphabet[c] = true;
	}

	for (const c of ALPHABET.split('')) {
		if (alphabet[c] === undefined) {
			return false;
		}
	}

	return true;
};
