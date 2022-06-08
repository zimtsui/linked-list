import { MaybeState } from '../../node-instance';
import { Friendly as Node } from '../../node-instance';
export declare class Void<T> extends MaybeState<T> {
    protected host: Node<T>;
    constructor(host: Node<T>);
    getValue(): T;
}
