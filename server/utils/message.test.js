const expect = require('expect');
var {generateMessage} = require('./message');


describe('generate message', () => {
    it('should generate correct message object', () => {
        var message = generateMessage("gautam","naik");
        expect(message.from).toBe("gautam");
         expect(message.text).toBe("naik");
         expect(message.createdAt).toBeA('number');       
    });
});