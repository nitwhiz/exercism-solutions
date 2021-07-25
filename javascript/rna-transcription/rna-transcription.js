export const DNA_RNA_MAP = {
	G: 'C',
	C: 'G',
	T: 'A',
	A: 'U',
	'': ''
};

/**
 * @param {string} dna
 */
export const toRna = dna => {
	return dna
		.split('')
		.map(d => DNA_RNA_MAP[d])
		.join('');
};
