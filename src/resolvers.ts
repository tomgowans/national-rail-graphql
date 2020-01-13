import GetDepartureBoardRequest from "./GetDepartureBoardRequest";
import GetDepBoardWithDetailsRequest from "./GetDepBoardWithDetailsRequest";
import GetArrivalBoardRequest from "./GetArrivalBoardRequest";
import GetArrBoardWithDetailsRequest from "./GetArrBoardWithDetailsRequest";
import GetArrivalDepartureBoardRequest from "./GetArrivalDepartureBoardRequest";
import GetArrDepBoardWithDetailsRequest from "./GetArrDepBoardWithDetailsRequest";
import GetNextDeparturesRequest from "./GetNextDeparturesRequest";
import GetNextDeparturesWithDetailsRequest from "./GetNextDeparturesWithDetailsRequest";
import GetFastestDeparturesRequest from "./GetFastestDeparturesRequest";
import GetFastestDeparturesWithDetailsRequest from "./GetFastestDeparturesWithDetailsRequest";
import GetServiceDetailsRequest from "./GetServiceDetailsRequest";
import { Attributes, ServiceAttributes, ServiceProps } from "./types";

const resolvers = ({ tokenValue }: ServiceProps) => {
  return {
    Query: {
      GetDepartureBoard(obj: any, queryAttributes: Attributes) {
        return GetDepartureBoardRequest(queryAttributes, tokenValue);
      },

      GetDepBoardWithDetails(obj: any, queryAttributes: Attributes) {
        return GetDepBoardWithDetailsRequest(queryAttributes, tokenValue);
      },

      GetArrivalBoard(obj: any, queryAttributes: Attributes) {
        return GetArrivalBoardRequest(queryAttributes, tokenValue);
      },

      GetArrBoardWithDetails(obj: any, queryAttributes: Attributes) {
        return GetArrBoardWithDetailsRequest(queryAttributes, tokenValue);
      },

      GetArrivalDepartureBoard(obj: any, queryAttributes: Attributes) {
        return GetArrivalDepartureBoardRequest(queryAttributes, tokenValue);
      },

      GetArrDepBoardWithDetails(obj: any, queryAttributes: Attributes) {
        return GetArrDepBoardWithDetailsRequest(queryAttributes, tokenValue);
      },

      GetNextDepartures(obj: any, queryAttributes: Attributes) {
        return GetNextDeparturesRequest(queryAttributes, tokenValue);
      },

      GetNextDeparturesWithDetails(obj: any, queryAttributes: Attributes) {
        return GetNextDeparturesWithDetailsRequest(queryAttributes, tokenValue);
      },

      GetFastestDepartures(obj: any, queryAttributes: Attributes) {
        return GetFastestDeparturesRequest(queryAttributes, tokenValue);
      },

      GetFastestDeparturesWithDetails(obj: any, queryAttributes: Attributes) {
        return GetFastestDeparturesWithDetailsRequest(
          queryAttributes,
          tokenValue
        );
      },

      GetServiceDetails(obj: any, queryAttributes: ServiceAttributes) {
        return GetServiceDetailsRequest(queryAttributes, tokenValue);
      }
    }
  };
};

export default resolvers;
