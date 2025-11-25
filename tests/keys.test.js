import expect from 'expect';
import keys from '../src/keys.js';

describe('keys()', () => {

    test('palauttaa objektin omat enumerable propertyt', () => {
        function Foo() {
            this.a = 1;
            this.b = 2;
        }
        Foo.prototype.c = 3;

        const result = keys(new Foo());
        expect(result).toEqual(['a', 'b']);
    });
})