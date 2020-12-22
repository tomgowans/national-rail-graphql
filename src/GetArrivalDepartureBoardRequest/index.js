const fetchData = require("../../fetchData");
const removeArrays = require("../removeArrays");

/**
 *
 * @param {number || null} numRows (integer, between 0 and 150 exclusive): The number of services to return in the resulting station board.
 * @param {string} crs (string, 3 characters, alphabetic): The CRS code (see above) of the location for which the request is being made.
 * @param {string || null} filterCrs (string, 3 characters, alphabetic): The CRS code of either an origin or destination location to filter in. Optional.
 * @param {string || null} filterType (string, either "from" or "to"): The type of filter to apply. Filters services to include only those originating or terminating at the filterCrs location. Defaults to "to". Optional.
 * @param {number || null} timeOffset (integer, between -120 and 120 exclusive): An offset in minutes against the current time to provide the station board for. Defaults to 0. Optional.
 * @param {number || null} timeWindow (integer, between -120 and 120 exclusive): How far into the future in minutes, relative to timeOffset, to return services for. Defaults to 120. Optional.
 */
function GetArrivalDepartureBoardRequest(
  {
    numRows = null,
    crs,
    filterCrs = null,
    filterType = "to",
    timeOffset = 0,
    timeWindow = 120,
  },
  tokenValue
) {
  return new Promise((resolve, reject) => {
    fetchData({
      body: `
      <ldb:GetArrivalDepartureBoardRequest>
        ${numRows && `<ldb:numRows>${numRows}</ldb:numRows>`}
        <ldb:crs>${crs}</ldb:crs>
        ${filterCrs && `<ldb:filterCrs>${filterCrs}</ldb:filterCrs>`}
        <ldb:filterType>${filterType}</ldb:filterType>
        <ldb:timeOffset>${timeOffset}</ldb:timeOffset>
        <ldb:timeWindow>${timeWindow}</ldb:timeWindow>
      </ldb:GetArrivalDepartureBoardRequest>
      `,
      tokenValue,
    })
      .then((result) => {
        // console.dir(result);
        resolve(
          removeArrays(
            result.GetArrivalDepartureBoardResponse[0].GetStationBoardResult[0]
          )
        );
      })
      .catch((err) => reject(err));
  });
}

module.exports = GetArrivalDepartureBoardRequest;
