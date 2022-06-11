import { Node } from './node/node';
import { Sentinel } from './node/constructor';
import { NodeIterator } from './node/node-iterator';
import assert = require('assert');


export class LinkedList<T> implements Iterable<T> {
	protected endpoint: Node<T>;
	private size = 0;

	public constructor() {
		this.endpoint = Sentinel.create();
	}

	public push(x: T): void {
		this.endpoint.insert(x);
		this.size++;
	}

	public pop(): T {
		assert(
			this.size > 0,
			new RangeError(),
		)
		const node = this.endpoint.getPrev();
		node.remove();
		this.size--;
		return node.getValue();
	}

	public shift(): T {
		assert(
			this.size > 0,
			new RangeError(),
		)
		const node = this.endpoint.getNext();
		node.remove();
		this.size--;
		return node.getValue();
	}

	public unshift(x: T): void {
		this.endpoint.getNext().insert(x);
		this.size++;
	}

	public [Symbol.iterator](): Iterator<T, void> {
		return new NodeIterator<T>(this.endpoint);
	}

	public getSize(): number {
		return this.size;
	}

	public i(index: 0 | -1): T {
		assert(
			this.size > 0,
			new RangeError(),
		);
		if (index === 0)
			return this.endpoint.getNext().getValue();
		else
			return this.endpoint.getPrev().getValue();
	}
}
