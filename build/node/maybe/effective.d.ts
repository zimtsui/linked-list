import { MaybeState } from '../node-instance';
import { NodeLike } from '../node-instance';
export declare class Effevtive<T> extends MaybeState<T> {
    protected host: NodeLike<T>;
    private value;
    constructor(host: NodeLike<T>, value: T);
    getValue(): T;
}
