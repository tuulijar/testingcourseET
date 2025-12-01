import { expect } from "chai";
import eq from '../src/eq.js';

describe("eq()", () => {
    it("should return false if given 2 different objects", () => {
        const object1 = { 'a': 1 }
        const object2 = { 'a': 1 }
        expect(eq(object1, object2)).to.equal(false);
    });
    it("should return true if the values of objects are the same", () => {
        const object1 = { 'a': 1 }
        const object2 = { 'a': 1 }
        expect(eq(object1.a, object2.a)).to.equal(true);
    });
    it("should return true if the numerical value of two numbers are the same", () => {
        expect(eq(2, "2")).to.equal(true);
        expect(eq("2", 2)).to.equal(true);
    });
    it("should return true when compared to itself", () => {
        var x = 15
        expect(eq(x, x)).to.equal(true);
    });
    it("should return false with different types", () => {
        const object = {"b" : "y"}
        let big = 9999999999999999;
        const sym = Symbol("symbol");

        expect(eq(22, "y")).to.equal(false);
        expect(eq(object, 22)).to.equal(false);
        expect(eq(22, true)).to.equal(false);
        expect(eq(big, 22)).to.equal(false);
        expect(eq(undefined, 22)).to.equal(false);
        expect(eq(null, 22)).to.equal(false);
        expect(eq(sym, 22)).to.equal(false);

        expect(eq("y", object)).to.equal(false);
        expect(eq(true, "y")).to.equal(false);
        expect(eq("y", big)).to.equal(false);
        expect(eq(undefined, "y")).to.equal(false);
        expect(eq("y", null)).to.equal(false);
        expect(eq(sym, "y")).to.equal(false);

        expect(eq(big, object)).to.equal(false);
        expect(eq(true, big)).to.equal(false);
        expect(eq(undefined, big)).to.equal(false);
        expect(eq(big, null)).to.equal(false);
        expect(eq(sym, big)).to.equal(false);

        expect(eq(true, object)).to.equal(false);
        expect(eq(undefined, true)).to.equal(false);
        expect(eq(true, null)).to.equal(false);
        expect(eq(sym, true)).to.equal(false);

        expect(eq(undefined, object)).to.equal(false);
        expect(eq(object, null)).to.equal(false);
        expect(eq(sym, object)).to.equal(false);

        expect(eq(undefined, null)).to.equal(false);
        expect(eq(sym, undefined)).to.equal(false);

        expect(eq(sym, null)).to.equal(false);
    });

    it("should return true when NaN is compared to NaN", () => {
        expect(eq(NaN, NaN)).to.equal(true);
    });
    it("should return true when both inputs are zero", () => {
        expect(eq(0, 0)).to.equal(true);
        expect(eq(+0, -0)).to.equal(true);
        expect(eq(-0, +0)).to.equal(true);
    });
    it("should return false when inputs aren't the same", () => {
        expect(eq("bean", "yes")).to.equal(false);
    });
});