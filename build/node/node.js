"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaybeState = exports.StructState = exports.Node = exports.Unfriendly = void 0;
class Unfriendly {
    getPrev() {
        return this.friendly.getPrev().host;
    }
    getNext() {
        return this.friendly.getNext().host;
    }
    setPrev(prev) {
        this.friendly.setPrev(prev.friendly);
    }
    setNext(next) {
        this.friendly.setNext(next.friendly);
    }
    remove() {
        this.friendly.remove();
    }
    insert(x) {
        this.friendly.insert(x);
    }
    getValue() {
        return this.friendly.getValue();
    }
}
exports.Unfriendly = Unfriendly;
class Node {
}
exports.Node = Node;
class StructState {
}
exports.StructState = StructState;
class MaybeState {
}
exports.MaybeState = MaybeState;
//# sourceMappingURL=node.js.map