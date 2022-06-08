"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeIterator = exports.LinkedList = void 0;
const node_1 = require("./node");
class LinkedList {
    constructor() {
        this.endpoint = (0, node_1.createSentinel)();
    }
    push(x) {
        this.endpoint.insert(x);
    }
    pop() {
        const node = this.endpoint.getPrev();
        node.remove();
        return node.getValue();
    }
    shift() {
        const node = this.endpoint.getNext();
        node.remove();
        return node.getValue();
    }
    unshift(x) {
        this.endpoint.getNext().insert(x);
    }
    [Symbol.iterator]() {
        return new NodeIterator(this.endpoint);
    }
}
exports.LinkedList = LinkedList;
class NodeIterator {
    constructor(node) {
        this.node = node;
    }
    next() {
        this.node = this.node.getNext();
        try {
            return {
                done: false,
                value: this.node.getValue(),
            };
        }
        catch (err) {
            return {
                done: true,
                value: void null,
            };
        }
    }
}
exports.NodeIterator = NodeIterator;
//# sourceMappingURL=linked-list.js.map