"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Regular = exports.Sentinel = exports.Skeleton = void 0;
const effective_1 = require("./friendly/maybe/effective");
const void_1 = require("./friendly/maybe/void");
const factories_1 = require("./friendly/structure/factories");
class Skeleton {
    getPrev() {
        return this.structState.getPrev();
    }
    getNext() {
        return this.structState.getNext();
    }
    setPrev(prev) {
        this.structState.setPrev(prev);
    }
    setNext(next) {
        this.structState.setNext(next);
    }
    remove() {
        this.structState.remove();
    }
    insert(x) {
        const node = Regular.create(x, this.getPrev(), this.getNext());
        this.structState.insert(node);
    }
    getValue() {
        return this.maybeState.getValue();
    }
}
exports.Skeleton = Skeleton;
// https://github.com/microsoft/TypeScript/issues/30355
var Sentinel;
(function (Sentinel_1) {
    class Sentinel extends Skeleton {
        // public static create<T, Node extends Skeleton<T, Node>>(): Skeleton<T, Node> {
        // 	return new Sentinel();
        // }
        constructor() {
            super();
            this.maybeState = new void_1.Void(this);
            const structFactories = new factories_1.Factories();
            this.structState = structFactories.listed.create(this, this, this);
        }
    }
    Sentinel.x = 1;
    function create() {
        return new Sentinel();
    }
    Sentinel_1.create = create;
})(Sentinel = exports.Sentinel || (exports.Sentinel = {}));
var Regular;
(function (Regular_1) {
    class Regular extends Skeleton {
        constructor(x, prev, next) {
            super();
            this.maybeState = new effective_1.Effevtive(this, x);
            const structFactories = new factories_1.Factories();
            this.structState = structFactories.listed.create(this, prev, next);
        }
    }
    function create(x, prev, next) {
        return new Regular(x, prev, next);
    }
    Regular_1.create = create;
})(Regular = exports.Regular || (exports.Regular = {}));
//# sourceMappingURL=constructor.js.map