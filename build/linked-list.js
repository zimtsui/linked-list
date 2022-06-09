"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeIterator = exports.LinkedList = void 0;
// import { Sk } from './node/node-instance';
const constructor_1 = require("./node/constructor");
const assert = require("assert");
class LinkedList {
    constructor() {
        this.endpoint = constructor_1.Sentinel.create();
        this.size = 0;
    }
    push(x) {
        this.endpoint.insert(x);
        this.size++;
    }
    pop() {
        const node = this.endpoint.getPrev();
        node.remove();
        this.size--;
        return node.getValue();
    }
    shift() {
        const node = this.endpoint.getNext();
        node.remove();
        this.size--;
        return node.getValue();
    }
    unshift(x) {
        this.endpoint.getNext().insert(x);
        this.size++;
    }
    [Symbol.iterator]() {
        return new NodeIterator(this.endpoint);
    }
    getSize() {
        return this.size;
    }
    i(index) {
        assert(this.size > 0, new RangeError());
        if (index === 0)
            return this.endpoint.getNext().getValue();
        else
            return this.endpoint.getPrev().getValue();
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