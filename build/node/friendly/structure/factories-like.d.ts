import * as Isolated from './isolated';
import * as Listed from './listed';
import { Friendly } from '../../node-instance';
export interface FactoriesLike<T, Node extends Friendly<T, Node>> {
    isolated: Isolated.FactoryLike<T, Node>;
    listed: Listed.FactoryLike<T, Node>;
}
