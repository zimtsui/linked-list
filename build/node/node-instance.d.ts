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
export declare abstract class StructState<T, Node extends Friendly<T, Node>> {
    protected abstract host: Node;
    abstract getPrev(): Node;
    abstract getNext(): Node;
    abstract setPrev(prev: Node): void;
    abstract setNext(next: Node): void;
    abstract setPrevNext(prev: Node, next: Node): void;
    abstract remove(): void;
    abstract insert(node: Node): void;
}
export declare abstract class MaybeState<T, Node extends Friendly<T, Node>> {
    protected abstract host: Node;
    abstract getValue(): T;
}
