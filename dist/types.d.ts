export declare type Attributes = {
    crs: string;
    filterCrs?: string | null;
    filterList?: Array<string>;
    filterType?: string;
    numRows?: number | null;
    timeOffset?: number | null;
    timeWindow?: number | null;
};
export declare type ServiceAttributes = {
    serviceID: string;
};
export declare type ServiceProps = {
    tokenValue: string;
};
export declare type ServerProps = {
    url: string;
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
    GetFastestDeparturesResponse: Array<DeparturesBoard>;
    GetFastestDeparturesWithDetailsResponse: Array<DeparturesBoard>;
    GetNextDeparturesResponse: Array<DeparturesBoard>;
    GetNextDeparturesWithDetailsResponse: Array<DeparturesBoard>;
    GetServiceDetailsResponse: Array<GetServiceDetailsResult>;
    isCancelled: String;
    isCircularRoute: String;
    length: String;
    platform: String | Array<String>;
    platformAvailable: String;
    previousCallingPoints: any;
    subsequentCallingPoints: any;
    trainServices: {
        service: Array<any>;
    };
};
export {};
