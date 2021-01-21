import { ApolloServer as ApolloServerLambda } from 'apollo-server-lambda';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
import { ServiceProps } from './types';
export declare const service: ({ tokenValue }: ServiceProps) => void;
export declare const lambdaService: ({ tokenValue }: ServiceProps) => ApolloServerLambda;
export { typeDefs, resolvers };
