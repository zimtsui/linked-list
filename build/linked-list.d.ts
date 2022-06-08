import { Node } from './node';
export declare class LinkedList<T> implements Iterable<T> {
    private endpoint;
    push(x: T): void;
    pop(): T;
    shift(): T;
    unshift(x: T): void;
    [Symbol.iterator](): Iterator<T, void>;
}
export declare class NodeIterator<T> implements Iterator<T, void> {
    private node;
    constructor(node: Node<T>);
    next(): IteratorResult<T>;
}
