const fetchQuotes = require('./fetch-quotes');

jest.mock('node-fetch');

const fetch = require('node-fetch');
fetch.mockImplementation(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          character: 'character',
          quote: 'quote',
          image: 'image',
        },
      ]),
  })
);

describe('function that returns a quote from an API', () => {
  // eslint-disable-next-line space-before-function-paren
  it('should return a single random quote when call is made to the futurama API', async () => {
    const aSingleRandomFuturamaQuote = await fetchQuotes();

    expect(aSingleRandomFuturamaQuote).toEqual(
      expect.objectContaining({
        character: expect.any(String),
        image: expect.any(String),
        quote: expect.any(String),
      })
    );
  });
});
