import { MaybeState } from '../../node-instance';
import { Friendly } from '../../node-instance';
export declare class Void<T, Node extends Friendly<T, Node>> extends MaybeState<T, Node> {
    protected host: Node;
    constructor(host: Node);
    getValue(): T;
}
