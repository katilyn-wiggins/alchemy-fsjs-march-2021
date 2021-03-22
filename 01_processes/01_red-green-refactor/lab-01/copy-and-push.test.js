const copyAndPush = require('./copy-and-push');

const numbers = [1, 2, 3];
const newArray = [1, 2, 3, 4]; 

const otherNumbers = [44, 26, 31]; 
const otherNewArray = [44, 26, 31, 33]; 


describe('push copied array function', () => {
  it('copies all items in the numbers array and adds a new value to the end of the array', () => {
    const addToArray = copyAndPush(numbers, 4); 

    expect(addToArray).toEqual(newArray); 
  });


  it('copies all items in a given array and adds a new value to the end of the array', () => {
    const addToArray = copyAndPush(otherNumbers, 33); 

    expect(addToArray).toEqual(otherNewArray); 
  });
});
