const service = require("./src");
const config = require("./config.json");

service({ tokenValue: config.tokenValue });
