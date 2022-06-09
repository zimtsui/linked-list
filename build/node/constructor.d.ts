import { Friendly, Unfriendly, StructState, MaybeState } from './node-instance';
interface UnFriendly<T, Node extends UnFriendly<T, Node>> extends Friendly<T, Node>, Unfriendly<T, Node> {
}
export declare abstract class Skeleton<T> implements UnFriendly<T, Skeleton<T>> {
    abstract structState: StructState<T, Skeleton<T>>;
    abstract maybeState: MaybeState<T, Skeleton<T>>;
    getPrev(): Skeleton<T>;
    getNext(): Skeleton<T>;
    setPrev(prev: Skeleton<T>): void;
    setNext(next: Skeleton<T>): void;
    remove(): void;
    insert(x: T): void;
    getValue(): T;
}
export declare namespace Sentinel {
    function create<T>(): Skeleton<T>;
}
export declare namespace Regular {
    function create<T>(x: T, prev: Skeleton<T>, next: Skeleton<T>): Skeleton<T>;
}
export {};
