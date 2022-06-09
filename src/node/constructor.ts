import {
	Unfriendly as Node,
	Friendly as FriendlyNode,
} from './node-instance';
import {
	Sentinel as FriendlySentinel,
	Regular as FriendlyRegular,
} from './friendly/constructor';



abstract class Skeleton<T> extends Node<T> {

	public getPrev(): Node<T> {
		return this.friendly.getPrev().host;
	}

	public getNext(): Node<T> {
		return this.friendly.getNext().host;
	}

	public setPrev(prev: Node<T>): void {
		this.friendly.setPrev(Node.getFriendly(prev));
	}

	public setNext(next: Node<T>): void {
		this.friendly.setNext(Node.getFriendly(next));
	}

	public remove(): void {
		this.friendly.remove();
	}

	public insert(x: T): void {
		this.friendly.insert(x);
	}

	public getValue(): T {
		return this.friendly.getValue();
	}
}


export namespace Sentinel {
	class Sentinel<T> extends Skeleton<T>{
		protected friendly: FriendlyNode<T>;

		public constructor() {
			super();
			this.friendly = FriendlySentinel.create(this);
		}
	}

	export function create<T>(): Node<T> {
		return new Sentinel();
	}
}


export namespace Regular {
	class Regular<T> extends Skeleton<T> {
		protected friendly: FriendlyNode<T>;

		public constructor(
			x: T,
			prev: Node<T>,
			next: Node<T>,
		) {
			super();
			this.friendly = FriendlyRegular.create(
				this,
				x,
				Node.getFriendly(prev),
				Node.getFriendly(next),
			);
		}
	}

	export function create<T>(
		x: T,
		prev: Node<T>,
		next: Node<T>,
	): Node<T> {
		return new Regular(
			x,
			prev,
			next,
		);
	}
}
