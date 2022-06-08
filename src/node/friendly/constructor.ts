import {
	Friendly as Node,
	Unfriendly,
	StructState,
	MaybeState,
} from '../node-instance';
import { Effevtive } from './maybe/effective';
import { Void } from './maybe/void';
import * as Structure from './structure/factories';


class skeletonConstructor<T> extends Node<T> {
	public structState!: StructState<T>;
	public maybeState!: MaybeState<T>;

	public constructor(
		public host: Unfriendly<T>,
		private structFactories: Structure.Factories<T>,
	) { super(); }

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
		const node = createRegular(
			this.host,
			this.structFactories,
			x,
		);
		this.structState.insert(node);
	}

	public getValue(): T {
		return this.maybeState.getValue();
	}
}

export function createSentinel<T>(
	host: Unfriendly<T>,
): Node<T> {
	const structFactories = new Structure.Factories<T>();
	const node = new skeletonConstructor(
		host,
		structFactories,
	);
	new Void(node);
	structFactories.listed.create(node, node, node);
	return node;
}

export function createRegular<T>(
	host: Unfriendly<T>,
	structFactories: Structure.Factories<T>,
	x: T,
): Node<T> {
	const node = new skeletonConstructor(
		host,
		structFactories,
	);
	new Effevtive(node, x);
	return node;
}
