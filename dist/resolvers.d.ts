import { Attributes, ServiceAttributes, ServiceProps } from './types';
declare const resolvers: ({ tokenValue }: ServiceProps) => {
    Query: {
        GetDepartureBoard(obj: any, queryAttributes: Attributes): Promise<import("./types").Result>;
        GetDepBoardWithDetails(obj: any, queryAttributes: Attributes): Promise<import("./types").Result>;
        GetArrivalBoard(obj: any, queryAttributes: Attributes): Promise<import("./types").Result>;
        GetArrBoardWithDetails(obj: any, queryAttributes: Attributes): Promise<unknown>;
        GetArrivalDepartureBoard(obj: any, queryAttributes: Attributes): Promise<import("./types").Result>;
        GetArrDepBoardWithDetails(obj: any, queryAttributes: Attributes): Promise<import("./types").Result>;
        GetNextDepartures(obj: any, queryAttributes: Attributes): Promise<import("./types").Result>;
        GetNextDeparturesWithDetails(obj: any, queryAttributes: Attributes): Promise<import("./types").Result>;
        GetFastestDepartures(obj: any, queryAttributes: Attributes): Promise<import("./types").Result>;
        GetFastestDeparturesWithDetails(obj: any, queryAttributes: Attributes): Promise<import("./types").Result>;
        GetServiceDetails(obj: any, queryAttributes: ServiceAttributes): Promise<import("./types").Result>;
    };
};
export default resolvers;
