import { RNG } from './rng';

export class Cipher {
	static generateKey(minLen, maxLen) {
		const rng = new RNG(0xdeadbeef);

		const len = Math.random() * (maxLen - minLen) + minLen;
		const alphabet = 'abcdefghijklmnopqrstuvwxyz';

		const key = [];

		for (let i = 0; i < len; ++i) {
			key.push(alphabet[rng.next(26)]);
		}

		return key.join('');
	}

	constructor(key) {
		if (key === undefined) {
			this._key = Cipher.generateKey(100, 512);
		} else {
			this._key = key;
		}

		this._keyLen = this._key.length;
	}

	get key() {
		return this._key;
	}

	_getShift(i) {
		return this._key.charCodeAt(i % this._keyLen) - 97;
	}

	_shiftright(c, i) {
		return String.fromCharCode(
			((c.charCodeAt(0) + this._getShift(i) - 97) % 26) + 97
		);
	}

	_shiftleft(c, i) {
		const newcode = (c.charCodeAt(0) - this._getShift(i) - 97) % 26;

		return String.fromCharCode(newcode < 0 ? 123 + newcode : newcode + 97);
	}

	encode(input) {
		return input
			.split('')
			.map((c, i) => this._shiftright(c, i))
			.join('');
	}

	decode(input) {
		return input
			.split('')
			.map((c, i) => this._shiftleft(c, i))
			.join('');
	}
}
