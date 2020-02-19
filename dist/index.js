"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var typeDefs_1 = __importDefault(require("./typeDefs"));
var resolvers_1 = __importDefault(require("./resolvers"));
var service = function (_a) {
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
module.exports = service;
