export const compute = (left, right) => {
	if (left === '' && right !== '') {
		throw new Error('left strand must not be empty');
	}

	if (right === '' && left !== '') {
		throw new Error('right strand must not be empty');
	}

	if (left.length !== right.length) {
		throw new Error('left and right strands must be of equal length');
	}

	return left.split('').reduce((acc, curr, i) => {
		return acc + (curr !== right.charAt(i) ? 1 : 0);
	}, 0);
};
