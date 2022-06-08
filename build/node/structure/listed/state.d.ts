import { StructState, NodeLike } from '../../node-instance';
import { FactoriesLike } from '../factories-like';
export declare class Listed<T> extends StructState<T> {
    protected host: NodeLike<T>;
    private factories;
    private prev;
    private next;
    constructor(host: NodeLike<T>, factories: FactoriesLike<T>, prev: NodeLike<T>, next: NodeLike<T>);
    getPrev(): NodeLike<T>;
    getNext(): NodeLike<T>;
    setPrev(prev: NodeLike<T>): void;
    setNext(next: NodeLike<T>): void;
    remove(): void;
    insert(node: NodeLike<T>): void;
}
