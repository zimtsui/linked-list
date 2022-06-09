import { MaybeState } from '../../node-instance';
import { FriendlyNode as Node } from '../../node-instance';


export class Effevtive<T> extends MaybeState<T> {
	public constructor(
		protected host: Node<T>,
		private value: T,
	) {
		super();
	}

	public getValue(): T {
		return this.value;
	}
}
