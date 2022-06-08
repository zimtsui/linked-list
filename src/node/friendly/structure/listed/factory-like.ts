import { Friendly as Node } from '../../../node-instance';


export interface FactoryLike<T> {
	create(
		host: Node<T>,
		prev: Node<T>,
		next: Node<T>,
	): void;
}
