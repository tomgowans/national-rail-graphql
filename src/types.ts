export type Attributes = {
  numRows?: number;
  crs: string;
  filterCrs?: string;
  filterList?: Array<string>;
  filterType?: string;
  timeOffset?: number;
  timeWindow?: number;
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
