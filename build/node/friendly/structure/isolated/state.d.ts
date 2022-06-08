import { StructState, Friendly as Node } from '../../../node-instance';
import { FactoriesLike } from '../factories-like';
export declare class Isolated<T> extends StructState<T> {
    protected host: Node<T>;
    private factories;
    constructor(host: Node<T>, factories: FactoriesLike<T>);
    getPrev(): Node<T>;
    getNext(): Node<T>;
    setPrev(prev: Node<T>): void;
    setNext(next: Node<T>): void;
    remove(): void;
    insert(node: Node<T>): void;
}
