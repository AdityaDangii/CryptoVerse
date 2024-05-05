import { BehanceSquareOutlined } from '@ant-design/icons';
import {createApi ,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
  const cryptoApiHeaders={
     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
     'X-RapidAPI-Key': '318f3b8f5cmsh33a87b04031826bp194f08jsn3241cd596b28'
   
  }
  const baseUrl =  'https://coinranking1.p.rapidapi.com';

  const createRequest = (url) => ({ url, headers: cryptoApiHeaders });
  export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) =>({
        getCryptos: builder.query({
            query:(count)=> createRequest(`/coins?limit=${count}`)
        })
    })
  })

export const {
  useGetCryptosQuery,
} = cryptoApi;