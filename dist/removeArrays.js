"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __importDefault(require("lodash"));
var isString_1 = __importDefault(require("lodash/isString"));
var set_1 = __importDefault(require("lodash/set"));
var toNumber_1 = __importDefault(require("lodash/toNumber"));
var removeArrays = function (values) {
    var keys = [
        "crs",
        "generatedAt",
        "locationName",
        "filterLocationName",
        "filtercrs",
        "filterType",
        "platformAvailable",
        "areServicesAvailable",
        "rsid",
        "sta",
        "eta",
        "std",
        "etd",
        "at",
        "st",
        "et",
        "ata",
        "atd",
        "platform",
        "operator",
        "operatorCode",
        "isCircularRoute",
        "isCancelled",
        "filterLocationCancelled",
        "serviceType",
        "length",
        "detachFront",
        "isReverseFormation",
        "cancelReason",
        "delayReason",
        "serviceID",
        "trainServices",
        "via",
        "destination",
        "origin",
        "previousCallingPoints",
        "subsequentCallingPoints",
        "departures",
        "nrccMessages"
    ];
    var replaceKeys = function (path, newValue) {
        keys.map(function (key) {
            if (newValue[key]) {
                set_1.default(values, path + "[" + key + "]", newValue[key][0]);
            }
            if (key === "length" && newValue["length"]) {
                if (isString_1.default(newValue.length[0])) {
                    set_1.default(values, path + "[length]", toNumber_1.default(newValue.length));
                }
            }
            if (key === "platform" && newValue["platform"]) {
                if (lodash_1.default.isString(newValue.platform[0])) {
                    lodash_1.default.set(values, path + "[platform]", lodash_1.default.toNumber(newValue.platform));
                }
            }
            if (key === "platformAvailable" && newValue["platformAvailable"]) {
                if (isString_1.default(newValue.platformAvailable[0])) {
                    set_1.default(values, path + "[platformAvailable]", newValue.platformAvailable === "true");
                }
            }
            if (key === "isCancelled" && newValue["isCancelled"]) {
                if (isString_1.default(newValue.isCancelled[0])) {
                    set_1.default(values, path + "[isCancelled]", newValue.isCancelled === "true");
                }
            }
            if (key === "isCircularRoute" && newValue["isCircularRoute"]) {
                if (lodash_1.default.isString(newValue.isCircularRoute[0])) {
                    lodash_1.default.set(values, path + "[isCircularRoute]", newValue.isCircularRoute === "true");
                }
            }
        });
    };
    replaceKeys("", values);
    if (values.departures) {
        set_1.default(values, "departures.destination", values.departures.destination[0]);
        var destinationService = values.departures.destination.service;
        for (var index1 = 0; index1 < destinationService.length; index1++) {
            replaceKeys("departures.destination.service[" + index1 + "]", values.departures.destination.service[index1]);
            // origin
            var departuresOriginLocation = values.departures.destination.service[index1].origin.location || [];
            for (var index2 = 0; index2 < departuresOriginLocation.length; index2++) {
                replaceKeys("departures.destination.service[" + index1 + "].origin.location[" + index2 + "]", values.departures.destination.service[index1].origin.location[index2]);
            }
            // destination
            var departuresDestinationLocation = values.departures.destination.service[index1].destination.location ||
                [];
            for (var index2 = 0; index2 < departuresDestinationLocation.length; index2++) {
                replaceKeys("departures.destination.service[" + index1 + "].destination.location[" + index2 + "]", values.departures.destination.service[index1].destination.location[index2]);
            }
            if (values.departures.destination.service[index1].currentOrigins) {
                // currentOrigins
                var departuresCurrentOriginsLocation = values.departures.destination.service[index1].currentOrigins
                    .location || [];
                for (var index2 = 0; index2 < departuresCurrentOriginsLocation.length; index2++) {
                    replaceKeys("departures.destination.service[" + index1 + "].currentOrigins.location[" + index2 + "]", values.departures.destination.service[index1].currentOrigins
                        .location[index2]);
                }
            }
            // currentDestinations
            if (values.departures.destination.service[index1].currentDestinations) {
                var departuresCurrentDestinationsLocation = values.departures.destination.service[index1].currentDestinations
                    .location || [];
                for (var index2 = 0; index2 < departuresCurrentDestinationsLocation.length; index2++) {
                    replaceKeys("departures.destination.service[" + index1 + "].currentDestinations.location[" + index2 + "]", values.departures.destination.service[index1].currentDestinations
                        .location[index2]);
                }
            }
            // subsequentCallingPoints
            if (values.departures.destination.service[index1].subsequentCallingPoints) {
                set_1.default(values, "departures.destination.service[" + index1 + "].subsequentCallingPoints.callingPointList", values.departures.destination.service[index1].subsequentCallingPoints
                    .callingPointList[0]);
                var callingPoint = values.departures.destination.service[index1].subsequentCallingPoints
                    .callingPointList.callingPoint || [];
                for (var index2 = 0; index2 < callingPoint.length; index2++) {
                    replaceKeys("departures.destination.service[" + index1 + "].subsequentCallingPoints.callingPointList.callingPoint[" + index2 + "]", values.departures.destination.service[index1]
                        .subsequentCallingPoints.callingPointList.callingPoint[index2]);
                }
            }
        }
    }
    // Service Details
    if (values.previousCallingPoints) {
        set_1.default(values, "previousCallingPoints.callingPointList", values.previousCallingPoints.callingPointList[0]);
        var callingPoint = values.previousCallingPoints.callingPointList.callingPoint || [];
        for (var index2 = 0; index2 < callingPoint.length; index2++) {
            replaceKeys("previousCallingPoints.callingPointList.callingPoint[" + index2 + "]", values.previousCallingPoints.callingPointList.callingPoint[index2]);
        }
    }
    if (values.subsequentCallingPoints) {
        set_1.default(values, "subsequentCallingPoints.callingPointList", values.subsequentCallingPoints.callingPointList[0]);
        var callingPoint = values.subsequentCallingPoints.callingPointList.callingPoint || [];
        for (var index2 = 0; index2 < callingPoint.length; index2++) {
            replaceKeys("subsequentCallingPoints.callingPointList.callingPoint[" + index2 + "]", values.subsequentCallingPoints.callingPointList.callingPoint[index2]);
        }
    }
    if (values.trainServices) {
        var service = values.trainServices.service || [];
        for (var index1 = 0; index1 < service.length; index1++) {
            replaceKeys("trainServices.service[" + index1 + "]", values.trainServices.service[index1]);
            if (values.trainServices.service[index1].previousCallingPoints) {
                set_1.default(values, "trainServices.service[" + index1 + "].previousCallingPoints.callingPointList", values.trainServices.service[index1].previousCallingPoints
                    .callingPointList[0]);
            }
            if (values.trainServices.service[index1].subsequentCallingPoints) {
                set_1.default(values, "trainServices.service[" + index1 + "].subsequentCallingPoints.callingPointList", values.trainServices.service[index1].subsequentCallingPoints
                    .callingPointList[0]);
            }
            var destinationLocation = service[index1].destination.location || [];
            for (var index2 = 0; index2 < destinationLocation.length; index2++) {
                replaceKeys("trainServices.service[" + index1 + "].destination.location[" + index2 + "]", values.trainServices.service[index1].destination.location[index2]);
            }
            var originLocation = service[index1].origin.location || [];
            for (var index2 = 0; index2 < originLocation.length; index2++) {
                replaceKeys("trainServices.service[" + index1 + "].origin.location[" + index2 + "]", values.trainServices.service[index1].origin.location[index2]);
            }
            if (service[index1].previousCallingPoints) {
                var callingPoint = (service[index1].previousCallingPoints.callingPointList || []).callingPoint;
                for (var index2 = 0; index2 < callingPoint.length; index2++) {
                    replaceKeys("trainServices.service[" + index1 + "].previousCallingPoints.callingPointList.callingPoint[" + index2 + "]", values.trainServices.service[index1].previousCallingPoints
                        .callingPointList.callingPoint[index2]);
                }
            }
            if (service[index1].subsequentCallingPoints) {
                var callingPoint = (service[index1].subsequentCallingPoints.callingPointList || []).callingPoint;
                for (var index2 = 0; index2 < callingPoint.length; index2++) {
                    replaceKeys("trainServices.service[" + index1 + "].subsequentCallingPoints.callingPointList.callingPoint[" + index2 + "]", values.trainServices.service[index1].subsequentCallingPoints
                        .callingPointList.callingPoint[index2]);
                }
            }
        }
    }
    return values;
};
exports.default = removeArrays;
