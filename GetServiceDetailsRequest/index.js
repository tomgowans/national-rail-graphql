const fetchData = require("../fetchData");

/**
 *
 * @param {string} serviceID (string): The LDBWS service ID of the service to request the details of. The service ID is obtained from a service listed in a StationBoard object returned from any other request.
 */

function GetServiceDetailsRequest({ serviceID = null }, tokenValue) {
  return fetchData({
    body: `
      <ldb:GetServiceDetailsRequest>
        ${serviceID && `<ldb:serviceID>${serviceID}</ldb:serviceID>`}
      </ldb:GetServiceDetailsRequest>
      `,
    tokenValue
  })
    .then(result => {
      return result.GetServiceDetailsResponse[0].GetServiceDetailsResult[0];
      // console.dir(result);
    })
    .catch(err => console.error(err));
}

module.exports = GetServiceDetailsRequest;
