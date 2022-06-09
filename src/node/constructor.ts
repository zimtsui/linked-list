import {
	Friendly,
	Unfriendly,
	StructState,
	MaybeState,
} from './node-instance';
import { Effevtive } from './friendly/maybe/effective';
import { Void } from './friendly/maybe/void';
import { Factories as StructFactories } from './friendly/structure/factories';



// typeclass
interface UnFriendly<T, Node extends UnFriendly<T, Node>> extends
	Friendly<T, Node>,
	Unfriendly<T, Node> { }

export abstract class Skeleton<T>
	implements UnFriendly<T, Skeleton<T>> {
	public abstract structState: StructState<T, Skeleton<T>>;
	public abstract maybeState: MaybeState<T, Skeleton<T>>;

	public getPrev(): Skeleton<T> {
		return this.structState.getPrev();
	}

	public getNext(): Skeleton<T> {
		return this.structState.getNext();
	}

	public setPrev(prev: Skeleton<T>): void {
		this.structState.setPrev(prev);
	}

	public setNext(next: Skeleton<T>): void {
		this.structState.setNext(next);
	}

	public remove(): void {
		this.structState.remove();
	}

	public insert(x: T): void {
		const node = Regular.create(
			x,
			this.getPrev(),
			this.getNext(),
		);
		this.structState.insert(node);
	}

	public getValue(): T {
		return this.maybeState.getValue();
	}
}

// https://github.com/microsoft/TypeScript/issues/30355

export namespace Sentinel {
	class Sentinel<T> extends Skeleton<T> {
		public structState: StructState<T, Skeleton<T>>;
		public maybeState: MaybeState<T, Skeleton<T>>;

		// public static create<T, Node extends Skeleton<T, Node>>(): Skeleton<T, Node> {
		// 	return new Sentinel();
		// }

		public constructor() {
			super();

			this.maybeState = new Void<T, Skeleton<T>>(this);

			const structFactories = new StructFactories<T, Skeleton<T>>();
			this.structState = structFactories.listed.create(
				this,
				this,
				this,
			);
		}

		public static x = 1;
	}

	export function create<T>(): Skeleton<T> {
		return new Sentinel();
	}
}


export namespace Regular {
	class Regular<T> extends Skeleton<T> {
		public structState: StructState<T, Skeleton<T>>;
		public maybeState: MaybeState<T, Skeleton<T>>;

		public constructor(
			x: T,
			prev: Skeleton<T>,
			next: Skeleton<T>,
		) {
			super();

			this.maybeState = new Effevtive<T, Skeleton<T>>(this, x);

			const structFactories = new StructFactories<T, Skeleton<T>>();
			this.structState = structFactories.listed.create(
				this,
				prev,
				next,
			);
		}
	}

	export function create<T>(
		x: T,
		prev: Skeleton<T>,
		next: Skeleton<T>,
	): Skeleton<T> {
		return new Regular(
			x,
			prev,
			next,
		);
	}
}
