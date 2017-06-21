'use strict'

const express = require('express');
const cors = require('cors');
const { createServer } = require('http');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');

const schema = require('./schema');

function run({
              PORT = 3000
            }) {

  const app = express();

  app.use(cors());

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  // Add an endpoint for the graphql
  app.use('/graphql', graphqlExpress({ schema }));

  // Add an endpoint for the graphiql ide
  app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
  }));

  const server = createServer(app);

  server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

  return server;
};

module.exports = {
  run
};
