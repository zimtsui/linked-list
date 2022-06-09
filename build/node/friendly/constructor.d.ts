import { Friendly as Node, Unfriendly as UnfriendlyNode } from '../node-instance';
export declare namespace Sentinel {
    function create<T>(host: UnfriendlyNode<T>): Node<T>;
}
export declare namespace Regular {
    function create<T>(host: UnfriendlyNode<T>, x: T, prev: Node<T>, next: Node<T>): Node<T>;
}
