// @ts-ignore
import axios from "axios";
import * as process from "process";

function buildUrl(relativePath: string): string {
    relativePath = relativePath.trim();
    return `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}${relativePath}`;
}

const basicApiFetcher = (url: string) => {
    return axios.get(buildUrl(url)).then((res) => res.data.data).catch((err) => err);
}

export default basicApiFetcher