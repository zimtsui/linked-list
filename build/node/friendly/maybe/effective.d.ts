import { MaybeState } from '../../node-instance';
import { Friendly } from '../../node-instance';
export declare class Effevtive<T, Node extends Friendly<T, Node>> extends MaybeState<T, Node> {
    protected host: Node;
    private value;
    constructor(host: Node, value: T);
    getValue(): T;
}
