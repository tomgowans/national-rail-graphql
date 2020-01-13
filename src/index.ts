import { ApolloServer } from "apollo-server";

import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import { ServiceProps, ServerProps } from "./types";

const service = ({ tokenValue }: ServiceProps) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers: resolvers({ tokenValue })
  });

  server.listen().then(({ url }: ServerProps) => {
    console.log(`🚂 Server ready at ${url}`);
  });
};

module.exports = service;
