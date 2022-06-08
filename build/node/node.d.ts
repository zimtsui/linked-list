import { NodeLike, StructState, MaybeState } from './node-instance';
import * as Structure from './structure/factories';
export declare class Node<T> implements NodeLike<T> {
    private structFactories;
    structState: StructState<T>;
    maybeState: MaybeState<T>;
    static createSentinel<T>(): Node<T>;
    static createRegular<T>(structFactories: Structure.Factories<T>, x: T): Node<T>;
    constructor(structFactories: Structure.Factories<T>);
    getPrev(): NodeLike<T>;
    getNext(): NodeLike<T>;
    setPrev(prev: NodeLike<T>): void;
    setNext(next: NodeLike<T>): void;
    remove(): void;
    insert(x: T): void;
    getValue(): T;
}
