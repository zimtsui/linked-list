import { MaybeState } from '../node';
import { Node } from '../node';


export class Void<T> extends MaybeState<T> {
	public constructor(
		protected host: Node<T>,
	) {
		super();
		host.maybeState = this;
	}

	public getValue(): T {
		throw new ReferenceError();
	}
}
