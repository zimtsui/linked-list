"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSentinel = exports.createRegular = exports.Node = void 0;
var node_1 = require("./node");
Object.defineProperty(exports, "Node", { enumerable: true, get: function () { return node_1.Unfriendly; } });
var constructor_1 = require("./unfriendly/constructor");
Object.defineProperty(exports, "createRegular", { enumerable: true, get: function () { return constructor_1.createRegular; } });
Object.defineProperty(exports, "createSentinel", { enumerable: true, get: function () { return constructor_1.createSentinel; } });
//# sourceMappingURL=index.js.map