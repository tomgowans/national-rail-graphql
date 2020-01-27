export type Attributes = {
  crs: string;
  filterCrs?: string | null;
  filterList?: Array<string>;
  filterType?: string;
  numRows?: number | null;
  timeOffset?: number | null;
  timeWindow?: number | null;
};

export type ServiceAttributes = {
  serviceID: string;
};

export type ServiceProps = {
  tokenValue: string;
};

export type ServerProps = {
  url: string;
};

type GetArrBoardWithDetailsResponse = {
  GetStationBoardResult: Array<any>;
};

type GetServiceDetailsResult = {
  GetServiceDetailsResult: Array<any>;
};

type DeparturesBoard = {
  DeparturesBoard: Array<any>;
};

export type Result = {
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
