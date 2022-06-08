import { StructState, Node } from '../../node';
import { FactoriesLike } from '../factories-like';
import assert = require('assert');


export class Listed<T> extends StructState<T> {
	public constructor(
		protected host: Node<T>,
		private factories: FactoriesLike<T>,
		private prev: Node<T>,
		private next: Node<T>,
	) {
		super();
		host.structState = this;
	}

	public getPrev(): Node<T> {
		return this.prev;
	}

	public getNext(): Node<T> {
		return this.next;
	}

	public setPrev(prev: Node<T>): void {
		this.prev = prev;
	}

	public setNext(next: Node<T>): void {
		this.next = next;
	}

	public remove(): void {
		assert(
			this.getNext() !== this.host,
			new RangeError(),
		);
		this.prev.setNext(this.next);
		this.next.setPrev(this.prev);
		this.factories.isolated.create(this.host);
	}

	public insert(node: Node<T>): void {
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
