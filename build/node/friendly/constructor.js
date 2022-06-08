"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRegular = exports.createSentinel = void 0;
const node_instance_1 = require("../node-instance");
const effective_1 = require("./maybe/effective");
const void_1 = require("./maybe/void");
const Structure = require("./structure/factories");
class skeletonConstructor extends node_instance_1.Friendly {
    constructor(host, structFactories) {
        super();
        this.host = host;
        this.structFactories = structFactories;
    }
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
        const node = createRegular(this.host, this.structFactories, x);
        this.structState.insert(node);
    }
    getValue() {
        return this.maybeState.getValue();
    }
}
function createSentinel(host) {
    const structFactories = new Structure.Factories();
    const node = new skeletonConstructor(host, structFactories);
    new void_1.Void(node);
    structFactories.listed.create(node, node, node);
    return node;
}
exports.createSentinel = createSentinel;
function createRegular(host, structFactories, x) {
    const node = new skeletonConstructor(host, structFactories);
    new effective_1.Effevtive(node, x);
    return node;
}
exports.createRegular = createRegular;
//# sourceMappingURL=constructor.js.map