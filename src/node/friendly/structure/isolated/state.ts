import {
	StructState,
	Friendly
} from '../../../node-instance';
import { FactoriesLike } from '../factories-like';


export class Isolated<T, Node extends Friendly<T, Node>> extends StructState<T, Node> {
	public constructor(
		protected host: Node,
		private factories: FactoriesLike<T, Node>,
	) {
		super();
	}

	public getPrev(): Node {
		throw new RangeError();
	}

	public getNext(): Node {
		throw new RangeError();
	}

	public setPrev(prev: Node): void {
		throw new RangeError();
	}

	public setNext(next: Node): void {
		throw new RangeError();
	}

	public setPrevNext(
		prev: Node,
		next: Node,
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

	public insert(node: Node): void {
		throw new RangeError();
	}
}
