"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../fetchData/index"));
var removeArrays_1 = __importDefault(require("../removeArrays"));
/**
 *
 * @param {string} serviceID (string): The LDBWS service ID of the service to request the details of. The service ID is obtained from a service listed in a StationBoard object returned from any other request.
 */
function GetServiceDetailsRequest(_a, tokenValue) {
    var serviceID = _a.serviceID;
    return new Promise(function (resolve, reject) {
        index_1.default({
            body: "\n      <ldb:GetServiceDetailsRequest>\n        " + (serviceID && "<ldb:serviceID>" + serviceID + "</ldb:serviceID>") + "\n      </ldb:GetServiceDetailsRequest>\n      ",
            tokenValue: tokenValue,
        })
            .then(function (result) {
            // console.dir(result);
            resolve(removeArrays_1.default(result.GetServiceDetailsResponse[0].GetServiceDetailsResult[0]));
        })
            .catch(function (err) { return reject(err); });
    });
}
exports.default = GetServiceDetailsRequest;
