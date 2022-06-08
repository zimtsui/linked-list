import { StructState, NodeLike } from '../../node-instance';
import { FactoriesLike } from '../factories-like';


export class Listed<T> extends StructState<T> {
	public constructor(
		protected host: NodeLike<T>,
		private factories: FactoriesLike<T>,
		private prev: NodeLike<T>,
		private next: NodeLike<T>,
	) {
		super();
		host.structState = this;
	}

	public getPrev(): NodeLike<T> {
		return this.prev;
	}

	public getNext(): NodeLike<T> {
		return this.next;
	}

	public setPrev(prev: NodeLike<T>): void {
		this.prev = prev;
	}

	public setNext(next: NodeLike<T>): void {
		this.next = next;
	}

	public remove(): void {
		this.prev.setNext(this.next);
		this.next.setPrev(this.prev);
		this.factories.isolated.create(this.host);
	}

	public insert(node: NodeLike<T>): void {
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
