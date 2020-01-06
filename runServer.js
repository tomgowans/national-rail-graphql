const service = require("./dist/index");
const config = require("./config.json");

service({ tokenValue: config.tokenValue });
