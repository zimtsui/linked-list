import { Node, Unfriendly } from './node';
import * as Structure from './structure/factories';
export declare function createSentinel<T>(host: Unfriendly<T>): Node<T>;
export declare function createRegular<T>(host: Unfriendly<T>, structFactories: Structure.Factories<T>, x: T): Node<T>;
