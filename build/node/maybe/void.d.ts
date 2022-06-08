import { MaybeState } from '../node';
import { Node } from '../node';
export declare class Void<T> extends MaybeState<T> {
    protected host: Node<T>;
    constructor(host: Node<T>);
    getValue(): T;
}
