export interface NodeLike<T> {
	structState: StructState<T>;
	maybeState: MaybeState<T>;

	getPrev(): NodeLike<T>;
	getNext(): NodeLike<T>;
	setPrev(prev: NodeLike<T>): void;
	setNext(next: NodeLike<T>): void;
	remove(): void;
	insert(x: T): void;
	getValue(): T;
}


export abstract class StructState<T> {
	protected abstract host: NodeLike<T>;

	public abstract getPrev(): NodeLike<T>;
	public abstract getNext(): NodeLike<T>;
	public abstract setPrev(prev: NodeLike<T>): void;
	public abstract setNext(next: NodeLike<T>): void;
	public abstract remove(): void;
	public abstract insert(node: NodeLike<T>): void;
}


export abstract class MaybeState<T> {
	protected abstract host: NodeLike<T>;
	public abstract getValue(): T;
}
