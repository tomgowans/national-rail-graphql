const fetchData = require("../fetchData");
const removeArrays = require("../removeArrays");

/**
 *
 * @param {string} crs (string, 3 characters, alphabetic): The CRS code (see above) of the location for which the request is being made.
 * @param {Array} filterList A list of CRS codes of the destinations location to filter, at least 1 but not greater than 25 must be supplied.
 * @param {number || null} timeOffset (integer, between -120 and 120 exclusive): An offset in minutes against the current time to provide the station board for. Defaults to 0. Optional.
 * @param {number || null} timeWindow (integer, between -120 and 120 exclusive): How far into the future in minutes, relative to timeOffset, to return services for. Defaults to 120. Optional.
 */
function GetFastestDeparturesWithDetailsRequest(
  { crs, filterList = [], timeOffset = 0, timeWindow = 120 },
  tokenValue
) {
  return new Promise((resolve, reject) => {
    fetchData({
      body: `
      <ldb:GetFastestDeparturesWithDetailsRequest>
        <ldb:crs>${crs}</ldb:crs>
        ${
          filterList.length &&
          `<ldb:filterList>
          ${filterList.map(
            (filterListItem) => `<ldb:crs>${filterListItem}</ldb:crs>`
          )}
        </ldb:filterList>`
        }
        <ldb:timeOffset>${timeOffset}</ldb:timeOffset>
        <ldb:timeWindow>${timeWindow}</ldb:timeWindow>
      </ldb:GetFastestDeparturesWithDetailsRequest>
      `,
      tokenValue,
    })
      .then((result) => {
        resolve(
          removeArrays(
            result.GetFastestDeparturesWithDetailsResponse[0].DeparturesBoard[0]
          )
        );
        // console.dir(result);
      })
      .catch((err) => reject(err));
  });
}

module.exports = GetFastestDeparturesWithDetailsRequest;
