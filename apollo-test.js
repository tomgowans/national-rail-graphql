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

  type GetStationBoardResults {
    crs: [String]
    generatedAt: [String]
    locationName: [String]
    platformAvailable: [String]
    trainServices: [TrainServicesArray]
  }

  type Query {
    GetStationBoardResult(crs: String): GetStationBoardResults
  }
`;

const departures = {
  GetDepartureBoardResponse: [
    {
      $: {
        xmlns: "http://thalesgroup.com/RTTI/2017-10-01/ldb/"
      },
      GetStationBoardResult: [
        {
          $: {
            "xmlns:lt": "http://thalesgroup.com/RTTI/2012-01-13/ldb/types",
            "xmlns:lt2": "http://thalesgroup.com/RTTI/2014-02-20/ldb/types",
            "xmlns:lt3": "http://thalesgroup.com/RTTI/2015-05-14/ldb/types",
            "xmlns:lt4": "http://thalesgroup.com/RTTI/2015-11-27/ldb/types",
            "xmlns:lt5": "http://thalesgroup.com/RTTI/2016-02-16/ldb/types",
            "xmlns:lt6": "http://thalesgroup.com/RTTI/2017-02-02/ldb/types",
            "xmlns:lt7": "http://thalesgroup.com/RTTI/2017-10-01/ldb/types"
          },
          crs: ["ECR"],
          generatedAt: ["2019-11-20T21:09:59.5101527+00:00"],
          locationName: ["East Croydon"],
          platformAvailable: ["true"],
          trainServices: [
            {
              service: [
                {
                  destination: [
                    {
                      location: [
                        {
                          crs: ["GTW"],
                          locationName: ["Gatwick Airport"]
                        }
                      ]
                    }
                  ],
                  etd: ["On time"],
                  length: ["12"],
                  operator: ["Thameslink"],
                  operatorCode: ["TL"],
                  origin: [
                    {
                      location: [
                        {
                          crs: ["BDM"],
                          locationName: ["Bedford"]
                        }
                      ]
                    }
                  ],
                  platform: ["6"],
                  serviceID: ["8NvDNS9Gpylp0MOg/MmCxw=="],
                  serviceType: ["train"],
                  std: ["21:07"]
                },
                {
                  destination: [
                    {
                      location: [
                        {
                          crs: ["TBD"],
                          locationName: ["Three Bridges"]
                        }
                      ]
                    }
                  ],
                  etd: ["On time"],
                  operator: ["Thameslink"],
                  operatorCode: ["TL"],
                  origin: [
                    {
                      location: [
                        {
                          crs: ["LBG"],
                          locationName: ["London Bridge"]
                        }
                      ]
                    }
                  ],
                  platform: ["3"],
                  serviceID: ["rkEPUnFHelVWfAllpJoHZA=="],
                  serviceType: ["train"],
                  std: ["21:08"]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

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
  console.log(`Server ready at ${url}`);
});
