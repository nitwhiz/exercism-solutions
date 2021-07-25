export class NucleotideCounts {
	static parse(strand) {
		const nucleotides = {
			A: 0,
			C: 0,
			G: 0,
			T: 0
		};

		for (const s of strand.split('')) {
			if (nucleotides[s] !== undefined) {
				++nucleotides[s];
			} else {
				throw new Error('Invalid nucleotide in strand');
			}
		}

		return `${nucleotides.A} ${nucleotides.C} ${nucleotides.G} ${nucleotides.T}`;
	}
}
