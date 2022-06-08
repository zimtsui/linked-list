import { MaybeState } from '../node-instance';
import { NodeLike } from '../node-instance';
export declare class Void<T> extends MaybeState<T> {
    protected host: NodeLike<T>;
    constructor(host: NodeLike<T>);
    getValue(): T;
}
