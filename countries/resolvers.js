'use strict'

const rp = require('request-promise');

const API_URL = 'https://restcountries.eu/rest/v2/all';
const COUNTRY_NAME_API_URL = 'https://restcountries.eu/rest/v2/name';

module.exports = {
  Query: {
    all: () => rp({
      uri: API_URL,
      json: true
    }),
    countries: (root, { name }) => rp({
      uri: `${COUNTRY_NAME_API_URL}/${name}`,
      json: true
    })
  }
};
