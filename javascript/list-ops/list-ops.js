/**
 * @template T
 */
export class List {
	/**
	 * @param {T[]} values
	 */
	constructor(values = []) {
		/**
		 * @type {T[]}
		 */
		this.values = [...values];
	}

	/**
	 * @param {List<K>} list
	 * @returns {List<T | K>}
	 */
	append(list) {
		for (let i = 0, l = list.length(); i < l; ++i) {
			this.values.push(list.values[i]);
		}

		return this;
	}

	/**
	 * @param {List<K>} lists
	 * @returns {List<T | K>}
	 */
	concat(list) {
		for (let i = 0, l = list.length(); i < l; ++i) {
			if (list.values[i] instanceof List) {
				this.append(list.values[i]);
			} else {
				this.values.push(list[i]);
			}
		}

		return this;
	}

	/**
	 * @param {(element: T) => boolean} fn
	 */
	filter(fn) {
		const newValues = [];

		for (let i = 0, l = this.length(); i < l; ++i) {
			if (fn(this.values[i])) {
				newValues.push(this.values[i]);
			}
		}

		this.values = newValues;

		return this;
	}

	/**
	 * @param {(element: T) => any} fn
	 */
	map(fn) {
		for (let i = 0, l = this.length(); i < l; ++i) {
			this.values[i] = fn(this.values[i]);
		}

		return this;
	}

	/**
	 * @returns number
	 */
	length() {
		let len = 0;

		// for the sake of solving this task without using Array.length
		// this method fails with `undefined` as element in the list
		while (this.values[len] !== undefined) {
			++len;
		}

		return len;
	}

	/**
	 * @param {(acc: K, element: T) => K} fn
	 * @param {K} initialValue
	 * @returns {K}
	 */
	foldl(fn, initialValue) {
		let reduced = initialValue;

		for (let i = 0, l = this.length(); i < l; ++i) {
			reduced = fn(reduced, this.values[i]);
		}

		return reduced;
	}

	/**
	 * @param {(acc: K, element: T) => K} fn
	 * @param {K} initialValue
	 * @returns {K}
	 */
	foldr(fn, initialValue) {
		let reduced = initialValue;

		for (let i = this.length() - 1; i >= 0; --i) {
			reduced = fn(reduced, this.values[i]);
		}

		return reduced;
	}

	reverse() {
		const newValues = [];

		for (let i = this.length() - 1; i >= 0; --i) {
			newValues.push(this.values[i]);
		}

		this.values = newValues;

		return this;
	}
}
