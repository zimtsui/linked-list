"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Void = void 0;
const node_1 = require("../node");
class Void extends node_1.MaybeState {
    constructor(host) {
        super();
        this.host = host;
        host.maybeState = this;
    }
    getValue() {
        throw new ReferenceError();
    }
}
exports.Void = Void;
//# sourceMappingURL=void.js.map