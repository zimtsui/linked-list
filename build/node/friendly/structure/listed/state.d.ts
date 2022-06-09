import { StructState, Friendly } from '../../../node-instance';
import { FactoriesLike } from '../factories-like';
export declare class Listed<T, Node extends Friendly<T, Node>> extends StructState<T, Node> {
    protected host: Node;
    private factories;
    private prev;
    private next;
    constructor(host: Node, factories: FactoriesLike<T, Node>, prev: Node, next: Node);
    getPrev(): Node;
    getNext(): Node;
    setPrev(prev: Node): void;
    setNext(next: Node): void;
    setPrevNext(prev: Node, next: Node): void;
    remove(): void;
    insert(node: Node): void;
}
