"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StructFactories = exports.Node = void 0;
var node_instance_1 = require("../node-instance");
Object.defineProperty(exports, "Node", { enumerable: true, get: function () { return node_instance_1.Friendly; } });
__exportStar(require("./constructor"), exports);
var factories_1 = require("./structure/factories");
Object.defineProperty(exports, "StructFactories", { enumerable: true, get: function () { return factories_1.Factories; } });
//# sourceMappingURL=index.js.map