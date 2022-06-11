import { Node } from '../../node';
import { State } from '../../node';
export interface FactoryLike<T> {
    create(host: Node<T>, prev: Node<T>, next: Node<T>): State<T>;
}
