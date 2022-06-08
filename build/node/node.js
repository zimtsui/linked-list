"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
const effective_1 = require("./maybe/effective");
const void_1 = require("./maybe/void");
const Structure = require("./structure/factories");
class Node {
    constructor(structFactories) {
        this.structFactories = structFactories;
    }
    static createSentinel() {
        const structFactories = new Structure.Factories();
        const node = new Node(structFactories);
        new void_1.Void(node);
        structFactories.listed.create(node, node, node);
        return node;
    }
    static createRegular(structFactories, x) {
        const node = new Node(structFactories);
        new effective_1.Effevtive(node, x);
        return node;
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
        const node = Node.createRegular(this.structFactories, x);
        this.structState.insert(node);
    }
    getValue() {
        return this.maybeState.getValue();
    }
}
exports.Node = Node;
//# sourceMappingURL=node.js.map