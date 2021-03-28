const capitalizeAndFilter = require('./capitalize-and-filter');

const strangeArray = ['anemone', 'flower', 'gargantuan', 'yellow', 'squirrel', 'freebird'];

const helloArray = ['hello', 'world', 'my', 'friends', 'name', 'is', 'frannie', 'burger'];

const helloFiltArray = ['HELLO', 'WORLD', 'MY', 'NAME', 'IS', 'BURGER'];



describe('capitalize and filter function', () => {
  it('should capitlize the given strings and filter out any string beginning with the letter f', () => {
    const capAndFilt = capitalizeAndFilter(strangeArray); 

    expect(capAndFilt).toEqual(['ANEMONE', 'GARGANTUAN', 'YELLOW', 'SQUIRREL']); 
  });

  it('should capitlize the given strings and filter out any string beginning with the letter f', () => {
    const capAndFilt = capitalizeAndFilter(helloArray); 

    expect(capAndFilt).toEqual(helloFiltArray); 
  });
}); 
