/**
 * @jest-environment jsdom
 */

const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("should return 73 for 42 + 31", () => {
            expect(addition(42, 31)).toBe(73);
        });
        test("should return -10 for -3 + -7", () => {
            expect(addition(-3, -7)).toBe(-10);
        });
        test("should return 4.9 for 1.6 + 3.3", () => {
            expect(addition(1.6, 3.3)).toBe(4.9);
        });
    });
    describe("Subtraction function", () => {

    });
    describe("Multiply function", () => {

    });
    describe("Division function", () => {

    });
})