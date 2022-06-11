export abstract class Node<T> {
	public abstract state: State<T>;

	public abstract getPrev(): Node<T>;
	public abstract getNext(): Node<T>;
	public abstract setPrev(prev: Node<T>): void;
	public abstract setNext(next: Node<T>): void;
	public abstract setPrevNext(
		prev: Node<T>,
		next: Node<T>,
	): void;
	public abstract remove(): void;
	public abstract insert(x: T): void;
	public abstract getValue(): T;
}


export abstract class State<T> {
	protected abstract host: Node<T>;

	public abstract getPrev(): Node<T>;
	public abstract getNext(): Node<T>;
	public abstract setPrev(prev: Node<T>): void;
	public abstract setNext(next: Node<T>): void;
	public abstract setPrevNext(
		prev: Node<T>,
		next: Node<T>,
	): void;
	public abstract remove(): void;
	public abstract insert(node: Node<T>): void;
}


export abstract class Effective<T> extends Node<T> {
	protected abstract x: T;

	public getValue(): T {
		return this.x;
	}
}


export abstract class Void<T> extends Node<T> {
	public getValue(): T {
		throw new ReferenceError();
	}
}
