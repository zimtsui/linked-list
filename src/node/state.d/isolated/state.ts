import {
	State,
	Node,
} from '../../node-instance';
import { FactoriesLike } from '../factories-like';


export class Isolated<T> extends State<T>{
	public constructor(
		protected host: Node<T>,
		private factories: FactoriesLike<T>,
	) {
		super();
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

	public setPrevNext(
		prev: Node<T>,
		next: Node<T>,
	): void {
		this.host.state = this.factories.listed.create(
			this.host,
			prev,
			next,
		);
	}

	public remove(): void {
		throw new RangeError();
	}

	public insert(node: Node<T>): void {
		throw new RangeError();
	}
}
