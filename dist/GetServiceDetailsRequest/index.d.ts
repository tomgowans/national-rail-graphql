/**
 *
 * @param {string} serviceID (string): The LDBWS service ID of the service to request the details of. The service ID is obtained from a service listed in a StationBoard object returned from any other request.
 */
declare type Attributes = {
    serviceID: string;
};
declare function GetServiceDetailsRequest({ serviceID }: Attributes, tokenValue: string): Promise<unknown>;
export default GetServiceDetailsRequest;
