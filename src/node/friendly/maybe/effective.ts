import { MaybeState } from '../../node-instance';
import { Friendly } from '../../node-instance';


export class Effevtive<T, Node extends Friendly<T, Node>> extends MaybeState<T, Node> {
	public constructor(
		protected host: Node,
		private value: T,
	) {
		super();
	}

	public getValue(): T {
		return this.value;
	}
}
