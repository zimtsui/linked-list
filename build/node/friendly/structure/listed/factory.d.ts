import { FactoryLike } from './factory-like';
import { FactoriesLike } from '../factories-like';
import { Friendly } from '../../../node-instance';
import { Listed } from './state';
export declare class Factory<T, Node extends Friendly<T, Node>> implements FactoryLike<T, Node> {
    private factories;
    constructor(factories: FactoriesLike<T, Node>);
    create(host: Node, prev: Node, next: Node): Listed<T, Node>;
}
