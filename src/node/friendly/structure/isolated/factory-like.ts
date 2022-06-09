import { Friendly } from '../../../node-instance';
import { StructState } from '../../../node-instance';


export interface FactoryLike<T, Node extends Friendly<T, Node>> {
	create(host: Node): StructState<T, Node>;
}
