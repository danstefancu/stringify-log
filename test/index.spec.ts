import {stringify} from "../src";
import {expect} from 'chai';

describe('stringify', () => {
    it('serializes object', (done) => {
        let test = stringify({ prop: 'value'});

        expect(test).to.equal('{"prop":"value"}');

        done();
    });

    it('serializes arrays with length', (done) => {
        let test = stringify([1,2,3]);

        expect(test).to.include('3:[1,2,3]');

        done();
    });

    it('serializes errors with all props', (done) => {
        let test = stringify(new TypeError('hehe'));

        expect(test).to.include('hehe');

        done();
    });

    it('logs strings as they are', (done) => {
        let test = stringify('some string:');

        expect(test).to.include('some string:');

        done();
    });

    it('serialize everything else', (done) => {
        let test = stringify(42);

        expect(test).to.include('42');

        done();
    });
});
