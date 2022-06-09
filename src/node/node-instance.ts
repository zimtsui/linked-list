export interface Unfriendly<T, Node extends Unfriendly<T, Node>> {
	getPrev(): Node;
	getNext(): Node;
	remove(): void;
	insert(x: T): void;
	getValue(): T;
}

export interface Friendly<T, Node extends Friendly<T, Node>> extends Unfriendly<T, Node> {
	structState: StructState<T, Node>;
	maybeState: MaybeState<T, Node>;

	getPrev(): Node;
	getNext(): Node;
	setPrev(prev: Node): void;
	setNext(next: Node): void;
	remove(): void;
	insert(x: T): void;
	getValue(): T;
}


export abstract class StructState<T, Node extends Friendly<T, Node>> {
	protected abstract host: Node;

	public abstract getPrev(): Node;
	public abstract getNext(): Node;
	public abstract setPrev(prev: Node): void;
	public abstract setNext(next: Node): void;
	public abstract setPrevNext(
		prev: Node,
		next: Node,
	): void;
	public abstract remove(): void;
	public abstract insert(node: Node): void;
}


export abstract class MaybeState<T, Node extends Friendly<T, Node>> {
	protected abstract host: Node;
	public abstract getValue(): T;
}
