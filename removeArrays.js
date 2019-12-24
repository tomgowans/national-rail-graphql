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
    "subsequentCallingPoints"
  ];

  keys.map(key => {
    if (values[key]) {
      _.set(values, key, values[key][0]);
    }
  });

  const { service } = values.trainServices || [];

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
    }
  }

  return values;
};

module.exports = removeArrays;
