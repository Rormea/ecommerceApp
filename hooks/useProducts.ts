import useSWR, { SWRConfiguration } from 'swr'
import { IProduct } from '../interfaces';




// const fetcher = (...args: [key: string]) => fetch(...args).then(res => res.json());


export const useProducts = (url: string, config: SWRConfiguration = {}) => {

    // const { data, error } = useSWR<IProduct[]>(`/api${url}`, fetcher, config,
    //     // { refreshInterval: 2000 }
    // );

    const { data, error, isLoading } = useSWR<IProduct[]>(`/api${url}`, config);

    // if (error) return <div>failed to load < /div>
    // if (!data) return <div>loading...</div>



    return {
        products: data || [],
        isLoading: isLoading,
        isError: error
    };
}
