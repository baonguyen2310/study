import {isOddNumber, countEvenNumber} from './main.js';

const expect = chai.expect;

describe('function isOddNumber()', () => {
    it('should be true if 3', () => {
        const result = isOddNumber(3);
        expect(result).to.be.true;
    });
    it('should be false if 2', () => {
        const result = isOddNumber(2);
        expect(result).to.be.false;
    });
});


describe('function countEvenNumber():', () => {
    it('should equal 0 if null', () => {
        const result = countEvenNumber(null);
        expect(result).to.equal(0);
    });
    it('should equal 0 if []', () => {
        const result = countEvenNumber([]);
        expect(result).to.equal(0);
    });
});