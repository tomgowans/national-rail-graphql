"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fetchData_1 = __importDefault(require("../fetchData"));
var removeArrays_1 = __importDefault(require("../removeArrays"));
function GetArrBoardWithDetailsRequest(_a, tokenValue) {
    var _b = _a.numRows, numRows = _b === void 0 ? null : _b, crs = _a.crs, _c = _a.filterCrs, filterCrs = _c === void 0 ? null : _c, _d = _a.filterType, filterType = _d === void 0 ? 'to' : _d, _e = _a.timeOffset, timeOffset = _e === void 0 ? 0 : _e, _f = _a.timeWindow, timeWindow = _f === void 0 ? 120 : _f;
    return new Promise(function (resolve, reject) {
        fetchData_1.default({
            body: "\n      <ldb:GetArrBoardWithDetailsRequest>\n        " + (numRows && "<ldb:numRows>" + numRows + "</ldb:numRows>") + "\n        <ldb:crs>" + crs + "</ldb:crs>\n        " + (filterCrs && "<ldb:filterCrs>" + filterCrs + "</ldb:filterCrs>") + "\n        <ldb:filterType>" + filterType + "</ldb:filterType>\n        <ldb:timeOffset>" + timeOffset + "</ldb:timeOffset>\n        <ldb:timeWindow>" + timeWindow + "</ldb:timeWindow>\n      </ldb:GetArrBoardWithDetailsRequest>\n      ",
            tokenValue: tokenValue,
        })
            .then(function (result) {
            // console.dir(result);
            resolve(removeArrays_1.default(result.GetArrBoardWithDetailsResponse[0].GetStationBoardResult[0]));
        })
            .catch(function (err) { return reject(err); });
    });
}
exports.default = GetArrBoardWithDetailsRequest;
