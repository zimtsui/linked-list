export abstract class Unfriendly<T> {
	protected abstract friendly: Node<T>;

	public getPrev(): Unfriendly<T> {
		return this.friendly.getPrev().host;
	}

	public getNext(): Unfriendly<T> {
		return this.friendly.getNext().host;
	}

	public setPrev(prev: Unfriendly<T>): void {
		this.friendly.setPrev(prev.friendly);
	}

	public setNext(next: Unfriendly<T>): void {
		this.friendly.setNext(next.friendly);
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


export abstract class Node<T> {
	public abstract structState: StructState<T>;
	public abstract maybeState: MaybeState<T>;
	public abstract host: Unfriendly<T>;

	public abstract getPrev(): Node<T>;
	public abstract getNext(): Node<T>;
	public abstract setPrev(prev: Node<T>): void;
	public abstract setNext(next: Node<T>): void;
	public abstract remove(): void;
	public abstract insert(x: T): void;
	public abstract getValue(): T;
}


export abstract class StructState<T> {
	protected abstract host: Node<T>;

	public abstract getPrev(): Node<T>;
	public abstract getNext(): Node<T>;
	public abstract setPrev(prev: Node<T>): void;
	public abstract setNext(next: Node<T>): void;
	public abstract remove(): void;
	public abstract insert(node: Node<T>): void;
}


export abstract class MaybeState<T> {
	protected abstract host: Node<T>;
	public abstract getValue(): T;
}
