"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var parseString = require('xml2js').parseString;
var node_fetch_1 = __importDefault(require("node-fetch"));
var fetchData = function (_a) {
    var body = _a.body, tokenValue = _a.tokenValue;
    return new Promise(function (resolve, reject) {
        if (!body || !tokenValue) {
            reject(new Error('Error with credentials'));
        }
        else {
            node_fetch_1.default('https://lite.realtime.nationalrail.co.uk/OpenLDBWS/ldb11.asmx', {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/xml',
                },
                body: "<soap:Envelope xmlns:soap=\"http://www.w3.org/2003/05/soap-envelope\" xmlns:typ=\"http://thalesgroup.com/RTTI/2013-11-28/Token/types\" xmlns:ldb=\"http://thalesgroup.com/RTTI/2017-10-01/ldb/\">\n                  <soap:Header>\n                    <typ:AccessToken>\n                      <typ:TokenValue>" + tokenValue + "</typ:TokenValue>\n                    </typ:AccessToken>\n                  </soap:Header>\n                  <soap:Body>\n                    " + body + "\n                  </soap:Body>\n                </soap:Envelope>",
            })
                .then(function (response) { return response.text(); })
                .then(function (response) { return response.replace(/(<\/?)(\w*:)/gm, '$1'); })
                .then(function (response) {
                parseString(response, function (error, result) {
                    if (error) {
                        return reject(error);
                    }
                    else {
                        return resolve(result.Envelope.Body[0]);
                    }
                });
            })
                .catch(function (err) {
                // console.error("Error returned from fetch", err);
                return reject(err);
            });
        }
    });
};
exports.default = fetchData;
