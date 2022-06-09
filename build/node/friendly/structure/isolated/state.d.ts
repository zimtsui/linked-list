import { StructState, Friendly } from '../../../node-instance';
import { FactoriesLike } from '../factories-like';
export declare class Isolated<T, Node extends Friendly<T, Node>> extends StructState<T, Node> {
    protected host: Node;
    private factories;
    constructor(host: Node, factories: FactoriesLike<T, Node>);
    getPrev(): Node;
    getNext(): Node;
    setPrev(prev: Node): void;
    setNext(next: Node): void;
    setPrevNext(prev: Node, next: Node): void;
    remove(): void;
    insert(node: Node): void;
}
