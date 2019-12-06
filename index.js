const { ApolloServer, gql } = require("apollo-server");

const GetDepartureBoardResponse = require("./GetDepartureBoardRequest");
const config = require("./config.json");

const typeDefs = gql`
  type Station {
    crs: [String]
    locationName: [String]
  }

  type Location {
    location: [Station]
  }

  type Services {
    destination: [Location]
    cancelReason: [String]
    delayReason: [String]
    etd: [String]
    length: [String]
    operator: [String]
    operatorCode: [String]
    origin: [Location]
    platform: [String]
    serviceID: [String]
    serviceType: [String]
    std: [String]
  }

  type TrainServicesArray {
    service: [Services]
  }

  type Messages {
    message: [String]
  }

  type GetStationBoardResults {
    generatedAt: [String]
    locationName: [String]
    crs: [String]
    nrccMessages: [Messages]
    platformAvailable: [String]
    trainServices: [TrainServicesArray]
  }

  type Query {
    GetStationBoardResult(crs: String): GetStationBoardResults
  }
`;

const resolvers = {
  Query: {
    GetStationBoardResult(obj, { crs }) {
      return GetDepartureBoardResponse(
        {
          crs
        },
        config.tokenValue
      );
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
