"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRegular = exports.createSentinel = void 0;
const Friendly = require("../friendly");
const node_1 = require("../node");
class sentinelConstructor extends node_1.Unfriendly {
    constructor() {
        super();
        this.friendly = Friendly.createSentinel(this);
    }
}
function createSentinel() {
    return new sentinelConstructor();
}
exports.createSentinel = createSentinel;
class regularConstructor extends node_1.Unfriendly {
    constructor(structFactories, x) {
        super();
        this.friendly = Friendly.createRegular(this, structFactories, x);
    }
}
function createRegular(structFactories, x) {
    return new regularConstructor(structFactories, x);
}
exports.createRegular = createRegular;
//# sourceMappingURL=constructor.js.map