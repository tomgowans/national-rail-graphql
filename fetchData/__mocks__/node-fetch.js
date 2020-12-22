const response = require("../response");

const GetDepartureBoardRequest = require("../../src/GetDepartureBoardRequest/response");
const GetDepBoardWithDetailsRequest = require("../../src/GetDepBoardWithDetailsRequest/response");
const GetArrivalBoardRequest = require("../../src/GetArrivalBoardRequest/response");
const GetArrBoardWithDetailsRequest = require("../../src/GetArrBoardWithDetailsRequest/response");
const GetArrDepBoardWithDetailsRequest = require("../../src/GetArrDepBoardWithDetailsRequest/response");
const GetArrivalDepartureBoardRequest = require("../../src/GetArrivalDepartureBoardRequest/response");
const GetNextDeparturesRequest = require("../../src/GetNextDeparturesRequest/response");
const GetNextDeparturesWithDetailsRequest = require("../../src/GetNextDeparturesWithDetailsRequest/response");
const GetFastestDeparturesRequest = require("../../src/GetFastestDeparturesRequest/response");
const GetFastestDeparturesWithDetailsRequest = require("../../src/GetFastestDeparturesWithDetailsRequest/response");
const GetServiceDetailsRequest = require("../../src/GetServiceDetailsRequest/response");

const fetch = (url, args) => {
  return new Promise(resolve => {
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

    if (args.body.includes("GetFastestDeparturesRequest")) {
      resolve(GetFastestDeparturesRequest);
    }

    if (args.body.includes("GetFastestDeparturesWithDetailsRequest")) {
      resolve(GetFastestDeparturesWithDetailsRequest);
    }

    if (args.body.includes("GetServiceDetailsRequest")) {
      resolve(GetServiceDetailsRequest);
    }

    if (args.body.includes("RespondWithXMLError")) {
      resolve({
        text: () => {
          return `<xml><malformedxml/>`;
        }
      });
    }

    if (args.body.includes("RespondWithFetchError")) {
      resolve("<xml><malformedxml/>");
    }

    resolve(response);
  });
};

module.exports = fetch;
