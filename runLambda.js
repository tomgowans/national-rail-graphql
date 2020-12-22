const { ApolloServer } = require("apollo-server-lambda");

const typeDefs = require("./src/typeDefs");
const resolvers = require("./src/resolvers");

const server = new ApolloServer({
  typeDefs,
  // eslint-disable-next-line no-undef
  resolvers: resolvers({ tokenValue: process.env.tokenValue }),
});

exports.handler = server.createHandler();
