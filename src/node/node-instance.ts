export abstract class Unfriendly<T> {
	protected abstract friendly: Friendly<T>;

	protected static getFriendly<T>(unfriendly: Unfriendly<T>): Friendly<T> {
		return unfriendly.friendly;
	}

	public abstract getPrev(): Unfriendly<T>;
	public abstract getNext(): Unfriendly<T>;
	public abstract setPrev(prev: Unfriendly<T>): void;
	public abstract setNext(next: Unfriendly<T>): void;
	public abstract remove(): void;
	public abstract insert(x: T): void;
	public abstract getValue(): T;
}


export abstract class Friendly<T> {
	public abstract structState: StructState<T>;
	public abstract maybeState: MaybeState<T>;
	public abstract host: Unfriendly<T>;

	public abstract getPrev(): Friendly<T>;
	public abstract getNext(): Friendly<T>;
	public abstract setPrev(prev: Friendly<T>): void;
	public abstract setNext(next: Friendly<T>): void;
	public abstract remove(): void;
	public abstract insert(x: T): void;
	public abstract getValue(): T;
}


export abstract class StructState<T> {
	protected abstract host: Friendly<T>;

	public abstract getPrev(): Friendly<T>;
	public abstract getNext(): Friendly<T>;
	public abstract setPrev(prev: Friendly<T>): void;
	public abstract setNext(next: Friendly<T>): void;
	public abstract setPrevNext(
		prev: Friendly<T>,
		next: Friendly<T>,
	): void;
	public abstract remove(): void;
	public abstract insert(node: Friendly<T>): void;
}


export abstract class MaybeState<T> {
	protected abstract host: Friendly<T>;
	public abstract getValue(): T;
}
