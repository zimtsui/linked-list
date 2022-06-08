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
export declare abstract class StructState<T> {
    protected abstract host: NodeLike<T>;
    abstract getPrev(): NodeLike<T>;
    abstract getNext(): NodeLike<T>;
    abstract setPrev(prev: NodeLike<T>): void;
    abstract setNext(next: NodeLike<T>): void;
    abstract remove(): void;
    abstract insert(node: NodeLike<T>): void;
}
export declare abstract class MaybeState<T> {
    protected abstract host: NodeLike<T>;
    abstract getValue(): T;
}
