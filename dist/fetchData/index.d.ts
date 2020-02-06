import { Result } from "../types";
declare type Response = {
    body: string;
    tokenValue: string;
};
declare const fetchData: ({ body, tokenValue }: Response) => Promise<Result>;
export default fetchData;
