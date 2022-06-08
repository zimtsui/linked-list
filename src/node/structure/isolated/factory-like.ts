import { Node } from '../../node';


export interface FactoryLike<T> {
	create(host: Node<T>): void;
}
