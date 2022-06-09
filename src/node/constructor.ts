import {
	Unfriendly as Node,
	Friendly as FriendlyNode,
} from './node-instance';
import {
	Sentinel as FriendlySentinel,
	Regular as FriendlyRegular,
} from './friendly/constructor';


export namespace Sentinel {
	class Sentinel<T> extends Node<T>{
		protected friendly: FriendlyNode<T>;

		public constructor() {
			super();
			this.friendly = FriendlySentinel.create(this);
		}
	}

	export function create<T>(): Node<T> {
		return new Sentinel();
	}
}


export namespace Regular {
	class Regular<T> extends Node<T> {
		protected friendly: FriendlyNode<T>;

		public constructor(
			x: T,
			prev: Node<T>,
			next: Node<T>,
		) {
			super();
			this.friendly = FriendlyRegular.create(
				this,
				x,
				Node.getFriendly(prev),
				Node.getFriendly(next),
			);
		}
	}

	export function create<T>(
		x: T,
		prev: Node<T>,
		next: Node<T>,
	): Node<T> {
		return new Regular(
			x,
			prev,
			next,
		);
	}

}
