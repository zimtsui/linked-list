import { FriendlyNode as Node } from '../../../node-instance';
import { StructState } from '../../../node-instance';


export interface FactoryLike<T> {
	create(host: Node<T>): StructState<T>;
}
