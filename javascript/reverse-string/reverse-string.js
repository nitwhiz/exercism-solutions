// Array.reverse() would be a bit too basic

export const reverseString = str =>
	str
		.split('')
		.map((_, i, a) => a[a.length - 1 - i])
		.join('');
