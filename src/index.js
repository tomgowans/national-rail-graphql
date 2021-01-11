const { ApolloServer } = require("apollo-server");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const service = ({ tokenValue, isDevEnv = false }) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers: resolvers({ tokenValue }),
  });

  if (isDevEnv) {
    server.listen().then(({ url }) => {
      console.log(`🚂 Server ready at ${url}`);
    });
  }
};

module.exports = service;
