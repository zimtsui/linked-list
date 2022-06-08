import * as Friendly from '../friendly';
import * as Structure from '../structure/factories';
import { Unfriendly } from '../node';


class sentinelConstructor<T> extends Unfriendly<T>{
	protected friendly: Friendly.Node<T>;

	public constructor() {
		super();
		this.friendly = Friendly.createSentinel(this);
	}
}

export function createSentinel<T>(): Unfriendly<T> {
	return new sentinelConstructor();
}

class regularConstructor<T> extends Unfriendly<T> {
	protected friendly: Friendly.Node<T>;

	public constructor(
		structFactories: Structure.Factories<T>,
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
	structFactories: Structure.Factories<T>,
	x: T,
): Unfriendly<T> {
	return new regularConstructor(
		structFactories,
		x,
	);
}
