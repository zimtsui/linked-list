import { FactoryLike } from './factory-like';
import { FactoriesLike } from '../factories-like';
import { NodeLike } from '../../node-instance';
import { Listed } from './state';


export class Factory<T> implements FactoryLike<T> {
	public constructor(
		private factories: FactoriesLike<T>,
	) { }

	public create(
		host: NodeLike<T>,
		prev: NodeLike<T>,
		next: NodeLike<T>,
	): void {
		new Listed(
			host,
			this.factories,
			prev,
			next,
		);
	}
}
