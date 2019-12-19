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

const config = require("./config.json");

const resolvers = {
  Query: {
    GetDepartureBoard(obj, queryAttributes) {
      return GetDepartureBoardRequest(queryAttributes, config.tokenValue);
    },

    GetDepBoardWithDetails(obj, queryAttributes) {
      return GetDepBoardWithDetailsRequest(queryAttributes, config.tokenValue);
    },

    GetArrivalBoard(obj, queryAttributes) {
      return GetArrivalBoardRequest(queryAttributes, config.tokenValue);
    },

    GetArrBoardWithDetails(obj, queryAttributes) {
      return GetArrBoardWithDetailsRequest(queryAttributes, config.tokenValue);
    },

    GetArrivalDepartureBoard(obj, queryAttributes) {
      return GetArrivalDepartureBoardRequest(
        queryAttributes,
        config.tokenValue
      );
    },

    GetArrDepBoardWithDetails(obj, queryAttributes) {
      return GetArrDepBoardWithDetailsRequest(
        queryAttributes,
        config.tokenValue
      );
    },

    // TODO: Make work
    GetNextDepartures(obj, queryAttributes) {
      return GetNextDeparturesRequest(queryAttributes, config.tokenValue);
    },

    // TODO: Make work
    GetNextDeparturesWithDetails(obj, queryAttributes) {
      return GetNextDeparturesWithDetailsRequest(
        queryAttributes,
        config.tokenValue
      );
    },

    // TODO: Make work
    GetFastestDepartures(obj, queryAttributes) {
      return GetFastestDeparturesRequest(queryAttributes, config.tokenValue);
    },

    // TODO: Make work
    GetFastestDeparturesWithDetails(obj, queryAttributes) {
      return GetFastestDeparturesWithDetailsRequest(
        queryAttributes,
        config.tokenValue
      );
    },

    GetServiceDetails(obj, queryAttributes) {
      return GetServiceDetailsRequest(queryAttributes, config.tokenValue);
    }
  }
};

module.exports = resolvers;
