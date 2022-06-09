import { FactoryLike } from './factory-like';
import { FactoriesLike } from '../factories-like';
import { Isolated } from './state';
import { FriendlyNode as Node } from '../../../node-instance';



export class Factory<T> implements FactoryLike<T> {
	public constructor(
		private factories: FactoriesLike<T>,
	) { }

	public create(host: Node<T>) {
		return new Isolated(
			host,
			this.factories,
		);
	}
}
