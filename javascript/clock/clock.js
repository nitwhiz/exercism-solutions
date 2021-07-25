export class Clock {
	constructor(h = 0, m = 0) {
		this.time = h * 60 + m;

		this.clamp();
	}

	clamp() {
		while (this.time < 0) {
			this.time += 24 * 60;
		}

		while (this.time > 24 * 60) {
			this.time -= 24 * 60;
		}
	}

	get hours() {
		return Math.floor(this.time / 60) % 24;
	}

	get minutes() {
		return Math.floor(this.time % 60);
	}

	getTime() {
		return this.time;
	}

	fill(n) {
		return `${n < 10 ? '0' : ''}${n}`;
	}

	toString() {
		return `${this.fill(this.hours)}:${this.fill(this.minutes)}`;
	}

	plus(m) {
		this.time += m;

		this.clamp();

		return this;
	}

	minus(m) {
		this.time -= m;

		this.clamp();

		return this;
	}

	equals(otherClock) {
		return this.time === otherClock.getTime();
	}
}
