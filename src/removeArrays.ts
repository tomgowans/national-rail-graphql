import _ from 'lodash';

import _isString from 'lodash/isString';
import _set from 'lodash/set';
import _toNumber from 'lodash/toNumber';

import { Result } from './types';

const removeArrays = (values: Result): Result => {
  const keys = [
    'crs',
    'generatedAt',
    'locationName',
    'filterLocationName',
    'filtercrs',
    'filterType',
    'platformAvailable',
    'areServicesAvailable',
    'rsid',
    'sta',
    'eta',
    'std',
    'etd',
    'at',
    'st',
    'et',
    'ata',
    'atd',
    'platform',
    'operator',
    'operatorCode',
    'isCircularRoute',
    'isCancelled',
    'filterLocationCancelled',
    'serviceType',
    'length',
    'detachFront',
    'isReverseFormation',
    'cancelReason',
    'delayReason',
    'serviceID',
    'trainServices',
    'via',
    'destination',
    'origin',
    'previousCallingPoints',
    'subsequentCallingPoints',
    'departures',
    'nrccMessages',
  ];

  const replaceKeys = (path: string, newValue: any): void => {
    keys.map(key => {
      if (newValue[key]) {
        _set(values, `${path}[${key}]`, newValue[key][0]);
      }

      if (key === 'length' && newValue['length']) {
        if (_isString(newValue.length[0])) {
          _set(values, `${path}[length]`, _toNumber(newValue.length));
        }
      }

      if (key === 'platform' && newValue['platform']) {
        if (_.isString(newValue.platform[0])) {
          _.set(values, `${path}[platform]`, _.toNumber(newValue.platform));
        }
      }

      if (key === 'platformAvailable' && newValue['platformAvailable']) {
        if (_isString(newValue.platformAvailable[0])) {
          _set(values, `${path}[platformAvailable]`, newValue.platformAvailable === 'true');
        }
      }

      if (key === 'isCancelled' && newValue['isCancelled']) {
        if (_isString(newValue.isCancelled[0])) {
          _set(values, `${path}[isCancelled]`, newValue.isCancelled === 'true');
        }
      }

      if (key === 'isCircularRoute' && newValue['isCircularRoute']) {
        if (_.isString(newValue.isCircularRoute[0])) {
          _.set(values, `${path}[isCircularRoute]`, newValue.isCircularRoute === 'true');
        }
      }
    });
  };

  replaceKeys(``, values);

  if (values.departures) {
    _set(values, 'departures.destination', values.departures.destination[0]);

    const destinationService = values.departures.destination.service;

    for (let index1 = 0; index1 < destinationService.length; index1++) {
      replaceKeys(`departures.destination.service[${index1}]`, values.departures.destination.service[index1]);

      // origin
      const departuresOriginLocation = values.departures.destination.service[index1].origin.location || [];

      for (let index2 = 0; index2 < departuresOriginLocation.length; index2++) {
        replaceKeys(
          `departures.destination.service[${index1}].origin.location[${index2}]`,
          values.departures.destination.service[index1].origin.location[index2],
        );
      }

      // destination
      const departuresDestinationLocation = values.departures.destination.service[index1].destination.location || [];

      for (let index2 = 0; index2 < departuresDestinationLocation.length; index2++) {
        replaceKeys(
          `departures.destination.service[${index1}].destination.location[${index2}]`,
          values.departures.destination.service[index1].destination.location[index2],
        );
      }

      if (values.departures.destination.service[index1].currentOrigins) {
        // currentOrigins
        const departuresCurrentOriginsLocation =
          values.departures.destination.service[index1].currentOrigins.location || [];

        for (let index2 = 0; index2 < departuresCurrentOriginsLocation.length; index2++) {
          replaceKeys(
            `departures.destination.service[${index1}].currentOrigins.location[${index2}]`,
            values.departures.destination.service[index1].currentOrigins.location[index2],
          );
        }
      }

      // currentDestinations
      if (values.departures.destination.service[index1].currentDestinations) {
        const departuresCurrentDestinationsLocation =
          values.departures.destination.service[index1].currentDestinations.location || [];

        for (let index2 = 0; index2 < departuresCurrentDestinationsLocation.length; index2++) {
          replaceKeys(
            `departures.destination.service[${index1}].currentDestinations.location[${index2}]`,
            values.departures.destination.service[index1].currentDestinations.location[index2],
          );
        }
      }

      // subsequentCallingPoints
      if (values.departures.destination.service[index1].subsequentCallingPoints) {
        for (
          let index3 = 0;
          index3 < values.departures.destination.service[index1].subsequentCallingPoints.callingPointList.length;
          index3++
        ) {
          const callingPoint =
            values.departures.destination.service[index1].subsequentCallingPoints.callingPointList[index3]
              .callingPoint || [];

          for (let index2 = 0; index2 < callingPoint.length; index2++) {
            replaceKeys(
              `departures.destination.service[${index1}].subsequentCallingPoints.callingPointList[${index3}].callingPoint[${index2}]`,
              values.departures.destination.service[index1].subsequentCallingPoints.callingPointList[index3]
                .callingPoint[index2],
            );
          }
        }
      }
    }
  }

  // Service Details
  if (values.previousCallingPoints) {
    for (let index3 = 0; index3 < values.previousCallingPoints.callingPointList.length; index3++) {
      const callingPoint = values.previousCallingPoints.callingPointList[index3].callingPoint || [];

      for (let index2 = 0; index2 < callingPoint.length; index2++) {
        replaceKeys(
          `previousCallingPoints.callingPointList[${index3}].callingPoint[${index2}]`,
          values.previousCallingPoints.callingPointList[index3].callingPoint[index2],
        );
      }
    }
  }

  if (values.subsequentCallingPoints) {
    for (let index3 = 0; index3 < values.subsequentCallingPoints.callingPointList.length; index3++) {
      const callingPoint = values.subsequentCallingPoints.callingPointList[index3].callingPoint || [];

      for (let index2 = 0; index2 < callingPoint.length; index2++) {
        replaceKeys(
          `subsequentCallingPoints.callingPointList[${index3}].callingPoint[${index2}]`,
          values.subsequentCallingPoints.callingPointList[index3].callingPoint[index2],
        );
      }
    }
  }

  if (values.trainServices) {
    const service = values.trainServices.service || [];

    for (let index1 = 0; index1 < service.length; index1++) {
      replaceKeys(`trainServices.service[${index1}]`, values.trainServices.service[index1]);

      const destinationLocation = service[index1].destination.location || [];

      for (let index2 = 0; index2 < destinationLocation.length; index2++) {
        replaceKeys(
          `trainServices.service[${index1}].destination.location[${index2}]`,
          values.trainServices.service[index1].destination.location[index2],
        );
      }

      const originLocation = service[index1].origin.location || [];

      for (let index2 = 0; index2 < originLocation.length; index2++) {
        replaceKeys(
          `trainServices.service[${index1}].origin.location[${index2}]`,
          values.trainServices.service[index1].origin.location[index2],
        );
      }

      if (service[index1].previousCallingPoints) {
        for (let index3 = 0; index3 < service[index1].previousCallingPoints.callingPointList.length; index3++) {
          const { callingPoint } = service[index1].previousCallingPoints.callingPointList[index3] || [];

          for (let index2 = 0; index2 < callingPoint.length; index2++) {
            replaceKeys(
              `trainServices.service[${index1}].previousCallingPoints.callingPointList[${index3}].callingPoint[${index2}]`,
              values.trainServices.service[index1].previousCallingPoints.callingPointList[index3].callingPoint[index2],
            );
          }
        }
      }

      if (service[index1].subsequentCallingPoints) {
        for (let index3 = 0; index3 < service[index1].subsequentCallingPoints.callingPointList.length; index3++) {
          const { callingPoint } = service[index1].subsequentCallingPoints.callingPointList[index3] || [];

          for (let index2 = 0; index2 < callingPoint.length; index2++) {
            replaceKeys(
              `trainServices.service[${index1}].subsequentCallingPoints.callingPointList[${index3}].callingPoint[${index2}]`,
              values.trainServices.service[index1].subsequentCallingPoints.callingPointList[index3].callingPoint[
                index2
              ],
            );
          }
        }
      }
    }
  }

  return values;
};

export default removeArrays;
