const response = require("../response");

const GetDepartureBoardRequest = require("../../GetDepartureBoardRequest/response");
const GetDepBoardWithDetailsRequest = require("../../GetDepBoardWithDetailsRequest/response");

const fetch = (url, args) => {
  return new Promise((resolve, reject) => {
    if (args.body.includes("GetDepartureBoardRequest")) {
      resolve(GetDepartureBoardRequest);
    }

    if (args.body.includes("GetDepBoardWithDetailsRequest")) {
      resolve(GetDepBoardWithDetailsRequest);
    }

    resolve(response);
  });
};

module.exports = fetch;
