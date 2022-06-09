import {
	StructState,
	FriendlyNode,
	Node,
	assertFriendly,
} from '../../../node-instance';
import { FactoriesLike } from '../factories-like';


export class Isolated<T> extends StructState<T> {
	public constructor(
		protected host: FriendlyNode<T>,
		private factories: FactoriesLike<T>,
	) {
		super();
	}

	public getPrev(): FriendlyNode<T> {
		throw new RangeError();
	}

	public getNext(): FriendlyNode<T> {
		throw new RangeError();
	}

	public setPrev(prev: Node<T>): void {
		throw new RangeError();
	}

	public setNext(next: Node<T>): void {
		throw new RangeError();
	}

	public setPrevNext(
		prev: Node<T>,
		next: Node<T>,
	): void {
		this.host.structState = this.factories.listed.create(
			this.host,
			prev,
			next,
		);
	}

	public remove(): void {
		throw new RangeError();
	}

	public insert(node: FriendlyNode<T>): void {
		throw new RangeError();
	}
}
