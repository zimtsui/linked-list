import { Unfriendly as Node } from './node/node-instance';
import { Sentinel } from './node/constructor';
import assert = require('assert');



export class LinkedList<T> implements Iterable<T> {
	private endpoint = Sentinel.create<T>();
	private size = 0;

	public push(x: T): void {
		this.endpoint.insert(x);
		this.size++;
	}

	public pop(): T {
		const node = this.endpoint.getPrev();
		node.remove();
		this.size--;
		return node.getValue();
	}

	public shift(): T {
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


export class NodeIterator<T> implements Iterator<T, void> {
	public constructor(
		private node: Node<T>,
	) { }

	public next(): IteratorResult<T> {
		this.node = this.node.getNext();
		try {
			return {
				done: false,
				value: this.node.getValue(),
			};
		} catch (err) {
			return {
				done: true,
				value: void null,
			};
		}
	}
}
