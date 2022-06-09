import { Unfriendly as Node } from './node-instance';
export declare namespace Sentinel {
    function create<T>(): Node<T>;
}
export declare namespace Regular {
    function create<T>(x: T, prev: Node<T>, next: Node<T>): Node<T>;
}
