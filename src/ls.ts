namespace FriendShip1 {
	export interface Friendly2Friend1<Person extends Friendly2Friend1<Person>> {
		f1(key: typeof KEY1, stranger: Person): void;
	}

	const KEY1 = Symbol();
	export type Key1 = typeof KEY1;

	export class Friend1<Person extends Friendly2Friend1<Person>> {
		public f(person: Person, stranger: Person): void {
			person.f1(KEY1, stranger);
		}
	}
}

namespace FriendShip2 {
	export interface Friendly2Friend2<Person extends Friendly2Friend2<Person>> {
		f2(key: typeof KEY2, stranger: Person): void;
	}

	const KEY2 = Symbol();
	export type Key2 = typeof KEY2;

	export class Friend2<Person extends Friendly2Friend2<Person>> {
		public f(person: Person): void {
			person.f2(KEY2, person);
		}
	}
}

class Person implements
	FriendShip1.Friendly2Friend1<Person>,
	FriendShip2.Friendly2Friend2<Person> {

	public f1(key: FriendShip1.Key1, stranger: Person): void { }
	public f2(key: FriendShip2.Key2, stranger: Person): void { }
	public g(friend1: FriendShip1.Friend1<Person>, stranger: Person): void {
		friend1.f(this, stranger);
	}
}
