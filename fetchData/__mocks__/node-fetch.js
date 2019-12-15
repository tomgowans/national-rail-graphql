const response = require("../response");

const GetDepartureBoardRequest = require("../../GetDepartureBoardRequest/response");
const GetDepBoardWithDetailsRequest = require("../../GetDepBoardWithDetailsRequest/response");
const GetArrivalBoardRequest = require("../../GetArrivalBoardRequest/response");
const GetArrBoardWithDetailsRequest = require("../../GetArrBoardWithDetailsRequest/response");

const fetch = (url, args) => {
  return new Promise((resolve, reject) => {
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

    resolve(response);
  });
};

module.exports = fetch;
