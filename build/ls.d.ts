declare namespace FriendShip1 {
    export interface Friendly2Friend1<Person extends Friendly2Friend1<Person>> {
        f1(key: typeof KEY1, stranger: Person): void;
    }
    const KEY1: unique symbol;
    export type Key1 = typeof KEY1;
    export class Friend1<Person extends Friendly2Friend1<Person>> {
        f(person: Person, stranger: Person): void;
    }
    export {};
}
declare namespace FriendShip2 {
    export interface Friendly2Friend2<Person extends Friendly2Friend2<Person>> {
        f2(key: typeof KEY2, stranger: Person): void;
    }
    const KEY2: unique symbol;
    export type Key2 = typeof KEY2;
    export class Friend2<Person extends Friendly2Friend2<Person>> {
        f(person: Person): void;
    }
    export {};
}
declare class Person implements FriendShip1.Friendly2Friend1<Person>, FriendShip2.Friendly2Friend2<Person> {
    f1(key: FriendShip1.Key1, stranger: Person): void;
    f2(key: FriendShip2.Key2, stranger: Person): void;
    g(friend1: FriendShip1.Friend1<Person>, stranger: Person): void;
}
