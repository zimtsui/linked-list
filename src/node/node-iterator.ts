import { Node } from './node';



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
