"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Regular = exports.Sentinel = void 0;
const node_instance_1 = require("./node-instance");
const constructor_1 = require("./friendly/constructor");
var Sentinel;
(function (Sentinel_1) {
    class Sentinel extends node_instance_1.Unfriendly {
        constructor() {
            super();
            this.friendly = constructor_1.Sentinel.create(this);
        }
    }
    function create() {
        return new Sentinel();
    }
    Sentinel_1.create = create;
})(Sentinel = exports.Sentinel || (exports.Sentinel = {}));
var Regular;
(function (Regular_1) {
    class Regular extends node_instance_1.Unfriendly {
        constructor(x, prev, next) {
            super();
            this.friendly = constructor_1.Regular.create(this, x, node_instance_1.Unfriendly.getFriendly(prev), node_instance_1.Unfriendly.getFriendly(next));
        }
    }
    function create(x, prev, next) {
        return new Regular(x, prev, next);
    }
    Regular_1.create = create;
})(Regular = exports.Regular || (exports.Regular = {}));
//# sourceMappingURL=constructor.js.map