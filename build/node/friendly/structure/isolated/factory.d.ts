import { FactoryLike } from './factory-like';
import { FactoriesLike } from '../factories-like';
import { Isolated } from './state';
import { Friendly as Node } from '../../../node-instance';
export declare class Factory<T> implements FactoryLike<T> {
    private factories;
    constructor(factories: FactoriesLike<T>);
    create(host: Node<T>): Isolated<T>;
}
