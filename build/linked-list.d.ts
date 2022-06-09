import { Unfriendly as Node } from './node/node-instance';
export declare class LinkedList<T> implements Iterable<T> {
    private endpoint;
    private size;
    push(x: T): void;
    pop(): T;
    shift(): T;
    unshift(x: T): void;
    [Symbol.iterator](): Iterator<T, void>;
    getSize(): number;
    i(index: 0 | -1): T;
}
export declare class NodeIterator<T> implements Iterator<T, void> {
    private node;
    constructor(node: Node<T>);
    next(): IteratorResult<T>;
}
