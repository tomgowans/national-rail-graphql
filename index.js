const GetDepartureBoardResponse = require("./getDepartureBoardResponse");
const config = require("./config.json");

GetDepartureBoardResponse(
  {
    crs: "ECR"
  },
  config.tokenValue
).then(result => console.dir(result));
