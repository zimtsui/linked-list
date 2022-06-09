import { MaybeState } from '../../node-instance';
import { Friendly as Node } from '../../node-instance';


export class Void<T> extends MaybeState<T> {
	public constructor(
		protected host: Node<T>,
	) {
		super();
	}

	public getValue(): T {
		throw new ReferenceError();
	}
}
