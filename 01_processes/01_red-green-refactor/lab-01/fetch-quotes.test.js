const fetchQuotes = require('./fetch-quotes');

describe('function that returns a quote from an API', () => {
  it('should return a single random quote when call is made to the futurama API', async() => {
    const aSingleRandomFuturamaQuote = await fetchQuotes();  

    expect(aSingleRandomFuturamaQuote).toEqual(expect.objectContaining({
      character: expect.any(String),
      image: expect.any(String),
      quote: expect.any(String)
    }));     
  }); 
}); 
