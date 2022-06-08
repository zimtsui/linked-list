export declare abstract class Unfriendly<T> {
    protected abstract friendly: Friendly<T>;
    getPrev(): Unfriendly<T>;
    getNext(): Unfriendly<T>;
    setPrev(prev: Unfriendly<T>): void;
    setNext(next: Unfriendly<T>): void;
    remove(): void;
    insert(x: T): void;
    getValue(): T;
}
export declare abstract class Friendly<T> {
    abstract structState: StructState<T>;
    abstract maybeState: MaybeState<T>;
    abstract host: Unfriendly<T>;
    abstract getPrev(): Friendly<T>;
    abstract getNext(): Friendly<T>;
    abstract setPrev(prev: Friendly<T>): void;
    abstract setNext(next: Friendly<T>): void;
    abstract remove(): void;
    abstract insert(x: T): void;
    abstract getValue(): T;
}
export declare abstract class StructState<T> {
    protected abstract host: Friendly<T>;
    abstract getPrev(): Friendly<T>;
    abstract getNext(): Friendly<T>;
    abstract setPrev(prev: Friendly<T>): void;
    abstract setNext(next: Friendly<T>): void;
    abstract remove(): void;
    abstract insert(node: Friendly<T>): void;
}
export declare abstract class MaybeState<T> {
    protected abstract host: Friendly<T>;
    abstract getValue(): T;
}
