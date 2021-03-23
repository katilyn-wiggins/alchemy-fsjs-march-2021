const emotionalArray = [
  'happy',
  'sad',
  'depressed',
  'overwhelmed',
  'stressed',
  'joyous',
  'optimistic',
];

describe('array functions', () => {
  describe('array.map but harder function', () => {
    it('takes in an array and then applies the callback and returns each item after the callback has acted on it', () => {
      const mappedItems = mapper(array, () => );

      expect(mappedItems).toEqual(emotionalArray);
    });
  });

  //do holes part after everything else

  // describe('array.filter but harder function', () => {
  //   it('takes in an array and returns all items whose callback returns true', () => {});
  // });

  // describe('array.findIndex but harder function', () => {
  //   it('takes in an array and returns the index of the first item whose callback returns true', () => {});
  // });

  // describe('array.reduce but harder function', () => {
  //   it('continuously adds the values in an array and returns the final accumulator value', () => {});
  // });

  // describe('array.every but harder function', () => {
  //   it('takes in an array and returns true if all values are true, otherwise returns false', () => {});
  // });
});


