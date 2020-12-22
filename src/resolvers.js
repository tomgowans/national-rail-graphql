const GetDepartureBoardRequest = require("./GetDepartureBoardRequest");
const GetDepBoardWithDetailsRequest = require("./GetDepBoardWithDetailsRequest");
const GetArrivalBoardRequest = require("./GetArrivalBoardRequest");
const GetArrBoardWithDetailsRequest = require("./GetArrBoardWithDetailsRequest");
const GetArrivalDepartureBoardRequest = require("./GetArrivalDepartureBoardRequest");
const GetArrDepBoardWithDetailsRequest = require("./GetArrDepBoardWithDetailsRequest");
const GetNextDeparturesRequest = require("./GetNextDeparturesRequest");
const GetNextDeparturesWithDetailsRequest = require("./GetNextDeparturesWithDetailsRequest");
const GetFastestDeparturesRequest = require("./GetFastestDeparturesRequest");
const GetFastestDeparturesWithDetailsRequest = require("./GetFastestDeparturesWithDetailsRequest");
const GetServiceDetailsRequest = require("./GetServiceDetailsRequest");

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
      },
    },
  };
};

module.exports = resolvers;
