import {
	StructState,
	Friendly,
} from '../../../node-instance';
import { FactoriesLike } from '../factories-like';
import assert = require('assert');


export class Listed<T, Node extends Friendly<T, Node>> extends StructState<T, Node> {
	public constructor(
		protected host: Node,
		private factories: FactoriesLike<T, Node>,
		private prev: Node,
		private next: Node,
	) {
		super();
	}

	public getPrev(): Node {
		return this.prev;
	}

	public getNext(): Node {
		return <Node>this.next;
	}

	public setPrev(prev: Node): void {
		this.prev = prev;
	}

	public setNext(next: Node): void {
		this.next = next;
	}

	public setPrevNext(
		prev: Node,
		next: Node,
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

	public insert(node: Node): void {
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
