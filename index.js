const { ApolloServer } = require("apollo-server");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

// Add production flag
const service = ({ tokenValue }) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers: resolvers({ tokenValue }),
  });

  server.listen().then(({ url }) => {
    console.log(`🚂 Server ready at ${url}`);
  });
};

module.exports = service;
