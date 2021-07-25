export const secretHandshake = x => {
	if (typeof x === 'number' || x instanceof Number) {
		const events = [
			[0b1, 'wink'],
			[0b10, 'double blink'],
			[0b100, 'close your eyes'],
			[0b1000, 'jump']
		]
			.filter(op => x & op[0])
			.map(op => op[1]);

		if (x & 0b10000) {
			return events.reverse();
		}

		return events;
	} else {
		throw new Error('Handshake must be a number');
	}
};
