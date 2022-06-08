import * as Structure from '../structure/factories';
import { Unfriendly } from '../node';
export declare function createSentinel<T>(): Unfriendly<T>;
export declare function createRegular<T>(structFactories: Structure.Factories<T>, x: T): Unfriendly<T>;
