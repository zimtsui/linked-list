"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Effevtive = void 0;
const node_1 = require("../node");
class Effevtive extends node_1.MaybeState {
    constructor(host, value) {
        super();
        this.host = host;
        this.value = value;
        host.maybeState = this;
    }
    getValue() {
        return this.value;
    }
}
exports.Effevtive = Effevtive;
//# sourceMappingURL=effective.js.map