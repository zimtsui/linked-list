"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Void = exports.Effective = exports.State = exports.Friendly = exports.Node = void 0;
class Node {
}
exports.Node = Node;
class Friendly extends Node {
}
exports.Friendly = Friendly;
class State {
}
exports.State = State;
class Effective extends Node {
    getValue() {
        return this.x;
    }
}
exports.Effective = Effective;
class Void extends Node {
    getValue() {
        throw new ReferenceError();
    }
}
exports.Void = Void;
//# sourceMappingURL=node.js.map