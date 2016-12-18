const expect = require('expect');
var {generateMessage,generateLocationMessage} = require('./message');


describe('generate message', () => {
    it('should generate correct message object', () => {
        var message = generateMessage("gautam","naik");
        expect(message.from).toBe("gautam");
         expect(message.text).toBe("naik");
         expect(message.createdAt).toBeA('number');       
    });
});


describe('Generate Location Info', () => {
    it('should generate correct location obj', () => {
        var message = generateLocationMessage('Admin', 1, 1);
        expect(message.from).toBe('Admin');
        expect(message.url).toBe('https://www.google.co.in/maps/?q=1,1');
        expect(message.createdAt).toBeA('number');
    });
});