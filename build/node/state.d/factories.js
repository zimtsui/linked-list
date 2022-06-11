"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factories = void 0;
const Isolated = require("./isolated/factory");
const Listed = require("./listed/factory");
class Factories {
    constructor() {
        this.isolated = new Isolated.Factory(this);
        this.listed = new Listed.Factory(this);
    }
}
exports.Factories = Factories;
//# sourceMappingURL=factories.js.map