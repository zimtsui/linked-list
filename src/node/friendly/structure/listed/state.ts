import {
	StructState,
	FriendlyNode,
	Node,
	assertFriendly,
} from '../../../node-instance';
import { FactoriesLike } from '../factories-like';
import assert = require('assert');


export class Listed<T> extends StructState<T> {
	public constructor(
		protected host: FriendlyNode<T>,
		private factories: FactoriesLike<T>,
		private prev: Node<T>,
		private next: Node<T>,
	) {
		super();
	}

	public getPrev(): FriendlyNode<T> {
		return <FriendlyNode<T>>this.prev;
	}

	public getNext(): FriendlyNode<T> {
		return <FriendlyNode<T>>this.next;
	}

	public setPrev(prev: Node<T>): void {
		assertFriendly(prev);
		this.prev = prev;
	}

	public setNext(next: Node<T>): void {
		assertFriendly(next);
		this.next = next;
	}

	public setPrevNext(
		prev: Node<T>,
		next: Node<T>,
	): void {
		this.setPrev(prev);
		this.setNext(next);
	}

	public remove(): void {
		assert(
			this.getNext() !== this.host,
			new RangeError(),
		);
		this.prev.setNext(this.next);
		this.next.setPrev(this.prev);
		this.host.structState = this.factories.isolated.create(this.host);
	}

	public insert(node: FriendlyNode<T>): void {
		const prev = this.prev;
		const next = this.host;
		this.factories.listed.create(
			node,
			prev,
			next,
		);
		prev.setNext(node);
		next.setPrev(node);
	}
}
