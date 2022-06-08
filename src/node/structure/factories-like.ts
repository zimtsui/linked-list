import * as Isolated from './isolated';
import * as Listed from './listed';


export interface FactoriesLike<T> {
	isolated: Isolated.FactoryLike<T>;
	listed: Listed.FactoryLike<T>;
}
