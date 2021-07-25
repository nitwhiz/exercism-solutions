export class Triangle {
	constructor(rowCount) {
		this._rows = [];
		this._rowCount = parseInt(rowCount, 10);

		if (isNaN(this._rowCount)) {
			this._rowCount = 1;
		}

		for (let r = 1; r < this._rowCount + 1; ++r) {
			const currRow = new Array(r).fill(1);
			const prevRow = this._rows[this._rows.length - 1];

			this._rows.push(currRow);

			if (!prevRow) {
				continue;
			}

			for (let c = 0; c < prevRow.length - 1; ++c) {
				currRow[c + 1] = prevRow[c] + prevRow[c + 1];
			}
		}
	}

	get lastRow() {
		return this._rows[this._rows.length - 1];
	}

	get rows() {
		return this._rows;
	}
}
