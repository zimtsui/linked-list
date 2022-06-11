import {
	State,
	Node,
} from '../../node';
import { FactoriesLike } from '../factories-like';
import assert = require('assert');


export class Listed<T> extends State<T> {
	public constructor(
		protected host: Node<T>,
		private factories: FactoriesLike<T>,
		private prev: Node<T>,
		private next: Node<T>,
	) {
		super();
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
		this.host.state = this.factories.isolated.create(this.host);
	}

	public insert(node: Node<T>): void {
		const prev = this.prev;
		const next = this.host;
		node.setPrevNext(prev, next);
		prev.setNext(node);
		next.setPrev(node);
	}
}
