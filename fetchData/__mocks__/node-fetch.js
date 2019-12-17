const response = require("../response");

const GetDepartureBoardRequest = require("../../GetDepartureBoardRequest/response");
const GetDepBoardWithDetailsRequest = require("../../GetDepBoardWithDetailsRequest/response");
const GetArrivalBoardRequest = require("../../GetArrivalBoardRequest/response");
const GetArrBoardWithDetailsRequest = require("../../GetArrBoardWithDetailsRequest/response");
const GetArrDepBoardWithDetailsRequest = require("../../GetArrDepBoardWithDetailsRequest/response");
const GetArrivalDepartureBoardRequest = require("../../GetArrivalDepartureBoardRequest/response");
const GetNextDeparturesRequest = require("../../GetNextDeparturesRequest/response");
const GetNextDeparturesWithDetailsRequest = require("../../GetNextDeparturesWithDetailsRequest/response");
const GetFastestDeparturesWithDetailsRequest = require("../../GetFastestDeparturesWithDetailsRequest/response");
const GetServiceDetailsRequest = require("../../GetServiceDetailsRequest/response");

const fetch = (url, args) => {
  return new Promise((resolve, reject) => {
    if (args.body.includes("GetDepartureBoardRequest")) {
      resolve(GetDepartureBoardRequest);
    }

    if (args.body.includes("GetDepBoardWithDetailsRequest")) {
      resolve(GetDepBoardWithDetailsRequest);
    }

    if (args.body.includes("GetArrivalBoardRequest")) {
      resolve(GetArrivalBoardRequest);
    }

    if (args.body.includes("GetArrBoardWithDetailsRequest")) {
      resolve(GetArrBoardWithDetailsRequest);
    }

    if (args.body.includes("GetArrDepBoardWithDetailsRequest")) {
      resolve(GetArrDepBoardWithDetailsRequest);
    }

    if (args.body.includes("GetArrivalDepartureBoardRequest")) {
      resolve(GetArrivalDepartureBoardRequest);
    }

    if (args.body.includes("GetNextDeparturesRequest")) {
      resolve(GetNextDeparturesRequest);
    }

    if (args.body.includes("GetNextDeparturesWithDetailsRequest")) {
      resolve(GetNextDeparturesWithDetailsRequest);
    }

    if (args.body.includes("GetFastestDeparturesWithDetailsRequest")) {
      resolve(GetFastestDeparturesWithDetailsRequest);
    }

    if (args.body.includes("GetServiceDetailsRequest")) {
      resolve(GetServiceDetailsRequest);
    }

    resolve(response);
  });
};

module.exports = fetch;
