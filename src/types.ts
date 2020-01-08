export type Attributes = {
  numRows?: number;
  crs: string;
  filterCrs?: Array<string>;
  filterType?: string;
  timeOffset?: number;
  timeWindow?: number;
};

type GetArrBoardWithDetailsResponse = {
  GetStationBoardResult: Array<Object>;
};

type GetServiceDetailsResult = {
  GetServiceDetailsResult: Array<Object>;
};

type DeparturesBoard = {
  DeparturesBoard: Array<Object>;
};

export type Result = {
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
};
