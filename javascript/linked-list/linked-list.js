import Node from './node';

export class LinkedList {
	constructor() {
		/**
		 * @type {Node|null}
		 */
		this.firstNode = null;
		/**
		 * @type {Node|null}
		 */
		this.lastNode = null;
	}

	push(value) {
		const n = new Node(value);

		if (this.firstNode === null) {
			this.firstNode = n;
			this.lastNode = n;
		} else {
			const lastNode = this.lastNode;

			this.lastNode = n;

			n.prev = lastNode;
			lastNode.next = n;
		}
	}

	pop() {
		const node = this.lastNode;

		if (node.prev) {
			this.lastNode = node.prev;
		} else {
			this.lastNode = null;
			this.firstNode = null;
		}

		if (node) {
			return node.value;
		}

		return null;
	}

	shift() {
		const node = this.firstNode;

		if (node.next) {
			this.firstNode = node.next;
		} else {
			this.firstNode = null;
		}

		if (node) {
			return node.value;
		}

		return null;
	}

	unshift(value) {
		const n = new Node(value);

		if (this.firstNode) {
			this.firstNode.prev = n;
			n.next = this.firstNode;
		}

		this.firstNode = n;

		if (!this.lastNode) {
			this.lastNode = n;
		}
	}

	delete(value) {
		let n = this.firstNode;

		while (n !== null) {
			if (n.value === value) {
				if (n.next) {
					n.next.prev = n.prev;
				}

				if (n.prev) {
					n.prev.next = n.next;
				}

				if (n === this.firstNode) {
					this.firstNode = n.next;
				}

				if (n === this.lastNode) {
					this.lastNode = n.prev;
				}
			}

			n = n.next;
		}
	}

	count() {
		let n = this.firstNode;
		let result = 0;

		while (n !== null) {
			++result;

			n = n.next;
		}

		return result;
	}
}
