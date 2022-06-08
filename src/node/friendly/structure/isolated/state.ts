import {
	StructState,
	Friendly as Node,
} from '../../../node-instance';
import { FactoriesLike } from '../factories-like';


export class Isolated<T> extends StructState<T> {
	public constructor(
		protected host: Node<T>,
		private factories: FactoriesLike<T>,
	) {
		super();
		host.structState = this;
	}

	public getPrev(): Node<T> {
		throw new RangeError();
	}

	public getNext(): Node<T> {
		throw new RangeError();
	}

	public setPrev(prev: Node<T>): void {
		throw new RangeError();
	}

	public setNext(next: Node<T>): void {
		throw new RangeError();
	}

	public remove(): void {
		throw new RangeError();
	}

	public insert(node: Node<T>): void {
		throw new RangeError();
	}
}
