import { expect } from 'chai';
import add from '../src/add.js';

describe('add vaihe 1', () => {
    it('lisää normaalit luvut oikein', () => {
        expect(add(2, 3)).to.equal(5);
    });

    it('toimii, jos toinen luku on 0', () => {
        expect(add(0, 3)).to.equal(3);
    });

    it('toimii, jos molemmat luvut ovat 0', () => {
        expect(add(0, 0)).to.equal(0);
    });

    it('toimii, jos toinen luku on negatiivinen', () => {
        expect(add(-2, 3)).to.equal(1);
    });

    it('toimii, jos molemmat luvut ovat negatiivisia', () => {
        expect(add(-2, -3)).to.equal(-5);
    });

    it('toimii desimaaliluvuilla', () => {
        expect(add(2.5, 2.5)).to.equal(5.0);
    });

    it('muuntaa merkkijonon luvuksi, jos toinen syöte merkkijono', () => {
        expect(add("2", 3)).to.equal(5);
    });

    it('muuntaa merkkijonot luvuksi, jos molemmat syötteet merkkijonoja', () => {
        expect(add("2", "3")).to.equal(5);
    });

    it('palauttaa NaN, jos toinen syöte ei ole numeerinen merkkijono', () => {
        expect(add("abc", 3)).to.be.NaN;
    });

    it('ottaa undefined-arvon nollaksi', () => {
        expect(add(undefined, 4)).to.equal(4);
    });

    it('toimii suurilla arvoilla', () => {
        expect(add(Number.MAX_VALUE, 1)).to.equal(Infinity);
    });

    it('palauttaa 0, jos ei syötteitä', () => {
        expect(add()).to.equal(0);
    });
});

describe("add AI testit Microsoft 365 copilotilla", () => {
    it('laskee kaksi lukua yhteen', () => {
        expect(add(6, 4)).to.equal(10);
    });

    it('lisää positiivisen ja negatiivisen luvun oikein', () => {
        expect(add(6, -4)).to.equal(2);
    });

    it('lisää kaksi negatiivista lukua', () => {
        expect(add(-6, -4)).to.equal(-10);
    });

    it('palauttaa luvun itsessään kun toinen on undefined', () => {
        expect(add(6)).to.equal(6);
    });

    it('palauttaa luvun itsessään kun ensimmäinen on undefined', () => {
        expect(add(undefined, 4)).to.equal(4);
    });

    it('palauttaa 0 kun molemmat on undefined', () => {
        expect(add()).to.equal(0);
    });

    it('käsittelee desimaaliluvut oikein', () => {
        expect(add(0.1, 0.2)).to.be.closeTo(0.3, 0.0001);
    });
});