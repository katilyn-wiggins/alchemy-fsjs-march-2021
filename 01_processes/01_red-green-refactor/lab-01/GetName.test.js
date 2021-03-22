const getName = require('./GetName');

const spot = { name: 'spot', age: 5, weight: '20 lbs' };

const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
getName(character);

describe('grabs name property from getName function', () => {
  it('takes in the exampleObject and returns the value of the name property ', () => {
    const extractedName = getName(spot);

    expect(extractedName).toEqual({
      name: 'spot',
    });
  });

  it('takes in any object with a property of name and returns its value', () => {
    const extractedName = getName(character);

    expect(extractedName).toEqual({
      name: 'Aang',
    });
  });
});
