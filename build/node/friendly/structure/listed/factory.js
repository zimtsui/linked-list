"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factory = void 0;
const state_1 = require("./state");
class Factory {
    constructor(factories) {
        this.factories = factories;
    }
    create(host, prev, next) {
        return new state_1.Listed(host, this.factories, prev, next);
    }
}
exports.Factory = Factory;
//# sourceMappingURL=factory.js.map