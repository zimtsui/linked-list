import { MaybeState } from '../node-instance';
import { NodeLike } from '../node-instance';


export class Void<T> extends MaybeState<T> {
	public constructor(
		protected host: NodeLike<T>,
	) {
		super();
		host.maybeState = this;
	}

	public getValue(): T {
		throw new ReferenceError();
	}
}
