"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const __1 = require("../..");
(0, ava_1.default)('test 1', async (t) => {
    const array = [];
    const list = new __1.LinkedList();
    for (let i = 0; i < 1000; i++) {
        if (array.length === 0 || Math.random() < .5) {
            const x = Math.round(Math.random() * 1000000);
            if (Math.random() < .5) {
                array.unshift(x);
                list.unshift(x);
            }
            else {
                array.push(x);
                list.push(x);
            }
        }
        else {
            if (Math.random() < .5) {
                array.shift();
                list.shift();
            }
            else {
                array.pop();
                list.pop();
            }
        }
    }
    while (array.length > 0) {
        t.assert(array.pop() === list.pop());
    }
});
//# sourceMappingURL=test.js.map