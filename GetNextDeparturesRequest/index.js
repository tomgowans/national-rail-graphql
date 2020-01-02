const fetchData = require("../fetchData");
const removeArrays = require("../removeArrays");

/**
 *
 * @param {string} crs (string, 3 characters, alphabetic): The CRS code (see above) of the location for which the request is being made.
 * @param {string || null} filterCrs (string, 3 characters, alphabetic): The CRS code of either an origin or destination location to filter in. Optional.
 * @param {number || null} timeOffset (integer, between -120 and 120 exclusive): An offset in minutes against the current time to provide the station board for. Defaults to 0. Optional.
 * @param {number || null} timeWindow (integer, between -120 and 120 exclusive): How far into the future in minutes, relative to timeOffset, to return services for. Defaults to 120. Optional.
 */
function GetNextDeparturesRequest(
  { crs, filterCrs = [], timeOffset = 0, timeWindow = 120 },
  tokenValue
) {
  return fetchData({
    body: `
      <ldb:GetNextDeparturesRequest>
        <ldb:crs>${crs}</ldb:crs>
        ${filterCrs.length &&
          `<ldb:filterList>
          ${filterCrs.map(
            filterCrsItem => `<ldb:crs>${filterCrsItem}</ldb:crs>`
          )}
        </ldb:filterList>`}
        <ldb:timeOffset>${timeOffset}</ldb:timeOffset>
        <ldb:timeWindow>${timeWindow}</ldb:timeWindow>
      </ldb:GetNextDeparturesRequest>
      `,
    tokenValue
  })
    .then(result => {
      // console.dir(result.GetNextDeparturesResponse[0].DeparturesBoard[0]);
      return removeArrays(
        result.GetNextDeparturesResponse[0].DeparturesBoard[0]
      );
    })
    .catch(err => console.error(err));
}

module.exports = GetNextDeparturesRequest;
