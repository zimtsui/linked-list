"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Listed = void 0;
const node_instance_1 = require("../../node-instance");
class Listed extends node_instance_1.StructState {
    constructor(host, factories, prev, next) {
        super();
        this.host = host;
        this.factories = factories;
        this.prev = prev;
        this.next = next;
        host.structState = this;
    }
    getPrev() {
        return this.prev;
    }
    getNext() {
        return this.next;
    }
    setPrev(prev) {
        this.prev = prev;
    }
    setNext(next) {
        this.next = next;
    }
    remove() {
        this.prev.setNext(this.next);
        this.next.setPrev(this.prev);
        this.factories.isolated.create(this.host);
    }
    insert(node) {
        const prev = this.prev;
        const next = this.host;
        this.factories.listed.create(node, prev, next);
        prev.setNext(node);
        next.setPrev(node);
    }
}
exports.Listed = Listed;
//# sourceMappingURL=state.js.map