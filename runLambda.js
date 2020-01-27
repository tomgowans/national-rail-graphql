const { ApolloServer } = require("apollo-server-lambda");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  typeDefs,
  // eslint-disable-next-line no-undef
  resolvers: resolvers({ tokenValue: process.env.tokenValue })
});

exports.handler = server.createHandler();
