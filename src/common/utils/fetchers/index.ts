// @ts-ignore
import axios, {AxiosResponse} from "axios";
import * as process from "process";

function buildUrl(relativePath: string): string {
    relativePath = relativePath.trim();
    return `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}${relativePath}`;
}

interface Response<T = any> {
    data: T
}

export const getBackendFetcher = (url: string) => axios(buildUrl(url)).then((res: AxiosResponse<Response>) => res.data.data)

export const postBackendFetcher = ( url: string, data: any = {} ) => axios.post( buildUrl( url ), data ).then( ( res:AxiosResponse<Response> ) => res.data.data )