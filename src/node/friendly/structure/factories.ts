import { FactoriesLike } from './factories-like';
import * as Isolated from './isolated';
import * as Listed from './listed';
import { Friendly } from '../../node-instance';


export class Factories<T, Node extends Friendly<T, Node>> implements FactoriesLike<T, Node> {
	public isolated: Isolated.FactoryLike<T, Node> = new Isolated.Factory<T, Node>(this);
	public listed: Listed.Factory<T, Node> = new Listed.Factory<T, Node>(this);
}
