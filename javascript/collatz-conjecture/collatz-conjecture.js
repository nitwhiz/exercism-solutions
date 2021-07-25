export const steps = x => {
	if (x < 1) {
		throw new Error('Only positive numbers are allowed');
	}

	let i = 0;
	let n = x;

	while (n !== 1) {
		if (n % 2 === 0) {
			n /= 2;
		} else {
			n = n * 3 + 1;
		}

		++i;
	}

	return i;
};
