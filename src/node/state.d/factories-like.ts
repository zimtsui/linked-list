import * as Isolated from './isolated/factory-like';
import * as Listed from './listed/factory-like';


export interface FactoriesLike<T> {
	isolated: Isolated.FactoryLike<T>;
	listed: Listed.FactoryLike<T>;
}
