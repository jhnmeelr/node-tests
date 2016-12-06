const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(33, 11);

    expect(res).toBe(44).toBeA('number');
});

it('should add square a number', () => {
    var res = utils.square(4);

    expect(res).toBe(16).toBeA('number');
});

it('should set firstName and lastName', () => {
    var someUser = { location: 'Philadelphia', age: 25 }
    var res = utils.setName(someUser, 'Andrew Mead');

    expect(res).toInclude({
        firstName: 'Andrew',
        lastName: 'Mead'
    }).toBeA('object');
});

it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    })
});

it('should async square a number', (done) => {
    utils.asyncSquare(3, (square) => {
        expect(square).toBe(9).toBeA('number');
        done();
    })
});

// it('should expect some values', () => {
//     // expect(12).toNotBe(12);
//     // expect({name: 'andrew'}).toNotEqual({name: 'Andrew'});
//     expect([2,3,4]).toExclude(1);
//     expect({
//         name: 'Andrew',
//         age: 25,
//         location: 'Philadelphia'
//     }).toInclude({
//         age: 25
//     })
// });