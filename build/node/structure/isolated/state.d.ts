import { StructState, NodeLike } from '../../node-instance';
import { FactoriesLike } from '../factories-like';
export declare class Isolated<T> extends StructState<T> {
    protected host: NodeLike<T>;
    private factories;
    constructor(host: NodeLike<T>, factories: FactoriesLike<T>);
    getPrev(): NodeLike<T>;
    getNext(): NodeLike<T>;
    setPrev(prev: NodeLike<T>): void;
    setNext(next: NodeLike<T>): void;
    remove(): void;
    insert(node: NodeLike<T>): void;
}
