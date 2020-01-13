import { Attributes } from "../types";
/**
 *
 * @param {number || null} numRows (integer, between 0 and 150 exclusive): The number of services to return in the resulting station board.
 * @param {string} crs (string, 3 characters, alphabetic): The CRS code (see above) of the location for which the request is being made.
 * @param {Array} filterList A list of CRS codes of the destinations location to filter, at least 1 but not greater than 25 must be supplied.
 * @param {number || null} timeOffset (integer, between -120 and 120 exclusive): An offset in minutes against the current time to provide the station board for. Defaults to 0. Optional.
 * @param {number || null} timeWindow (integer, between -120 and 120 exclusive): How far into the future in minutes, relative to timeOffset, to return services for. Defaults to 120. Optional.
 */
declare function GetFastestDeparturesRequest({ crs, filterList, timeOffset, timeWindow }: Attributes, tokenValue: string): Promise<unknown>;
export default GetFastestDeparturesRequest;
