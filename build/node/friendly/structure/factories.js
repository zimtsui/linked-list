"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factories = void 0;
const Isolated = require("./isolated");
const Listed = require("./listed");
class Factories {
    constructor() {
        this.isolated = new Isolated.Factory(this);
        this.listed = new Listed.Factory(this);
    }
}
exports.Factories = Factories;
//# sourceMappingURL=factories.js.map