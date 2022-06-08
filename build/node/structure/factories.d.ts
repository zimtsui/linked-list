import { FactoriesLike } from './factories-like';
import * as Isolated from './isolated';
import * as Listed from './listed';
export declare class Factories<T> implements FactoriesLike<T> {
    isolated: Isolated.FactoryLike<T>;
    listed: Listed.Factory<T>;
}
