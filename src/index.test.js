const { createTestClient } = require("apollo-server-testing");
// const gql = require("graphql-tag");
// const nock = require('nock');

// const GetArrBoardWithDetailsRequest = require("./GetArrBoardWithDetailsRequest");

// const server = new ApolloServer({
//   typeDefs,
//   resolvers
// });

const { ApolloServer } = require("apollo-server");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

// server.listen().then(({ url }) => {
//   console.log(`🚂 Server ready at ${url}`);
// });

const GET_NEXT_DEPARTURES = `
  query GetNextDepartures(crs: "ECR") {
    crs
    nrccMessages {
      message
    }
    generatedAt
    locationName
    platformAvailable
  }
`;

describe.skip("Queries", () => {
  it("fetches the correct data", async () => {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });

    const { query } = createTestClient(server);
    const res = await query({ query: GET_NEXT_DEPARTURES });

    expect(res).toMatchSnapshot();

    // GetArrBoardWithDetailsRequest(queryAttributes, config.tokenValue);
  });
});
