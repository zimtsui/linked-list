import { FactoriesLike } from './factories-like';
import * as Isolated from './isolated/factory';
import * as Listed from './listed/factory';
export declare class Factories<T> implements FactoriesLike<T> {
    isolated: Isolated.Factory<T>;
    listed: Listed.Factory<T>;
}
