"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Isolated = void 0;
const node_instance_1 = require("../../../node-instance");
class Isolated extends node_instance_1.StructState {
    constructor(host, factories) {
        super();
        this.host = host;
        this.factories = factories;
        host.structState = this;
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
    remove() {
        throw new RangeError();
    }
    insert(node) {
        throw new RangeError();
    }
}
exports.Isolated = Isolated;
//# sourceMappingURL=state.js.map