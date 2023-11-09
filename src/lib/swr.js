import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const useIntervalSWR = (url, interval = 1000, ) => {
    console.log("[UrlFetcher] Fetching " + url);
    const { data, error } = useSWR(url, fetcher, {
        refreshInterval: interval
    });
    return {
        data,
        isLoading: !error && !data,
        isError: error,
    };
    }

