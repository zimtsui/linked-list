export declare abstract class Node<T> {
    abstract state: State<T>;
    abstract getPrev(): Node<T>;
    abstract getNext(): Node<T>;
    abstract setPrev(prev: Node<T>): void;
    abstract setNext(next: Node<T>): void;
    abstract remove(): void;
    abstract insert(x: T): void;
    abstract getValue(): T;
}
export declare abstract class State<T> {
    protected abstract host: Node<T>;
    abstract getPrev(): Node<T>;
    abstract getNext(): Node<T>;
    abstract setPrev(prev: Node<T>): void;
    abstract setNext(next: Node<T>): void;
    abstract setPrevNext(prev: Node<T>, next: Node<T>): void;
    abstract remove(): void;
    abstract insert(node: Node<T>): void;
}
export declare abstract class Effective<T> extends Node<T> {
    protected abstract x: T;
    getValue(): T;
}
export declare abstract class Void<T> extends Node<T> {
    getValue(): T;
}
