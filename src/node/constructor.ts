import {
	State,
	Node,
	Effective,
	Void,
} from './node';
import { Factories } from './state.d/factories';


// https://github.com/microsoft/TypeScript/issues/30355

export namespace Sentinel {
	class Sentinel<T> extends Void<T> {
		public state: State<T>;

		public constructor() {
			super();

			const factories = new Factories<T>();
			this.state = factories.listed.create(
				this,
				this,
				this,
			);
		}

		public getPrev(): Node<T> {
			return this.state.getPrev();
		}

		public getNext(): Node<T> {
			return this.state.getNext();
		}

		public setPrev(prev: Node<T>): void {
			this.state.setPrev(prev);
		}

		public setNext(next: Node<T>): void {
			this.state.setNext(next);
		}

		public setPrevNext(
			prev: Node<T>,
			next: Node<T>,
		): void {
			this.state.setPrevNext(prev, next);
		}

		public remove(): void {
			this.state.remove();
		}

		public insert(x: T): void {
			const node = Regular.create(
				x,
				this.getPrev(),
				this.getNext(),
			);
			this.state.insert(node);
		}
	}

	export function create<T>(): Node<T> {
		return new Sentinel();
	}
}


export namespace Regular {
	class Regular<T> extends Effective<T> {
		public state: State<T>;

		public constructor(
			protected x: T,
		) {
			super();


			const factories = new Factories<T>();
			this.state = factories.isolated.create(
				this,
			);
		}

		public getPrev(): Node<T> {
			return this.state.getPrev();
		}

		public getNext(): Node<T> {
			return this.state.getNext();
		}

		public setPrev(prev: Node<T>): void {
			this.state.setPrev(prev);
		}

		public setNext(next: Node<T>): void {
			this.state.setNext(next);
		}

		public setPrevNext(
			prev: Node<T>,
			next: Node<T>,
		): void {
			this.state.setPrevNext(prev, next);
		}

		public remove(): void {
			this.state.remove();
		}

		public insert(x: T): void {
			const node = create(
				x,
				this.getPrev(),
				this.getNext(),
			);
			this.state.insert(node);
		}
	}

	export function create<T>(
		x: T,
		prev: Node<T>,
		next: Node<T>,
	): Node<T> {
		return new Regular(
			x,
		);
	}
}
