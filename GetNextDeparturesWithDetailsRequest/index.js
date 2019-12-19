const fetchData = require("../fetchData");

/**
 *
 * @param {number || null} numRows (integer, between 0 and 150 exclusive): The number of services to return in the resulting station board.
 * @param {string} crs (string, 3 characters, alphabetic): The CRS code (see above) of the location for which the request is being made.
 * @param {string || null} filterCrs (string, 3 characters, alphabetic): The CRS code of either an origin or destination location to filter in. Optional.
 * @param {string || null} filterType (string, either "from" or "to"): The type of filter to apply. Filters services to include only those originating or terminating at the filterCrs location. Defaults to "to". Optional.
 * @param {number || null} timeOffset (integer, between -120 and 120 exclusive): An offset in minutes against the current time to provide the station board for. Defaults to 0. Optional.
 * @param {number || null} timeWindow (integer, between -120 and 120 exclusive): How far into the future in minutes, relative to timeOffset, to return services for. Defaults to 120. Optional.
 */
function GetNextDeparturesWithDetailsRequest(
  {
    numRows = null,
    crs,
    filterCrs = [],
    filterType = "to",
    timeOffset = 0,
    timeWindow = 120
  },
  tokenValue
) {
  return fetchData({
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
    .then(result => {
      return result.GetNextDeparturesWithDetailsResponse[0].DeparturesBoard[0];
      // console.dir(
      //   result.GetNextDeparturesWithDetailsResponse[0].DeparturesBoard[0]
      //     .departures[0].destination[0].service[0]
      // );
    })
    .catch(err => console.error(err));
}

module.exports = GetNextDeparturesWithDetailsRequest;
