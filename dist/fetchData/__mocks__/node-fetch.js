var response = require("../response");
var GetDepartureBoardRequest = require("../../GetDepartureBoardRequest/response");
var GetDepBoardWithDetailsRequest = require("../../GetDepBoardWithDetailsRequest/response");
var GetArrivalBoardRequest = require("../../GetArrivalBoardRequest/response");
var GetArrBoardWithDetailsRequest = require("../../GetArrBoardWithDetailsRequest/response");
var GetArrDepBoardWithDetailsRequest = require("../../GetArrDepBoardWithDetailsRequest/response");
var GetArrivalDepartureBoardRequest = require("../../GetArrivalDepartureBoardRequest/response");
var GetNextDeparturesRequest = require("../../GetNextDeparturesRequest/response");
var GetNextDeparturesWithDetailsRequest = require("../../GetNextDeparturesWithDetailsRequest/response");
var GetFastestDeparturesRequest = require("../../GetFastestDeparturesRequest/response");
var GetFastestDeparturesWithDetailsRequest = require("../../GetFastestDeparturesWithDetailsRequest/response");
var GetServiceDetailsRequest = require("../../GetServiceDetailsRequest/response");
var fetch = function (url, args) {
    return new Promise(function (resolve) {
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
                text: function () {
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
