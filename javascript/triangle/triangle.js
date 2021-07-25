export class Triangle {
	constructor(a, b, c) {
		this._a = a;
		this._b = b;
		this._c = c;
	}

	get _isEquilateral() {
		return this._a === this._b && this._b === this._c;
	}

	get _isIsosceles() {
		return this._a === this._b || this._a === this._c || this._b === this._c;
	}

	get _isScalene() {
		return this._a !== this._b && this._b !== this._c;
	}

	get _isInequal() {
		const z = Math.max(this._a, this._b, this._c);
		const y = Math.min(this._a, this._b, this._c);
		const x =
			z === this._a
				? y === this._b
					? this._c
					: this._b
				: y === this._c
				? this._b
				: this._a;

		return z < y + x;
	}

	kind() {
		if (this._a < 0 || this._b < 0 || this._c < 0) {
			throw new Error('triangles with negative sides are illegal');
		}

		if (this._isEquilateral && this._a === 0) {
			throw new Error('test triangles with no size are illegal');
		}

		if (!this._isInequal) {
			throw new Error('triangles violating triangle inequality are illegal');
		}

		if (this._isEquilateral) {
			return 'equilateral';
		} else if (this._isIsosceles) {
			return 'isosceles';
		} else if (this._isScalene) {
			return 'scalene';
		}
	}
}
