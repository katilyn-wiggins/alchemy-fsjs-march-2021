const copyAndPush = require('./copy-and-push');

const numbers = [1, 2, 3];
const newArray = [1, 2, 3, 4]; 


describe('push to copied array function', () => {
  it('copies all items in a given array and adds a new value to the end of the array', () => {
    const addToArray = copyAndPush(numbers); 

    expect(addToArray).toEqual(newArray); 
  });
});
