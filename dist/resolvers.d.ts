declare const resolvers: ({ tokenValue }: {
    tokenValue: any;
}) => {
    Query: {
        GetDepartureBoard(obj: any, queryAttributes: any): Promise<unknown>;
        GetDepBoardWithDetails(obj: any, queryAttributes: any): Promise<unknown>;
        GetArrivalBoard(obj: any, queryAttributes: any): Promise<unknown>;
        GetArrBoardWithDetails(obj: any, queryAttributes: any): Promise<unknown>;
        GetArrivalDepartureBoard(obj: any, queryAttributes: any): Promise<unknown>;
        GetArrDepBoardWithDetails(obj: any, queryAttributes: any): Promise<unknown>;
        GetNextDepartures(obj: any, queryAttributes: any): Promise<unknown>;
        GetNextDeparturesWithDetails(obj: any, queryAttributes: any): Promise<unknown>;
        GetFastestDepartures(obj: any, queryAttributes: any): Promise<unknown>;
        GetFastestDeparturesWithDetails(obj: any, queryAttributes: any): Promise<unknown>;
        GetServiceDetails(obj: any, queryAttributes: any): Promise<unknown>;
    };
};
export default resolvers;
