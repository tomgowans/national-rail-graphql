export declare type Attributes = {
    numRows?: number;
    crs: string;
    filterCrs?: Array<string>;
    filterType?: string;
    timeOffset?: number;
    timeWindow?: number;
};
declare type GetArrBoardWithDetailsResponse = {
    GetStationBoardResult: Array<any>;
};
declare type GetServiceDetailsResult = {
    GetServiceDetailsResult: Array<any>;
};
declare type DeparturesBoard = {
    DeparturesBoard: Array<any>;
};
export declare type Result = {
    departures: any;
    GetArrBoardWithDetailsResponse: Array<GetArrBoardWithDetailsResponse>;
    GetArrDepBoardWithDetailsResponse: Array<GetArrBoardWithDetailsResponse>;
    GetArrivalBoardResponse: Array<GetArrBoardWithDetailsResponse>;
    GetArrivalDepartureBoardResponse: Array<GetArrBoardWithDetailsResponse>;
    GetDepartureBoardResponse: Array<GetArrBoardWithDetailsResponse>;
    GetDepBoardWithDetailsResponse: Array<GetArrBoardWithDetailsResponse>;
    GetServiceDetailsResponse: Array<GetServiceDetailsResult>;
    GetFastestDeparturesResponse: Array<DeparturesBoard>;
    GetFastestDeparturesWithDetailsResponse: Array<DeparturesBoard>;
    GetNextDeparturesResponse: Array<DeparturesBoard>;
    GetNextDeparturesWithDetailsResponse: Array<DeparturesBoard>;
    length: String;
    isCancelled: String;
    platformAvailable: String;
    previousCallingPoints: any;
    subsequentCallingPoints: any;
    trainServices: {
        service: Array<any>;
    };
};
export {};
