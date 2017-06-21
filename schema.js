'use strict'

const { makeExecutableSchema } = require('graphql-tools');
const merge = require('lodash/merge');

const countries = require('./countries');

// Combine the sub-schemas into the array for executable schema. At the
// moment there is only one
const schema = [...countries.schema];

// Merge the resolvers together for the executable scema. At the
// moment there is only one
const resolvers = merge(countries.resolvers);

const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers
});

module.exports = executableSchema;
