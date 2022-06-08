import { MaybeState } from '../node';
import { Node } from '../node';


export class Effevtive<T> extends MaybeState<T> {
	public constructor(
		protected host: Node<T>,
		private value: T,
	) {
		super();
		host.maybeState = this;
	}

	public getValue(): T {
		return this.value;
	}
}
