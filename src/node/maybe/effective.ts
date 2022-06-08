import { MaybeState } from '../node-instance';
import { NodeLike } from '../node-instance';


export class Effevtive<T> extends MaybeState<T> {
	public constructor(
		protected host: NodeLike<T>,
		private value: T,
	) {
		super();
		host.maybeState = this;
	}

	public getValue(): T {
		return this.value;
	}
}
