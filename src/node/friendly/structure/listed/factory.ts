import { FactoryLike } from './factory-like';
import { FactoriesLike } from '../factories-like';
import { Friendly as Node } from '../../../node-instance';
import { Listed } from './state';


export class Factory<T> implements FactoryLike<T> {
	public constructor(
		private factories: FactoriesLike<T>,
	) { }

	public create(
		host: Node<T>,
		prev: Node<T>,
		next: Node<T>,
	) {
		return new Listed(
			host,
			this.factories,
			prev,
			next,
		);
	}
}
