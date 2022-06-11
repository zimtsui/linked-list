"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Isolated = void 0;
const node_1 = require("../../node");
class Isolated extends node_1.State {
    constructor(host, factories) {
        super();
        this.host = host;
        this.factories = factories;
    }
    getPrev() {
        throw new RangeError();
    }
    getNext() {
        throw new RangeError();
    }
    setPrev(prev) {
        throw new RangeError();
    }
    setNext(next) {
        throw new RangeError();
    }
    setPrevNext(prev, next) {
        this.host.state = this.factories.listed.create(this.host, prev, next);
    }
    remove() {
        throw new RangeError();
    }
    insert(node) {
        throw new RangeError();
    }
}
exports.Isolated = Isolated;
//# sourceMappingURL=state.js.map