/* eslint-disable @typescript-eslint/no-var-requires */
const service = require('./dist');
const config = require('./config.json');

service({ tokenValue: config.tokenValue });
