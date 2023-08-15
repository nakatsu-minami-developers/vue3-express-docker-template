"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calc_1 = require("../calc");
describe("plus test", () => {
    test("1 + 1", () => {
        expect((0, calc_1.plus)(1, 1)).toEqual(2);
    });
});
