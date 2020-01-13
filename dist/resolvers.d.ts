import { Attributes, ServiceAttributes, ServiceProps } from "./types";
declare const resolvers: ({ tokenValue }: ServiceProps) => {
    Query: {
        GetDepartureBoard(obj: any, queryAttributes: Attributes): Promise<unknown>;
        GetDepBoardWithDetails(obj: any, queryAttributes: Attributes): Promise<unknown>;
        GetArrivalBoard(obj: any, queryAttributes: Attributes): Promise<unknown>;
        GetArrBoardWithDetails(obj: any, queryAttributes: Attributes): Promise<unknown>;
        GetArrivalDepartureBoard(obj: any, queryAttributes: Attributes): Promise<unknown>;
        GetArrDepBoardWithDetails(obj: any, queryAttributes: Attributes): Promise<unknown>;
        GetNextDepartures(obj: any, queryAttributes: Attributes): Promise<unknown>;
        GetNextDeparturesWithDetails(obj: any, queryAttributes: Attributes): Promise<unknown>;
        GetFastestDepartures(obj: any, queryAttributes: Attributes): Promise<unknown>;
        GetFastestDeparturesWithDetails(obj: any, queryAttributes: Attributes): Promise<unknown>;
        GetServiceDetails(obj: any, queryAttributes: ServiceAttributes): Promise<unknown>;
    };
};
export default resolvers;
