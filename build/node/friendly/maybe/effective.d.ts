import { MaybeState } from '../../node-instance';
import { Friendly as Node } from '../../node-instance';
export declare class Effevtive<T> extends MaybeState<T> {
    protected host: Node<T>;
    private value;
    constructor(host: Node<T>, value: T);
    getValue(): T;
}
