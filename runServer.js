const service = require("./index");
const config = require("./config.json");

service({ tokenValue: config.tokenValue });
