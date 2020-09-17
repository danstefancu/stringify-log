import {stringify} from "../src";
import {expect} from 'chai';

describe('stringify', () => {
    it('should serialize objects', (done) => {
        let test = stringify({ prop: 'value'});

        expect(test).to.equal('{"prop":"value"}');

        done();
    });

    it('should serialize arrays with length', (done) => {
        let test = stringify([1,2,3]);

        expect(test).to.include('3:[1,2,3]');

        done();
    });

    it('should serialize errors with all props', (done) => {
        let test = stringify(new TypeError('hehe'));

        expect(test).to.include('hehe');

        done();
    });

    it('should serialize errors without stack for param', (done) => {
        let test = stringify(new TypeError('hehe'), true);

        expect(test).to.equal('{"message":"hehe"}');

        done();
    });

    it('should serialize strings as they are', (done) => {
        let test = stringify('some string:');

        expect(test).to.include('some string:');

        done();
    });

    it('should keep double quotes in strings', (done) => {
        let test = stringify('some string"');

        expect(test).to.include('some string"');

        done();
    });

    it('should serialize everything else', (done) => {
        let test = stringify(42);

        expect(test).to.include('42');

        done();
    });
});
