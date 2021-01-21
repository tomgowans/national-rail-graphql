import fetchData from '../fetchData';
import removeArrays from '../removeArrays';

import { Attributes, Result } from '../types';

function GetArrBoardWithDetailsRequest(
  { numRows = null, crs, filterCrs = null, filterType = 'to', timeOffset = 0, timeWindow = 120 }: Attributes,
  tokenValue: string,
) {
  return new Promise((resolve, reject) => {
    fetchData({
      body: `
      <ldb:GetArrBoardWithDetailsRequest>
        ${numRows && `<ldb:numRows>${numRows}</ldb:numRows>`}
        <ldb:crs>${crs}</ldb:crs>
        ${filterCrs && `<ldb:filterCrs>${filterCrs}</ldb:filterCrs>`}
        <ldb:filterType>${filterType}</ldb:filterType>
        <ldb:timeOffset>${timeOffset}</ldb:timeOffset>
        <ldb:timeWindow>${timeWindow}</ldb:timeWindow>
      </ldb:GetArrBoardWithDetailsRequest>
      `,
      tokenValue,
    })
      .then((result: Result) => {
        // console.dir(result);
        resolve(removeArrays(result.GetArrBoardWithDetailsResponse[0].GetStationBoardResult[0]));
      })
      .catch((err: Error) => reject(err));
  });
}

export default GetArrBoardWithDetailsRequest;
