import { FactoryLike } from './factory-like';
import { FactoriesLike } from '../factories-like';
import { Friendly } from '../../../node-instance';
import { Listed } from './state';


export class Factory<T, Node extends Friendly<T, Node>> implements FactoryLike<T, Node> {
	public constructor(
		private factories: FactoriesLike<T, Node>,
	) { }

	public create(
		host: Node,
		prev: Node,
		next: Node,
	) {
		return new Listed(
			host,
			this.factories,
			prev,
			next,
		);
	}
}
