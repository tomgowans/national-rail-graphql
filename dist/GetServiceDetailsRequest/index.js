"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fetchData_1 = __importDefault(require("../fetchData"));
var removeArrays_1 = __importDefault(require("../removeArrays"));
function GetServiceDetailsRequest(_a, tokenValue) {
    var serviceID = _a.serviceID;
    return new Promise(function (resolve, reject) {
        fetchData_1.default({
            body: "\n      <ldb:GetServiceDetailsRequest>\n        " + (serviceID && "<ldb:serviceID>" + serviceID + "</ldb:serviceID>") + "\n      </ldb:GetServiceDetailsRequest>\n      ",
            tokenValue: tokenValue
        })
            .then(function (result) {
            // console.dir(result);
            resolve(removeArrays_1.default(result.GetServiceDetailsResponse[0].GetServiceDetailsResult[0]));
        })
            .catch(function (err) { return reject(err); });
    });
}
exports.default = GetServiceDetailsRequest;
