import { MaybeState } from '../node';
import { Node } from '../node';
export declare class Effevtive<T> extends MaybeState<T> {
    protected host: Node<T>;
    private value;
    constructor(host: Node<T>, value: T);
    getValue(): T;
}
