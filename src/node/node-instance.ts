export abstract class Node<T> {
	protected abstract structState: StructState<T>;
	protected abstract maybeState: MaybeState<T>;

	public abstract getPrev(): Node<T>;
	public abstract getNext(): Node<T>;
	protected abstract setPrev(prev: Node<T>): void;
	protected abstract setNext(next: Node<T>): void;
	public abstract remove(): void;
	public abstract insert(x: T): void;
	public abstract getValue(): T;
}


export abstract class FriendlyNode<T> extends Node<T>{
	public abstract structState: StructState<T>;
	public abstract maybeState: MaybeState<T>;

	public abstract getPrev(): FriendlyNode<T>;
	public abstract getNext(): FriendlyNode<T>;
	public abstract setPrev(prev: Node<T>): void;
	public abstract setNext(next: Node<T>): void;
	public abstract remove(): void;
	public abstract insert(x: T): void;
	public abstract getValue(): T;
}

export function assertFriendly<T>(node: Node<T>): asserts node is FriendlyNode<T> { }


export abstract class StructState<T> {
	protected abstract host: FriendlyNode<T>;

	public abstract getPrev(): FriendlyNode<T>;
	public abstract getNext(): FriendlyNode<T>;
	public abstract setPrev(prev: Node<T>): void;
	public abstract setNext(next: Node<T>): void;
	public abstract setPrevNext(
		prev: Node<T>,
		next: Node<T>,
	): void;
	public abstract remove(): void;
	public abstract insert(node: Node<T>): void;
}


export abstract class MaybeState<T> {
	protected abstract host: FriendlyNode<T>;
	public abstract getValue(): T;
}
