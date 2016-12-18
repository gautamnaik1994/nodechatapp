const expect = require('expect');
const {
    Users
} = require('./users');

describe('Users', () => {
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'A'
        }, {
            id: '2',
            name: 'GGG',
            room: 'B'
        }, {
            id: '3',
            name: 'MMMM',
            room: 'A'
        }]
    });
    it('shold add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Gautam',
            room: 'AA'
        };
        var resUser = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    });

    it('shold return names of room', () => {
        var userList = users.getUserList('A');
        expect(userList).toEqual(['Mike', 'MMMM']);
    });
     it('shold return names of room', () => {
        var userList = users.getUserList('B');
        expect(userList).toEqual(['GGG']);
    });

    it('shold remove a user', () => {
        var user = users.removeUser('1');

        expect(user.id).toBe('1');
        expect(users.users.length).toBe(2);
     });
     it('shold not remove a user', () => {
        var user = users.removeUser('99');

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
     });
     it('shold find a user', () => {
        var user = users.getUser('2');
        expect(user.id).toBe('2');
     });
     it('shold not find a user', () => {
        var user = users.getUser('99');
        expect(user).toNotExist();
    });
});