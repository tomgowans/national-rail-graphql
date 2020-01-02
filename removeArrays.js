const _ = require("lodash");

const removeArrays = values => {
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

  keys.map(key => {
    if (values[key]) {
      _.set(values, key, values[key][0]);
    }
  });

  const { service } = values.trainServices || [];

  if (values.departures) {
    _.set(values, "departures.destination", values.departures.destination[0]);

    const destinationService = values.departures.destination.service;

    for (let index1 = 0; index1 < destinationService.length; index1++) {
      keys.map(key => {
        if (values.departures.destination.service[index1][key]) {
          _.set(
            values,
            `departures.destination.service[${index1}][${key}]`,
            values.departures.destination.service[index1][key][0]
          );
        }
      });

      // origin
      const departuresOriginLocation =
        values.departures.destination.service[index1].origin.location || [];

      for (let index2 = 0; index2 < departuresOriginLocation.length; index2++) {
        keys.map(key => {
          if (
            values.departures.destination.service[index1].origin.location[
              index2
            ][key]
          ) {
            _.set(
              values,
              `departures.destination.service[${index1}].origin.location[${index2}][${key}]`,
              values.departures.destination.service[index1].origin.location[
                index2
              ][key][0]
            );
          }
        });
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
        keys.map(key => {
          if (
            values.departures.destination.service[index1].destination.location[
              index2
            ][key]
          ) {
            _.set(
              values,
              `departures.destination.service[${index1}].destination.location[${index2}][${key}]`,
              values.departures.destination.service[index1].destination
                .location[index2][key][0]
            );
          }
        });
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
          keys.map(key => {
            if (
              values.departures.destination.service[index1].currentOrigins
                .location[index2][key]
            ) {
              _.set(
                values,
                `departures.destination.service[${index1}].currentOrigins.location[${index2}][${key}]`,
                values.departures.destination.service[index1].currentOrigins
                  .location[index2][key][0]
              );
            }
          });
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
          keys.map(key => {
            if (
              values.departures.destination.service[index1].currentDestinations
                .location[index2][key]
            ) {
              _.set(
                values,
                `departures.destination.service[${index1}].currentDestinations.location[${index2}][${key}]`,
                values.departures.destination.service[index1]
                  .currentDestinations.location[index2][key][0]
              );
            }
          });
        }
      }

      // "subsequentCallingPoints": Object {
      //   "callingPointList": Array [
      //     Object {
      //       "callingPoint": Array [
      //         Object {

      if (
        values.departures.destination.service[index1].subsequentCallingPoints
      ) {
        _.set(
          values,
          `departures.destination.service[${index1}].subsequentCallingPoints.callingPointList`,
          values.departures.destination.service[index1].subsequentCallingPoints
            .callingPointList[0]
        );

        const callingPoint =
          values.departures.destination.service[index1].subsequentCallingPoints
            .callingPointList.callingPoint || [];

        for (let index2 = 0; index2 < callingPoint.length; index2++) {
          keys.map(key => {
            if (
              values.departures.destination.service[index1]
                .subsequentCallingPoints.callingPointList.callingPoint[index2][
                key
              ]
            ) {
              _.set(
                values,
                `departures.destination.service[${index1}].subsequentCallingPoints.callingPointList.callingPoint[${index2}][${key}]`,
                values.departures.destination.service[index1]
                  .subsequentCallingPoints.callingPointList.callingPoint[
                  index2
                ][key][0]
              );
            }
          });
        }
      }
    }
  }

  if (_.isArray(service)) {
    for (let index1 = 0; index1 < service.length; index1++) {
      keys.map(key => {
        if (values.trainServices.service[index1][key]) {
          _.set(
            values,
            `trainServices.service[${index1}][${key}]`,
            values.trainServices.service[index1][key][0]
          );
        }
      });

      if (values.trainServices.service[index1].previousCallingPoints) {
        _.set(
          values,
          `trainServices.service[${index1}].previousCallingPoints.callingPointList`,
          values.trainServices.service[index1].previousCallingPoints
            .callingPointList[0]
        );
      }

      if (values.trainServices.service[index1].subsequentCallingPoints) {
        _.set(
          values,
          `trainServices.service[${index1}].subsequentCallingPoints.callingPointList`,
          values.trainServices.service[index1].subsequentCallingPoints
            .callingPointList[0]
        );
      }

      const destinationLocation = service[index1].destination.location || [];

      for (let index2 = 0; index2 < destinationLocation.length; index2++) {
        keys.map(key => {
          if (
            values.trainServices.service[index1].destination.location[index2][
              key
            ]
          ) {
            _.set(
              values,
              `trainServices.service[${index1}].destination.location[${index2}][${key}]`,
              values.trainServices.service[index1].destination.location[index2][
                key
              ][0]
            );
          }
        });
      }

      const originLocation = service[index1].origin.location || [];

      for (let index2 = 0; index2 < originLocation.length; index2++) {
        keys.map(key => {
          if (
            values.trainServices.service[index1].origin.location[index2][key]
          ) {
            _.set(
              values,
              `trainServices.service[${index1}].origin.location[${index2}][${key}]`,
              values.trainServices.service[index1].origin.location[index2][
                key
              ][0]
            );
          }
        });
      }

      if (service[index1].previousCallingPoints) {
        const { callingPoint } =
          service[index1].previousCallingPoints.callingPointList || [];

        for (let index2 = 0; index2 < callingPoint.length; index2++) {
          keys.map(key => {
            if (
              values.trainServices.service[index1].previousCallingPoints
                .callingPointList.callingPoint[index2][key]
            ) {
              _.set(
                values,
                `trainServices.service[${index1}].previousCallingPoints.callingPointList.callingPoint[${index2}][${key}]`,
                values.trainServices.service[index1].previousCallingPoints
                  .callingPointList.callingPoint[index2][key][0]
              );
            }
          });
        }
      }

      if (service[index1].subsequentCallingPoints) {
        const { callingPoint } =
          service[index1].subsequentCallingPoints.callingPointList || [];

        for (let index2 = 0; index2 < callingPoint.length; index2++) {
          keys.map(key => {
            if (
              values.trainServices.service[index1].subsequentCallingPoints
                .callingPointList.callingPoint[index2][key]
            ) {
              _.set(
                values,
                `trainServices.service[${index1}].subsequentCallingPoints.callingPointList.callingPoint[${index2}][${key}]`,
                values.trainServices.service[index1].subsequentCallingPoints
                  .callingPointList.callingPoint[index2][key][0]
              );
            }
          });
        }
      }
    }
  }

  // Service Details
  if (values.previousCallingPoints) {
    _.set(
      values,
      `previousCallingPoints.callingPointList`,
      values.previousCallingPoints.callingPointList[0]
    );

    const callingPoint =
      values.previousCallingPoints.callingPointList.callingPoint || [];

    for (let index2 = 0; index2 < callingPoint.length; index2++) {
      keys.map(key => {
        if (
          values.previousCallingPoints.callingPointList.callingPoint[index2][
            key
          ]
        ) {
          _.set(
            values,
            `previousCallingPoints.callingPointList.callingPoint[${index2}][${key}]`,
            values.previousCallingPoints.callingPointList.callingPoint[index2][
              key
            ][0]
          );
        }
      });
    }
  }

  if (values.subsequentCallingPoints) {
    _.set(
      values,
      `subsequentCallingPoints.callingPointList`,
      values.subsequentCallingPoints.callingPointList[0]
    );

    const callingPoint =
      values.subsequentCallingPoints.callingPointList.callingPoint || [];

    for (let index2 = 0; index2 < callingPoint.length; index2++) {
      keys.map(key => {
        if (
          values.subsequentCallingPoints.callingPointList.callingPoint[index2][
            key
          ]
        ) {
          _.set(
            values,
            `subsequentCallingPoints.callingPointList.callingPoint[${index2}][${key}]`,
            values.subsequentCallingPoints.callingPointList.callingPoint[
              index2
            ][key][0]
          );
        }
      });
    }
  }

  return values;
};

module.exports = removeArrays;
