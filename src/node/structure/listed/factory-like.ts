import { Node } from '../../node';


export interface FactoryLike<T> {
	create(
		host: Node<T>,
		prev: Node<T>,
		next: Node<T>,
	): void;
}
