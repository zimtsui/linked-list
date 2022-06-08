export declare abstract class Unfriendly<T> {
    protected abstract friendly: Node<T>;
    getPrev(): Unfriendly<T>;
    getNext(): Unfriendly<T>;
    setPrev(prev: Unfriendly<T>): void;
    setNext(next: Unfriendly<T>): void;
    remove(): void;
    insert(x: T): void;
    getValue(): T;
}
export declare abstract class Node<T> {
    abstract structState: StructState<T>;
    abstract maybeState: MaybeState<T>;
    abstract host: Unfriendly<T>;
    abstract getPrev(): Node<T>;
    abstract getNext(): Node<T>;
    abstract setPrev(prev: Node<T>): void;
    abstract setNext(next: Node<T>): void;
    abstract remove(): void;
    abstract insert(x: T): void;
    abstract getValue(): T;
}
export declare abstract class StructState<T> {
    protected abstract host: Node<T>;
    abstract getPrev(): Node<T>;
    abstract getNext(): Node<T>;
    abstract setPrev(prev: Node<T>): void;
    abstract setNext(next: Node<T>): void;
    abstract remove(): void;
    abstract insert(node: Node<T>): void;
}
export declare abstract class MaybeState<T> {
    protected abstract host: Node<T>;
    abstract getValue(): T;
}
