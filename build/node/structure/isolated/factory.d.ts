import { FactoryLike } from './factory-like';
import { FactoriesLike } from '../factories-like';
import { NodeLike } from '../../node-instance';
export declare class Factory<T> implements FactoryLike<T> {
    private factories;
    constructor(factories: FactoriesLike<T>);
    create(host: NodeLike<T>): void;
}
