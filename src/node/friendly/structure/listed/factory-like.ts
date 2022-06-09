import { Friendly as Node } from '../../../node-instance';
import { StructState } from '../../../node-instance';


export interface FactoryLike<T> {
	create(
		host: Node<T>,
		prev: Node<T>,
		next: Node<T>,
	): StructState<T>;
}
