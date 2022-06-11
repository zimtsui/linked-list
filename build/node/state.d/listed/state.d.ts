import { State, Node } from '../../node';
import { FactoriesLike } from '../factories-like';
export declare class Listed<T> extends State<T> {
    protected host: Node<T>;
    private factories;
    private prev;
    private next;
    constructor(host: Node<T>, factories: FactoriesLike<T>, prev: Node<T>, next: Node<T>);
    getPrev(): Node<T>;
    getNext(): Node<T>;
    setPrev(prev: Node<T>): void;
    setNext(next: Node<T>): void;
    setPrevNext(prev: Node<T>, next: Node<T>): void;
    remove(): void;
    insert(node: Node<T>): void;
}
