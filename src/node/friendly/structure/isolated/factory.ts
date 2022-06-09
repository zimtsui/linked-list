import { FactoryLike } from './factory-like';
import { FactoriesLike } from '../factories-like';
import { Isolated } from './state';
import { Friendly } from '../../../node-instance';



export class Factory<T, Node extends Friendly<T, Node>> implements FactoryLike<T, Node> {
	public constructor(
		private factories: FactoriesLike<T, Node>,
	) { }

	public create(host: Node) {
		return new Isolated(
			host,
			this.factories,
		);
	}
}
