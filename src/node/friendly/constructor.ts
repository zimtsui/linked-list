import {
	Friendly as Node,
	Unfriendly as UnfriendlyNode,
	StructState,
	MaybeState,
} from '../node-instance';
import { Effevtive } from './maybe/effective';
import { Void } from './maybe/void';
import { Factories as StructFactories } from './structure/factories';


abstract class Skeleton<T> extends Node<T> {
	public getPrev(): Node<T> {
		return this.structState.getPrev();
	}

	public getNext(): Node<T> {
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
			this.host,
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

		public static create<T>(
			host: UnfriendlyNode<T>,
		): Node<T> {
			return new Sentinel(host);
		}

		public constructor(
			public host: UnfriendlyNode<T>,
		) {
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

	export function create<T>(
		host: UnfriendlyNode<T>,
	): Node<T> {
		return new Sentinel(host);
	}
}


export namespace Regular {
	class Regular<T> extends Skeleton<T> {
		public structState: StructState<T>;
		public maybeState: MaybeState<T>;

		public constructor(
			public host: UnfriendlyNode<T>,
			x: T,
			prev: Node<T>,
			next: Node<T>,
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
		host: UnfriendlyNode<T>,
		x: T,
		prev: Node<T>,
		next: Node<T>,
	): Node<T> {
		return new Regular(
			host,
			x,
			prev,
			next,
		);
	}
}
