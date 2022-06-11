import { FactoriesLike } from './factories-like';
import * as Isolated from './isolated/factory';
import * as Listed from './listed/factory';


export class Factories<T> implements FactoriesLike<T> {
	public isolated: Isolated.Factory<T> = new Isolated.Factory<T>(this);
	public listed: Listed.Factory<T> = new Listed.Factory<T>(this);
}
