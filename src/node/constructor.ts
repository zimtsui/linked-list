import { Unfriendly as Node } from './node-instance';
import * as Friendly from './friendly';


class sentinelConstructor<T> extends Node<T>{
	protected friendly: Friendly.Node<T>;

	public constructor() {
		super();
		this.friendly = Friendly.createSentinel(this);
	}
}

export function createSentinel<T>(): Node<T> {
	return new sentinelConstructor();
}

class regularConstructor<T> extends Node<T> {
	protected friendly: Friendly.Node<T>;

	public constructor(
		structFactories: Friendly.StructFactories<T>,
		x: T,
	) {
		super();
		this.friendly = Friendly.createRegular(
			this,
			structFactories,
			x,
		);
	}
}

export function createRegular<T>(
	structFactories: Friendly.StructFactories<T>,
	x: T,
): Node<T> {
	return new regularConstructor(
		structFactories,
		x,
	);
}
