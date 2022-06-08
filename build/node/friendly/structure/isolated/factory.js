"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factory = void 0;
const state_1 = require("./state");
class Factory {
    constructor(factories) {
        this.factories = factories;
    }
    create(host) {
        new state_1.Isolated(host, this.factories);
    }
}
exports.Factory = Factory;
//# sourceMappingURL=factory.js.map