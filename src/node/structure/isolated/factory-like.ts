import { NodeLike } from '../../node-instance';


export interface FactoryLike<T> {
	create(host: NodeLike<T>): void;
}
