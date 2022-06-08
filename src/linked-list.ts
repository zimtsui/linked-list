import {
	Node,
	createRegular,
	createSentinel,
} from './node';


export class LinkedList<T> implements Iterable<T> {
	private endpoint: Node<T> = createSentinel();

	public push(x: T): void {
		this.endpoint.insert(x);
	}

	public pop(): T {
		const node = this.endpoint.getPrev();
		node.remove();
		return node.getValue();
	}

	public shift(): T {
		const node = this.endpoint.getNext();
		node.remove();
		return node.getValue();
	}

	public unshift(x: T): void {
		this.endpoint.getNext().insert(x);
	}

	public [Symbol.iterator](): Iterator<T, void> {
		return new NodeIterator<T>(this.endpoint);
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
