"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var GetDepartureBoardRequest_1 = __importDefault(require("./GetDepartureBoardRequest"));
var GetDepBoardWithDetailsRequest_1 = __importDefault(require("./GetDepBoardWithDetailsRequest"));
var GetArrivalBoardRequest_1 = __importDefault(require("./GetArrivalBoardRequest"));
var GetArrBoardWithDetailsRequest_1 = __importDefault(require("./GetArrBoardWithDetailsRequest"));
var GetArrivalDepartureBoardRequest_1 = __importDefault(require("./GetArrivalDepartureBoardRequest"));
var GetArrDepBoardWithDetailsRequest_1 = __importDefault(require("./GetArrDepBoardWithDetailsRequest"));
var GetNextDeparturesRequest_1 = __importDefault(require("./GetNextDeparturesRequest"));
var GetNextDeparturesWithDetailsRequest_1 = __importDefault(require("./GetNextDeparturesWithDetailsRequest"));
var GetFastestDeparturesRequest_1 = __importDefault(require("./GetFastestDeparturesRequest"));
var GetFastestDeparturesWithDetailsRequest_1 = __importDefault(require("./GetFastestDeparturesWithDetailsRequest"));
var GetServiceDetailsRequest_1 = __importDefault(require("./GetServiceDetailsRequest"));
var resolvers = function (_a) {
    var tokenValue = _a.tokenValue;
    return {
        Query: {
            GetDepartureBoard: function (obj, queryAttributes) {
                return GetDepartureBoardRequest_1.default(queryAttributes, tokenValue);
            },
            GetDepBoardWithDetails: function (obj, queryAttributes) {
                return GetDepBoardWithDetailsRequest_1.default(queryAttributes, tokenValue);
            },
            GetArrivalBoard: function (obj, queryAttributes) {
                return GetArrivalBoardRequest_1.default(queryAttributes, tokenValue);
            },
            GetArrBoardWithDetails: function (obj, queryAttributes) {
                return GetArrBoardWithDetailsRequest_1.default(queryAttributes, tokenValue);
            },
            GetArrivalDepartureBoard: function (obj, queryAttributes) {
                return GetArrivalDepartureBoardRequest_1.default(queryAttributes, tokenValue);
            },
            GetArrDepBoardWithDetails: function (obj, queryAttributes) {
                return GetArrDepBoardWithDetailsRequest_1.default(queryAttributes, tokenValue);
            },
            GetNextDepartures: function (obj, queryAttributes) {
                return GetNextDeparturesRequest_1.default(queryAttributes, tokenValue);
            },
            GetNextDeparturesWithDetails: function (obj, queryAttributes) {
                return GetNextDeparturesWithDetailsRequest_1.default(queryAttributes, tokenValue);
            },
            GetFastestDepartures: function (obj, queryAttributes) {
                return GetFastestDeparturesRequest_1.default(queryAttributes, tokenValue);
            },
            GetFastestDeparturesWithDetails: function (obj, queryAttributes) {
                return GetFastestDeparturesWithDetailsRequest_1.default(queryAttributes, tokenValue);
            },
            GetServiceDetails: function (obj, queryAttributes) {
                return GetServiceDetailsRequest_1.default(queryAttributes, tokenValue);
            }
        }
    };
};
exports.default = resolvers;
