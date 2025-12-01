import { expect } from "chai";
import divide from '../src/divide.js';

describe("divide() phase 1", () => {

    it("should return 1.5 with dividen as 6 and diviser as 4", ()=>
    {
        expect(divide(6,4)).to.equal(1.5);
    });
    it("should return 1.5 with dividen as string of 6 and diviser as 4", ()=>
    {
        expect(divide("6",4)).to.equal(1.5);
    });
    it("should throw type error with dividen as a string and diviser as 4", ()=>
    {
        expect(() => divide("fse",4)).to.throw(TypeError);
    });
    it("should return -3 with dividen as 45 and diviser as -15", ()=>
    {
        expect(divide(45,-15)).to.equal(-3);
    });
    it("should return -3 with dividen as -45 and diviser as 15", ()=>
    {
        expect(divide(-45, 15)).to.equal(-3);
    });
    it("should return 3 with dividen as -45 and diviser as 15", ()=>
    {
        expect(divide(45, 15)).to.equal(3);
    });
    it("should throw type error with dividen as 6 and diviser as 0", ()=>
    {
        expect(() => divide(6,0)).to.throw(RangeError);
    });
    it("should return Infinity with dividen as Number.MAX_VALUE+1 and diviser as 1", ()=>
    {
        expect(divide(Number.MAX_VALUE+1,1)).to.equal(Infinity)
    });
    it("should return Number.MAX_VALUE with dividen as Number.MAX_VALUE and diviser as 1", ()=>
    {
        expect(divide(Number.MAX_VALUE,1)).to.equal(Number.MAX_VALUE)
    });
    it("should return -Infinity with dividen as Number.MAX_VALUE+1 and diviser as 1", ()=>
    {
        expect(divide(Number.MIN_VALUE-1,1)).to.equal(-Infinity)
    });
    it("should return Number.MAX_VALUE with dividen as Number.MAX_VALUE and diviser as 1", ()=>
    {
        expect(divide(Number.MIN_VALUE,1)).to.equal(Number.MIN_VALUE)
    });
});
