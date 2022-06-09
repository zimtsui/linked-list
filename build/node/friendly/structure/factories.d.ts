import { FactoriesLike } from './factories-like';
import * as Isolated from './isolated';
import * as Listed from './listed';
import { Friendly } from '../../node-instance';
export declare class Factories<T, Node extends Friendly<T, Node>> implements FactoriesLike<T, Node> {
    isolated: Isolated.FactoryLike<T, Node>;
    listed: Listed.Factory<T, Node>;
}
