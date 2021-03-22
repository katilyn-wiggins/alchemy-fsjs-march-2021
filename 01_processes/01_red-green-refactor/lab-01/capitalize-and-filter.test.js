const capitalizeAndFilter = require('./capitalize-and-filter');

describe('capitalize and filter function', () => {
  it('should capitlize the given strings and filter out any string beginning with the letter f', () => {
    const capAndFilt = capitalizeAndFilter(); 

    expect(capAndFilt).toEqual(['anemone', 'gargantuan', 'yellow', 'squirrel']); 
  });
}); 
