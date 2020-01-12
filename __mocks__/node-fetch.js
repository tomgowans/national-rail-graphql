var response = require("../dist/fetchData/response");
var GetDepartureBoardRequest = require("../dist/GetDepartureBoardRequest/response");
var GetDepBoardWithDetailsRequest = require("../dist/GetDepBoardWithDetailsRequest/response");
var GetArrivalBoardRequest = require("../dist/GetArrivalBoardRequest/response");
var GetArrBoardWithDetailsRequest = require("../dist/GetArrBoardWithDetailsRequest/response");
var GetArrDepBoardWithDetailsRequest = require("../dist/GetArrDepBoardWithDetailsRequest/response");
var GetArrivalDepartureBoardRequest = require("../dist/GetArrivalDepartureBoardRequest/response");
var GetNextDeparturesRequest = require("../dist/GetNextDeparturesRequest/response");
var GetNextDeparturesWithDetailsRequest = require("../dist/GetNextDeparturesWithDetailsRequest/response");
var GetFastestDeparturesRequest = require("../dist/GetFastestDeparturesRequest/response");
var GetFastestDeparturesWithDetailsRequest = require("../dist/GetFastestDeparturesWithDetailsRequest/response");
var GetServiceDetailsRequest = require("../dist/GetServiceDetailsRequest/response");
var fetch = function(url, args) {
  return new Promise(function(resolve) {
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
        text: function() {
          return "<xml><malformedxml/>";
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
