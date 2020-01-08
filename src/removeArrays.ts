import _ from "lodash";

import _isArray from "lodash/isArray";
import _isString from "lodash/isString";
import _set from "lodash/set";
import _toNumber from "lodash/toNumber";

import { Result } from "./types";

const removeArrays = (values: Result) => {
  const keys = [
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

  const replaceKeys = (path: string, newValue: Result) => {
    keys.map(key => {
      if (newValue[key]) {
        _set(values, `${path}[${key}]`, newValue[key][0]);
      }

      if (key === "length" && newValue["length"]) {
        if (_isString(newValue.length[0])) {
          _set(values, `${path}[length]`, _toNumber(newValue.length));
        }
      }

      if (key === "platformAvailable" && newValue["platformAvailable"]) {
        if (_isString(newValue.platformAvailable[0])) {
          _set(
            values,
            `${path}[platformAvailable]`,
            newValue.platformAvailable === "true"
          );
        }
      }

      if (key === "isCancelled" && newValue["isCancelled"]) {
        if (_isString(newValue.isCancelled[0])) {
          _set(values, `${path}[isCancelled]`, newValue.isCancelled === "true");
        }
      }
    });
  };

  replaceKeys(``, values);

  const service = values.trainServices.service || [];

  if (values.departures) {
    _set(values, "departures.destination", values.departures.destination[0]);

    const destinationService = values.departures.destination.service;

    for (let index1 = 0; index1 < destinationService.length; index1++) {
      replaceKeys(
        `departures.destination.service[${index1}]`,
        values.departures.destination.service[index1]
      );

      // origin
      const departuresOriginLocation =
        values.departures.destination.service[index1].origin.location || [];

      for (let index2 = 0; index2 < departuresOriginLocation.length; index2++) {
        replaceKeys(
          `departures.destination.service[${index1}].origin.location[${index2}]`,
          values.departures.destination.service[index1].origin.location[index2]
        );
      }

      // destination
      const departuresDestinationLocation =
        values.departures.destination.service[index1].destination.location ||
        [];

      for (
        let index2 = 0;
        index2 < departuresDestinationLocation.length;
        index2++
      ) {
        replaceKeys(
          `departures.destination.service[${index1}].destination.location[${index2}]`,
          values.departures.destination.service[index1].destination.location[
            index2
          ]
        );
      }

      if (values.departures.destination.service[index1].currentOrigins) {
        // currentOrigins
        const departuresCurrentOriginsLocation =
          values.departures.destination.service[index1].currentOrigins
            .location || [];

        for (
          let index2 = 0;
          index2 < departuresCurrentOriginsLocation.length;
          index2++
        ) {
          replaceKeys(
            `departures.destination.service[${index1}].currentOrigins.location[${index2}]`,
            values.departures.destination.service[index1].currentOrigins
              .location[index2]
          );
        }
      }

      // currentDestinations
      if (values.departures.destination.service[index1].currentDestinations) {
        const departuresCurrentDestinationsLocation =
          values.departures.destination.service[index1].currentDestinations
            .location || [];

        for (
          let index2 = 0;
          index2 < departuresCurrentDestinationsLocation.length;
          index2++
        ) {
          replaceKeys(
            `departures.destination.service[${index1}].currentDestinations.location[${index2}]`,
            values.departures.destination.service[index1].currentDestinations
              .location[index2]
          );
        }
      }

      // subsequentCallingPoints
      if (
        values.departures.destination.service[index1].subsequentCallingPoints
      ) {
        _set(
          values,
          `departures.destination.service[${index1}].subsequentCallingPoints.callingPointList`,
          values.departures.destination.service[index1].subsequentCallingPoints
            .callingPointList[0]
        );

        const callingPoint =
          values.departures.destination.service[index1].subsequentCallingPoints
            .callingPointList.callingPoint || [];

        for (let index2 = 0; index2 < callingPoint.length; index2++) {
          replaceKeys(
            `departures.destination.service[${index1}].subsequentCallingPoints.callingPointList.callingPoint[${index2}]`,
            values.departures.destination.service[index1]
              .subsequentCallingPoints.callingPointList.callingPoint[index2]
          );
        }
      }
    }
  }

  // Service Details
  if (values.previousCallingPoints) {
    _set(
      values,
      `previousCallingPoints.callingPointList`,
      values.previousCallingPoints.callingPointList[0]
    );

    const callingPoint =
      values.previousCallingPoints.callingPointList.callingPoint || [];

    for (let index2 = 0; index2 < callingPoint.length; index2++) {
      replaceKeys(
        `previousCallingPoints.callingPointList.callingPoint[${index2}]`,
        values.previousCallingPoints.callingPointList.callingPoint[index2]
      );
    }
  }

  if (values.subsequentCallingPoints) {
    _set(
      values,
      `subsequentCallingPoints.callingPointList`,
      values.subsequentCallingPoints.callingPointList[0]
    );

    const callingPoint =
      values.subsequentCallingPoints.callingPointList.callingPoint || [];

    for (let index2 = 0; index2 < callingPoint.length; index2++) {
      replaceKeys(
        `subsequentCallingPoints.callingPointList.callingPoint[${index2}]`,
        values.subsequentCallingPoints.callingPointList.callingPoint[index2]
      );
    }
  }

  if (_isArray(service)) {
    for (let index1 = 0; index1 < service.length; index1++) {
      replaceKeys(
        `trainServices.service[${index1}]`,
        values.trainServices.service[index1]
      );

      if (values.trainServices.service[index1].previousCallingPoints) {
        _set(
          values,
          `trainServices.service[${index1}].previousCallingPoints.callingPointList`,
          values.trainServices.service[index1].previousCallingPoints
            .callingPointList[0]
        );
      }

      if (values.trainServices.service[index1].subsequentCallingPoints) {
        _set(
          values,
          `trainServices.service[${index1}].subsequentCallingPoints.callingPointList`,
          values.trainServices.service[index1].subsequentCallingPoints
            .callingPointList[0]
        );
      }

      const destinationLocation = service[index1].destination.location || [];

      for (let index2 = 0; index2 < destinationLocation.length; index2++) {
        replaceKeys(
          `trainServices.service[${index1}].destination.location[${index2}]`,
          values.trainServices.service[index1].destination.location[index2]
        );
      }

      const originLocation = service[index1].origin.location || [];

      for (let index2 = 0; index2 < originLocation.length; index2++) {
        replaceKeys(
          `trainServices.service[${index1}].origin.location[${index2}]`,
          values.trainServices.service[index1].origin.location[index2]
        );
      }

      if (service[index1].previousCallingPoints) {
        const { callingPoint } =
          service[index1].previousCallingPoints.callingPointList || [];

        for (let index2 = 0; index2 < callingPoint.length; index2++) {
          replaceKeys(
            `trainServices.service[${index1}].previousCallingPoints.callingPointList.callingPoint[${index2}]`,
            values.trainServices.service[index1].previousCallingPoints
              .callingPointList.callingPoint[index2]
          );
        }
      }

      if (service[index1].subsequentCallingPoints) {
        const { callingPoint } =
          service[index1].subsequentCallingPoints.callingPointList || [];

        for (let index2 = 0; index2 < callingPoint.length; index2++) {
          replaceKeys(
            `trainServices.service[${index1}].subsequentCallingPoints.callingPointList.callingPoint[${index2}]`,
            values.trainServices.service[index1].subsequentCallingPoints
              .callingPointList.callingPoint[index2]
          );
        }
      }
    }
  }

  return values;
};

export default removeArrays;
