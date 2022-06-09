"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Regular = exports.Sentinel = void 0;
const node_instance_1 = require("../node-instance");
const effective_1 = require("./maybe/effective");
const void_1 = require("./maybe/void");
const factories_1 = require("./structure/factories");
class Skeleton extends node_instance_1.Friendly {
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
        const node = Regular.create(this.host, x, this.getPrev(), this.getNext());
        this.structState.insert(node);
    }
    getValue() {
        return this.maybeState.getValue();
    }
}
// https://github.com/microsoft/TypeScript/issues/30355
var Sentinel;
(function (Sentinel_1) {
    class Sentinel extends Skeleton {
        constructor(host) {
            super();
            this.host = host;
            this.maybeState = new void_1.Void(this);
            const structFactories = new factories_1.Factories();
            this.structState = structFactories.listed.create(this, this, this);
        }
        static create(host) {
            return new Sentinel(host);
        }
    }
    Sentinel.x = 1;
    function create(host) {
        return new Sentinel(host);
    }
    Sentinel_1.create = create;
})(Sentinel = exports.Sentinel || (exports.Sentinel = {}));
var Regular;
(function (Regular_1) {
    class Regular extends Skeleton {
        constructor(host, x, prev, next) {
            super();
            this.host = host;
            this.maybeState = new effective_1.Effevtive(this, x);
            const structFactories = new factories_1.Factories();
            this.structState = structFactories.listed.create(this, prev, next);
        }
    }
    function create(host, x, prev, next) {
        return new Regular(host, x, prev, next);
    }
    Regular_1.create = create;
})(Regular = exports.Regular || (exports.Regular = {}));
//# sourceMappingURL=constructor.js.map