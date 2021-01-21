import { ApolloServer } from 'apollo-server';
import { ApolloServer as ApolloServerLambda } from 'apollo-server-lambda';

import typeDefs from './typeDefs';
import resolvers from './resolvers';
import { ServiceProps, ServerProps } from './types';

export const service = ({ tokenValue }: ServiceProps): void => {
  const server = new ApolloServer({
    typeDefs,
    resolvers: resolvers({ tokenValue }),
  });

  server.listen().then(({ url }: ServerProps) => {
    console.log(`🚂 Server ready at ${url}`);
  });
};

export const lambdaService = ({ tokenValue }: ServiceProps) => {
  return new ApolloServerLambda({
    typeDefs,
    resolvers: resolvers({ tokenValue }),
  });
}

export { typeDefs, resolvers};