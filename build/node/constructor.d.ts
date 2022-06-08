import { Unfriendly as Node } from './node-instance';
import * as Friendly from './friendly';
export declare function createSentinel<T>(): Node<T>;
export declare function createRegular<T>(structFactories: Friendly.StructFactories<T>, x: T): Node<T>;
