"use strict";
var FriendShip1;
(function (FriendShip1) {
    const KEY1 = Symbol();
    class Friend1 {
        f(person, stranger) {
            person.f1(KEY1, stranger);
        }
    }
    FriendShip1.Friend1 = Friend1;
})(FriendShip1 || (FriendShip1 = {}));
var FriendShip2;
(function (FriendShip2) {
    const KEY2 = Symbol();
    class Friend2 {
        f(person) {
            person.f2(KEY2, person);
        }
    }
    FriendShip2.Friend2 = Friend2;
})(FriendShip2 || (FriendShip2 = {}));
class Person {
    f1(key, stranger) { }
    f2(key, stranger) { }
    g(friend1, stranger) {
        friend1.f(this, stranger);
    }
}
//# sourceMappingURL=ls.js.map