const expect = require('expect');
const {isRealString} = require('./validation');

describe('is RealString ', () => {
    it('shold reject non string valus', () => {
        expect(isRealString(98)).toBe(false);
    });
     it('shold reject string with spaces', () => {
        expect(isRealString('   ')).toBe(false);
    });
     it('shold reject string with spaces', () => {
        expect(isRealString('hh hh')).toBe(true);
    });
});
