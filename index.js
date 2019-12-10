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

  type ServiceItem {
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
    service: [ServiceItem]
  }

  type Messages {
    message: [String]
  }

  type StationBoard {
    generatedAt: [String]
    locationName: [String]
    crs: [String]
    filterLocationName: [String]
    filtercrs: [String]
    filterType: [String]
    nrccMessages: [Messages]
    platformAvailable: [String]
    areServicesAvailable: [String]
    trainServices: [TrainServicesArray]
  }

  type Query {
    GetStationBoardResult(crs: String): StationBoard
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
