import { FactoryLike } from './factory-like';
import { FactoriesLike } from '../factories-like';
import { Node } from '../../node';
import { Listed } from './state';
export declare class Factory<T> implements FactoryLike<T> {
    private factories;
    constructor(factories: FactoriesLike<T>);
    create(host: Node<T>, prev: Node<T>, next: Node<T>): Listed<T>;
}
