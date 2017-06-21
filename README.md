# restcountries-graphql

[![Build Status](https://api.travis-ci.org/ottoo/restcountries-graphql.svg)](https://travis-ci.org/ottoo/restcountries-graphql)

Get information about countries in a graphql format. Based on [https://restcountries.eu](https://restcountries.eu) api. At the moment supports the [name](https://restcountries.eu/#api-endpoints-name) endpoint.

Query format:

```
{
  countries(name: "Fin") {
    name
    callingCodes
    ...
  }
}
```

Supports the same attributes as the rest endpoint.

# Instructions

### First

`npm install`

### Run server:

`npm run server`

### Run tests:

`npm run test`
