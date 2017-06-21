'use strict'

module.exports = [`
  type Currency {
    code: String
    name: String
    symbol: String
  }

  type Country {
    name: String,
    callingCodes: [String],
    topLevelDomain: [String]
    alpha2Code: String
    alpha3Code: String
    capital: String
    altSpellings: [String]
    region: String
    subregion: String
    population: Int
    latlng: [Float],
    demonym: String,
    timezones: [String],
    borders: [String],
    nativeName: String,
    numericCode: Int,
    currencies: [Currency]
    flag: String
  }

  type Query {
    all: [Country]
    countries(name: String!): [Country]
  }

  schema {
    query: Query
  }
`];
