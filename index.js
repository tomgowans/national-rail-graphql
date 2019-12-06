const { ApolloServer, gql } = require("apollo-server");

const GetDepartureBoardResponse = require("./GetDepartureBoardRequest");
const config = require("./config.json");

const { tokenValue } = config;

// const typeDefs = gql`

// type Station {
//   crs: [String]
//   locationName: [String]
// }

// type Services {
//   destination: [Station]
//   etd: [String]
//   operator: [String]
//   operatorCode: [String]
//   origin: [
//     location: [Station]
//   ]
//   platform: [String]
//   serviceID: [String]
//   serviceType: [String]
//   std: [String]
// }

// GetDepartureBoardResponse: {
//   GetStationBoardResult: {
//     trainServices: [
//       service: [Services]
//     ]
//   }
// }

// type Query {
//   service: [Services]
// }
// `;

const resolvers = {
  Query: {
    stations: () =>
      GetDepartureBoardResponse(
        {
          crs: "ECR"
        },
        tokenValue
      )
  }
};

GetDepartureBoardResponse(
  {
    crs: "ECR"
  },
  tokenValue
).then(result => console.dir(result));

// const server = new ApolloServer({ typeDefs, resolvers });

// server.listen().then(({ url }) => {
//   console.log(`Server ready at ${url}`);
// });
