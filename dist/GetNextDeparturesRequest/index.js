"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fetchData_1 = __importDefault(require("../fetchData"));
var removeArrays_1 = __importDefault(require("../removeArrays"));
/**
 *
 * @param {string} crs (string, 3 characters, alphabetic): The CRS code (see above) of the location for which the request is being made.
 * @param {string || null} filterCrs (string, 3 characters, alphabetic): The CRS code of either an origin or destination location to filter in. Optional.
 * @param {number || null} timeOffset (integer, between -120 and 120 exclusive): An offset in minutes against the current time to provide the station board for. Defaults to 0. Optional.
 * @param {number || null} timeWindow (integer, between -120 and 120 exclusive): How far into the future in minutes, relative to timeOffset, to return services for. Defaults to 120. Optional.
 */
function GetNextDeparturesRequest(_a, tokenValue) {
    var crs = _a.crs, _b = _a.filterCrs, filterCrs = _b === void 0 ? [] : _b, _c = _a.timeOffset, timeOffset = _c === void 0 ? 0 : _c, _d = _a.timeWindow, timeWindow = _d === void 0 ? 120 : _d;
    return new Promise(function (resolve, reject) {
        fetchData_1.default({
            body: "\n      <ldb:GetNextDeparturesRequest>\n        <ldb:crs>" + crs + "</ldb:crs>\n        " + (filterCrs.length &&
                "<ldb:filterList>\n          " + filterCrs.map(function (filterCrsItem) { return "<ldb:crs>" + filterCrsItem + "</ldb:crs>"; }) + "\n        </ldb:filterList>") + "\n        <ldb:timeOffset>" + timeOffset + "</ldb:timeOffset>\n        <ldb:timeWindow>" + timeWindow + "</ldb:timeWindow>\n      </ldb:GetNextDeparturesRequest>\n      ",
            tokenValue: tokenValue
        })
            .then(function (result) {
            // console.dir(result.GetNextDeparturesResponse[0].DeparturesBoard[0]);
            resolve(removeArrays_1.default(result.GetNextDeparturesResponse[0].DeparturesBoard[0]));
        })
            .catch(function (err) { return reject(err); });
    });
}
exports.default = GetNextDeparturesRequest;
