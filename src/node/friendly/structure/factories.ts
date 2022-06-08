import { FactoriesLike } from './factories-like';
import * as Isolated from './isolated';
import * as Listed from './listed';



export class Factories<T> implements FactoriesLike<T> {
	public isolated: Isolated.FactoryLike<T> = new Isolated.Factory<T>(this);
	public listed: Listed.Factory<T> = new Listed.Factory<T>(this);
}
