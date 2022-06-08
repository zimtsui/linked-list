import {
	NodeLike,
	StructState,
	MaybeState,
} from './node-instance';
import { Effevtive } from './maybe/effective';
import { Void } from './maybe/void';
import * as Structure from './structure/factories';


export class Node<T> implements NodeLike<T> {
	public structState!: StructState<T>;
	public maybeState!: MaybeState<T>;

	public static createSentinel<T>(): Node<T> {
		const structFactories = new Structure.Factories<T>();
		const node = new Node(structFactories);
		new Void(node);
		structFactories.listed.create(node, node, node);
		return node;
	}

	public static createRegular<T>(
		structFactories: Structure.Factories<T>,
		x: T,
	): Node<T> {
		const node = new Node(structFactories);
		new Effevtive(node, x);
		return node;
	}

	public constructor(
		private structFactories: Structure.Factories<T>,
	) { }

	public getPrev(): NodeLike<T> {
		return this.structState.getPrev();
	}

	public getNext(): NodeLike<T> {
		return this.structState.getNext();
	}

	public setPrev(prev: NodeLike<T>): void {
		this.structState.setPrev(prev);
	}

	public setNext(next: NodeLike<T>): void {
		this.structState.setNext(next);
	}

	public remove(): void {
		this.structState.remove();
	}

	public insert(x: T): void {
		const node = Node.createRegular(
			this.structFactories,
			x,
		);
		this.structState.insert(node);
	}

	public getValue(): T {
		return this.maybeState.getValue();
	}
}
