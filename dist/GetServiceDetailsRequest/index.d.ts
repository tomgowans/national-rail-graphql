import { Result, ServiceAttributes } from '../types';
/**
 *
 * @param {string} serviceID (string): The LDBWS service ID of the service to request the details of. The service ID is obtained from a service listed in a StationBoard object returned from any other request.
 */
declare function GetServiceDetailsRequest({ serviceID }: ServiceAttributes, tokenValue: string): Promise<Result>;
export default GetServiceDetailsRequest;
