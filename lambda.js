const { ApolloServer } = require("apollo-server-lambda");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

// Add production flag
const service = ({ tokenValue }) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers: resolvers({ tokenValue })
  });

  server.createHandler();
};

exports.handler = service;
