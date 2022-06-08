import { StructState, NodeLike } from '../../node-instance';
import { FactoriesLike } from '../factories-like';


export class Isolated<T> extends StructState<T> {
	public constructor(
		protected host: NodeLike<T>,
		private factories: FactoriesLike<T>,
	) {
		super();
		host.structState = this;
	}

	public getPrev(): NodeLike<T> {
		throw new RangeError();
	}

	public getNext(): NodeLike<T> {
		throw new RangeError();
	}

	public setPrev(prev: NodeLike<T>): void {
		throw new RangeError();
	}

	public setNext(next: NodeLike<T>): void {
		throw new RangeError();
	}

	public remove(): void {
		throw new RangeError();
	}

	public insert(node: NodeLike<T>): void {
		throw new RangeError();
	}
}
