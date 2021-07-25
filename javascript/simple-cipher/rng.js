/**
 * a cheap RNG based on the pokemon PRNGs
 * @see https://bulbapedia.bulbagarden.net/wiki/Pseudorandom_number_generation_in_Pok%C3%A9mon
 */
export class RNG {
	constructor(seed) {
		this._seedInt = 0;

		if (seed) {
			this.seed = seed;
		} else {
			this.seed = Math.random() * 0xffffffff;
		}
	}

	get seed() {
		return this._seedInt;
	}

	set seed(n) {
		this._seedInt = n % 0xffffffff;
	}

	next(max) {
		this.seed = 0x41c64e6d * this.seed + 0x00006073;
		this.seed = 0x6c078965 * this.seed + 0x00000001;

		return max ? this.seed % max : this.seed;
	}
}
