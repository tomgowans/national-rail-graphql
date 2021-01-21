export interface Attributes {
  crs: string;
  filterCrs?: string | null;
  filterList?: Array<string>;
  filterType?: string;
  numRows?: number | null;
  timeOffset?: number | null;
  timeWindow?: number | null;
}

export interface ServiceAttributes {
  serviceID: string;
}

export interface ServiceProps {
  tokenValue: string;
}

export interface ServerProps {
  url: string;
}

interface GetArrBoardWithDetailsResponse {
  GetStationBoardResult: Array<any>;
}

interface GetServiceDetailsResult {
  GetServiceDetailsResult: Array<any>;
}

interface DeparturesBoard {
  DeparturesBoard: Array<any>;
}

export interface Result {
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
  isCancelled: string;
  isCircularRoute: string;
  length: string;
  platform: string | Array<string>;
  platformAvailable: string;
  previousCallingPoints: any;
  subsequentCallingPoints: any;
  trainServices: {
    service: Array<any>;
  };
}
