import fetchData from "../fetchData";
import removeArrays from "../removeArrays";
import { Attributes, Result } from "../types";

/**
 *
 * @param {string} crs (string, 3 characters, alphabetic): The CRS code (see above) of the location for which the request is being made.
 * @param {string || null} filterCrs (string, 3 characters, alphabetic): The CRS code of either an origin or destination location to filter in. Optional.
 * @param {number || null} timeOffset (integer, between -120 and 120 exclusive): An offset in minutes against the current time to provide the station board for. Defaults to 0. Optional.
 * @param {number || null} timeWindow (integer, between -120 and 120 exclusive): How far into the future in minutes, relative to timeOffset, to return services for. Defaults to 120. Optional.
 */

function GetNextDeparturesWithDetailsRequest(
  { crs, filterCrs = [], timeOffset = 0, timeWindow = 120 }: Attributes,
  tokenValue: string
) {
  return new Promise((resolve, reject) => {
    fetchData({
      body: `
      <ldb:GetNextDeparturesWithDetailsRequest>
      <ldb:crs>${crs}</ldb:crs>
      ${filterCrs.length &&
        `<ldb:filterList>
        ${filterCrs.map(filterCrsItem => `<ldb:crs>${filterCrsItem}</ldb:crs>`)}
      </ldb:filterList>`}
      <ldb:timeOffset>${timeOffset}</ldb:timeOffset>
      <ldb:timeWindow>${timeWindow}</ldb:timeWindow>
    </ldb:GetNextDeparturesWithDetailsRequest>

      `,
      tokenValue
    })
      .then((result: Result) => {
        // console.dir(result);
        resolve(
          removeArrays(
            result.GetNextDeparturesWithDetailsResponse[0].DeparturesBoard[0]
          )
        );
      })
      .catch(err => reject(err));
  });
}

export default GetNextDeparturesWithDetailsRequest;
