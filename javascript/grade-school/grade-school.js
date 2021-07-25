export class GradeSchool {
	constructor() {
		this._roster = {};
		this._grades = [];
	}

	roster() {
		return this._grades
			.map(grade => [...this._roster[grade]])
			.reduce((acc, curr, index) => {
				acc[this._grades[index]] = curr;

				return acc;
			}, {});
	}

	add(name, grade) {
		if (this._roster[grade]) {
			this._roster[grade].push(name);
			this._roster[grade].sort();
		} else {
			this._roster[grade] = [name];
		}

		if (!this._grades.includes(grade)) {
			this._grades.push(grade);
		}
	}

	grade(grade) {
		if (this._roster[grade]) {
			return [...this._roster[grade]];
		}

		return [];
	}
}
