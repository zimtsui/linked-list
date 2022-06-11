"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const constructor_1 = require("./node/constructor");
const node_iterator_1 = require("./node/node-iterator");
const assert = require("assert");
class LinkedList {
    constructor() {
        this.size = 0;
        this.endpoint = constructor_1.Sentinel.create();
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
        return new node_iterator_1.NodeIterator(this.endpoint);
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
//# sourceMappingURL=linked-list.js.map