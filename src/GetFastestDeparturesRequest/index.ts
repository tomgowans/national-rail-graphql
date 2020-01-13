import fetchData from "../fetchData";
import removeArrays from "../removeArrays";
import { Attributes, Result } from "../types";

/**
 *
 * @param {number || null} numRows (integer, between 0 and 150 exclusive): The number of services to return in the resulting station board.
 * @param {string} crs (string, 3 characters, alphabetic): The CRS code (see above) of the location for which the request is being made.
 * @param {Array} filterList A list of CRS codes of the destinations location to filter, at least 1 but not greater than 25 must be supplied.
 * @param {number || null} timeOffset (integer, between -120 and 120 exclusive): An offset in minutes against the current time to provide the station board for. Defaults to 0. Optional.
 * @param {number || null} timeWindow (integer, between -120 and 120 exclusive): How far into the future in minutes, relative to timeOffset, to return services for. Defaults to 120. Optional.
 */

function GetFastestDeparturesRequest(
  { crs, filterList = [], timeOffset = 0, timeWindow = 120 }: Attributes,
  tokenValue: string
) {
  return new Promise((resolve, reject) => {
    fetchData({
      body: `
      <ldb:GetFastestDeparturesRequest>
        <ldb:crs>${crs}</ldb:crs>
        ${filterList.length &&
          `<ldb:filterList>
          ${filterList.map(
            filterListItem => `<ldb:crs>${filterListItem}</ldb:crs>`
          )}
        </ldb:filterList>`}
        <ldb:timeOffset>${timeOffset}</ldb:timeOffset>
        <ldb:timeWindow>${timeWindow}</ldb:timeWindow>
      </ldb:GetFastestDeparturesRequest>
      `,
      tokenValue
    })
      .then((result: Result) => {
        // console.dir(result);
        resolve(
          removeArrays(
            result.GetFastestDeparturesResponse[0].DeparturesBoard[0]
          )
        );
      })
      .catch(err => reject(err));
  });
}

export default GetFastestDeparturesRequest;
