export class Robot {
	static releaseNames() {
		Robot._nextUID = Math.floor(Math.random() * 0xdeadbeef);
	}

	constructor() {
		this._name = this.generateName();
	}

	get name() {
		return this._name;
	}

	reset() {
		this._name = this.generateName();
	}

	generateName() {
		const symbols = [26, 26, 10, 10, 10];
		const symbolMax = symbols.reduce((a, c) => a * c, 1);

		const name = [];

		let identity = Robot._nextUID % symbolMax;

		for (const s of symbols) {
			const x = identity % s;

			identity = (identity - x) / s;

			name.push(x);
		}

		++Robot._nextUID;

		name[0] = Robot._alphabet[name[0]];
		name[1] = Robot._alphabet[name[1]];

		return name.join('');
	}
}

Robot._nextUID = 0;
Robot._alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
