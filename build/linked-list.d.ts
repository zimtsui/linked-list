import { Node } from './node/node';
export declare class LinkedList<T> implements Iterable<T> {
    protected endpoint: Node<T>;
    private size;
    constructor();
    push(x: T): void;
    pop(): T;
    shift(): T;
    unshift(x: T): void;
    [Symbol.iterator](): Iterator<T, void>;
    getSize(): number;
    i(index: 0 | -1): T;
}
