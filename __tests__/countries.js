const { run } = require('./../server');
const casual = require('casual');
const rp = require('request-promise');

const testPort = 3333;
const endpointUrl = `http://localhost:${testPort}/graphql`;

const rrp = jest.genMockFromModule('./../countries/resolvers.js');

let server;

beforeAll(() => {
  server = run({ PORT: testPort });
});

describe('find countries by name', () => {
  test('should find one country with correct attributes', (done) => {
    const expected = [{
      name: 'Finland',
      callingCodes: ['358'],
      topLevelDomain: ['.fi'],
      alpha2Code: 'FI',
      alpha3Code: 'FIN',
      capital: 'Helsinki',
      altSpellings: ['FI', 'Suomi'],
      region: 'Europe',
      subregion: 'Northern Europe',
      population: 5500000,
      latlng: [64.0, 26.0],
      demonym: 'Finnish',
      timezones: ['UTC+02:00'],
      borders: ['Sweden, Russia, Norway'],
      nativeName: 'Suomi',
      numericCode: 246,
      currencies: [{
        code: 'EUR',
        name: 'Euro',
        symbol: '€'
      }],
      flag: 'http://something.com/fi.svg'
    }];

    rp.__pushMockRequest({
      options: {
        uri: 'https://restcountries.eu/rest/v2/name/fin',
      },
      result: expected
    });

    const query = `
      {
        countries(name: "fin") {
          name
          callingCodes
          topLevelDomain
          alpha2Code
          alpha3Code
          capital
          altSpellings
          region
          subregion
          population
          latlng
          demonym
          timezones
          borders
          nativeName
          numericCode
          currencies {
            code
            name
            symbol
          }
          flag
        }
      }
    `;

    const result = rp.actual({
      uri: endpointUrl,
      method: 'post',
      body: { query },
      json: true
    }).then(response => {
        expect(response).toEqual({
          data: {
            countries: expected
          }
        });

        done();
    });
  });
});

afterAll(() => {
  server.close();
  server = null;
});
