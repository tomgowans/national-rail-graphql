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

const resolvers = ({ tokenValue }) => {
  return {
    Query: {
      GetDepartureBoard(obj, queryAttributes) {
        return GetDepartureBoardRequest(queryAttributes, tokenValue);
      },

      GetDepBoardWithDetails(obj, queryAttributes) {
        return GetDepBoardWithDetailsRequest(queryAttributes, tokenValue);
      },

      GetArrivalBoard(obj, queryAttributes) {
        return GetArrivalBoardRequest(queryAttributes, tokenValue);
      },

      GetArrBoardWithDetails(obj, queryAttributes) {
        return GetArrBoardWithDetailsRequest(queryAttributes, tokenValue);
      },

      GetArrivalDepartureBoard(obj, queryAttributes) {
        return GetArrivalDepartureBoardRequest(queryAttributes, tokenValue);
      },

      GetArrDepBoardWithDetails(obj, queryAttributes) {
        return GetArrDepBoardWithDetailsRequest(queryAttributes, tokenValue);
      },

      GetNextDepartures(obj, queryAttributes) {
        return GetNextDeparturesRequest(queryAttributes, tokenValue);
      },

      GetNextDeparturesWithDetails(obj, queryAttributes) {
        return GetNextDeparturesWithDetailsRequest(queryAttributes, tokenValue);
      },

      GetFastestDepartures(obj, queryAttributes) {
        return GetFastestDeparturesRequest(queryAttributes, tokenValue);
      },

      GetFastestDeparturesWithDetails(obj, queryAttributes) {
        return GetFastestDeparturesWithDetailsRequest(
          queryAttributes,
          tokenValue
        );
      },

      GetServiceDetails(obj, queryAttributes) {
        return GetServiceDetailsRequest(queryAttributes, tokenValue);
      }
    }
  };
};

export default resolvers;
