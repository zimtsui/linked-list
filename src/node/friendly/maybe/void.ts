import { MaybeState } from '../../node-instance';
import { Friendly } from '../../node-instance';


export class Void<T, Node extends Friendly<T, Node>> extends MaybeState<T, Node> {
	public constructor(
		protected host: Node,
	) {
		super();
	}

	public getValue(): T {
		throw new ReferenceError();
	}
}
