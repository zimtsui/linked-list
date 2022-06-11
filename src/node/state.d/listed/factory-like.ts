import { Node } from '../../node-instance';
import { State } from '../../node-instance';


export interface FactoryLike<T> {
	create(
		host: Node<T>,
		prev: Node<T>,
		next: Node<T>,
	): State<T>;
}
