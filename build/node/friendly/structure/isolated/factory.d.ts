import { FactoryLike } from './factory-like';
import { FactoriesLike } from '../factories-like';
import { Isolated } from './state';
import { Friendly } from '../../../node-instance';
export declare class Factory<T, Node extends Friendly<T, Node>> implements FactoryLike<T, Node> {
    private factories;
    constructor(factories: FactoriesLike<T, Node>);
    create(host: Node): Isolated<T, Node>;
}
