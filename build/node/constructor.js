"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Regular = exports.Sentinel = void 0;
const node_1 = require("./node");
const factories_1 = require("./state.d/factories");
// https://github.com/microsoft/TypeScript/issues/30355
var Sentinel;
(function (Sentinel_1) {
    class Sentinel extends node_1.Void {
        constructor() {
            super();
            const factories = new factories_1.Factories();
            this.state = factories.listed.create(this, this, this);
        }
        getPrev() {
            return this.state.getPrev();
        }
        getNext() {
            return this.state.getNext();
        }
        setPrev(prev) {
            this.state.setPrev(prev);
        }
        setNext(next) {
            this.state.setNext(next);
        }
        setPrevNext(prev, next) {
            this.state.setPrevNext(prev, next);
        }
        remove() {
            this.state.remove();
        }
        insert(x) {
            const node = Regular.create(x, this.getPrev(), this.getNext());
            this.state.insert(node);
        }
    }
    function create() {
        return new Sentinel();
    }
    Sentinel_1.create = create;
})(Sentinel = exports.Sentinel || (exports.Sentinel = {}));
var Regular;
(function (Regular_1) {
    class Regular extends node_1.Effective {
        constructor(x) {
            super();
            this.x = x;
            const factories = new factories_1.Factories();
            this.state = factories.isolated.create(this);
        }
        getPrev() {
            return this.state.getPrev();
        }
        getNext() {
            return this.state.getNext();
        }
        setPrev(prev) {
            this.state.setPrev(prev);
        }
        setNext(next) {
            this.state.setNext(next);
        }
        setPrevNext(prev, next) {
            this.state.setPrevNext(prev, next);
        }
        remove() {
            this.state.remove();
        }
        insert(x) {
            const node = create(x, this.getPrev(), this.getNext());
            this.state.insert(node);
        }
    }
    function create(x, prev, next) {
        return new Regular(x);
    }
    Regular_1.create = create;
})(Regular = exports.Regular || (exports.Regular = {}));
//# sourceMappingURL=constructor.js.map