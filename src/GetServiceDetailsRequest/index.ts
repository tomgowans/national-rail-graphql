import fetchData from '../fetchData/index';
import removeArrays from '../removeArrays';
import { Result, ServiceAttributes } from '../types';

/**
 *
 * @param {string} serviceID (string): The LDBWS service ID of the service to request the details of. The service ID is obtained from a service listed in a StationBoard object returned from any other request.
 */

function GetServiceDetailsRequest({ serviceID }: ServiceAttributes, tokenValue: string): Promise<Result> {
  return new Promise((resolve, reject) => {
    fetchData({
      body: `
      <ldb:GetServiceDetailsRequest>
        ${serviceID && `<ldb:serviceID>${serviceID}</ldb:serviceID>`}
      </ldb:GetServiceDetailsRequest>
      `,
      tokenValue,
    })
      .then((result: Result) => {
        // console.dir(result);
        resolve(removeArrays(result.GetServiceDetailsResponse[0].GetServiceDetailsResult[0]));
      })
      .catch((err: Error) => reject(err));
  });
}

export default GetServiceDetailsRequest;
