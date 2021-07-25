export class Matrix {
	/**
	 * @param {string} matrix
	 */
	constructor(matrix) {
		this._rows = [];
		this._columns = [];

		const rows = matrix.split('\n');

		for (let r = 0; r < rows.length; ++r) {
			const row = rows[r].split(' ').map(n => parseInt(n, 10));

			this._rows.push(row);

			for (let c = 0; c < row.length; ++c) {
				if (this._columns[c] === undefined) {
					this._columns[c] = [row[c]];
				} else {
					this._columns[c].push(row[c]);
				}
			}
		}
	}

	get rows() {
		return this._rows;
	}

	get columns() {
		return this._columns;
	}
}
