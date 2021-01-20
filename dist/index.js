"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lambdaService = exports.service = void 0;
var apollo_server_1 = require("apollo-server");
var apollo_server_lambda_1 = require("apollo-server-lambda");
var typeDefs_1 = __importDefault(require("./typeDefs"));
var resolvers_1 = __importDefault(require("./resolvers"));
exports.service = function (_a) {
    var tokenValue = _a.tokenValue;
    var server = new apollo_server_1.ApolloServer({
        typeDefs: typeDefs_1.default,
        resolvers: resolvers_1.default({ tokenValue: tokenValue }),
    });
    server.listen().then(function (_a) {
        var url = _a.url;
        console.log("\uD83D\uDE82 Server ready at " + url);
    });
};
exports.lambdaService = function (_a) {
    var tokenValue = _a.tokenValue;
    var server = new apollo_server_lambda_1.ApolloServer({
        typeDefs: typeDefs_1.default,
        resolvers: resolvers_1.default({ tokenValue: tokenValue }),
    });
};
