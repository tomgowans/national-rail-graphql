const { ApolloServer } = require("apollo-server");

const GetDepartureBoardRequest = require("./GetDepartureBoardRequest");
const GetDepBoardWithDetailsRequest = require("./GetDepBoardWithDetailsRequest");
const GetArrBoardWithDetailsRequest = require("./GetArrBoardWithDetailsRequest");
const GetArrDepBoardWithDetailsRequest = require("./GetArrDepBoardWithDetailsRequest");

const config = require("./config.json");
const typeDefs = require("./typeDefs");

const resolvers = {
  Query: {
    GetArrBoardWithDetails(obj, queryAttributes) {
      return GetArrBoardWithDetailsRequest(queryAttributes, config.tokenValue);
    },

    GetArrDepBoardWithDetails(obj, queryAttributes) {
      return GetArrDepBoardWithDetailsRequest(
        queryAttributes,
        config.tokenValue
      );
    },

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
