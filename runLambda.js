const service = require("./lambda");
const config = require("./config.json");

service({ tokenValue: config.tokenValue });
