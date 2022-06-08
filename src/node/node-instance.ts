export abstract class Unfriendly<T> {
	protected abstract friendly: Friendly<T>;

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
	public abstract remove(): void;
	public abstract insert(node: Friendly<T>): void;
}


export abstract class MaybeState<T> {
	protected abstract host: Friendly<T>;
	public abstract getValue(): T;
}
