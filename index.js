const { ApolloServer } = require("apollo-server");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚂 Server ready at ${url}`);
});

// TODO: Create entrypoint with tokenKey and production flag to switch off playground
