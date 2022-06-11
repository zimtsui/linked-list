import { Node } from './node';
export declare class NodeIterator<T> implements Iterator<T, void> {
    private node;
    constructor(node: Node<T>);
    next(): IteratorResult<T>;
}
