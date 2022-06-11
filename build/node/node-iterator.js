"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeIterator = void 0;
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
//# sourceMappingURL=node-iterator.js.map