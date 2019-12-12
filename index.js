const { ApolloServer } = require("apollo-server");

const GetDepartureBoardRequest = require("./GetDepartureBoardRequest");
const GetDepBoardWithDetailsRequest = require("./GetDepBoardWithDetailsRequest");
const config = require("./config.json");
const typeDefs = require("./typeDefs");

const resolvers = {
  Query: {
    GetDepartureBoard(obj, queryAttributes) {
      return GetDepartureBoardRequest(queryAttributes, config.tokenValue);
    },

    GetDepBoardWithDetails(obj, queryAttributes) {
      return GetDepBoardWithDetailsRequest(queryAttributes, config.tokenValue);
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚂 Server ready at ${url}`);
});
