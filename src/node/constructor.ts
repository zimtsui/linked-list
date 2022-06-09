import {
	FriendlyNode,
	Node,
	StructState,
	MaybeState,
} from './node-instance';
import { Effevtive } from './friendly/maybe/effective';
import { Void } from './friendly/maybe/void';
import { Factories as StructFactories } from './friendly/structure/factories';


abstract class Skeleton<T> extends FriendlyNode<T> {
	public getPrev(): FriendlyNode<T> {
		return this.structState.getPrev();
	}

	public getNext(): FriendlyNode<T> {
		return this.structState.getNext();
	}

	public setPrev(prev: Node<T>): void {
		this.structState.setPrev(prev);
	}

	public setNext(next: Node<T>): void {
		this.structState.setNext(next);
	}

	public remove(): void {
		this.structState.remove();
	}

	public insert(x: T): void {
		const node = Regular.create(
			x,
			this.getPrev(),
			this.getNext(),
		);
		this.structState.insert(node);
	}

	public getValue(): T {
		return this.maybeState.getValue();
	}
}

// https://github.com/microsoft/TypeScript/issues/30355

export namespace Sentinel {
	class Sentinel<T> extends Skeleton<T> {
		public structState: StructState<T>;
		public maybeState: MaybeState<T>;

		public static create<T>(): FriendlyNode<T> {
			return new Sentinel();
		}

		public constructor() {
			super();

			this.maybeState = new Void(this);

			const structFactories = new StructFactories<T>();
			this.structState = structFactories.listed.create(
				this,
				this,
				this,
			);
		}

		public static x = 1;
	}

	export function create<T>(): FriendlyNode<T> {
		return new Sentinel();
	}
}


export namespace Regular {
	class Regular<T> extends Skeleton<T> {
		public structState: StructState<T>;
		public maybeState: MaybeState<T>;

		public constructor(
			x: T,
			prev: FriendlyNode<T>,
			next: FriendlyNode<T>,
		) {
			super();

			this.maybeState = new Effevtive(this, x);

			const structFactories = new StructFactories<T>();
			this.structState = structFactories.listed.create(
				this,
				prev,
				next,
			);
		}
	}

	export function create<T>(
		x: T,
		prev: FriendlyNode<T>,
		next: FriendlyNode<T>,
	): FriendlyNode<T> {
		return new Regular(
			x,
			prev,
			next,
		);
	}
}
