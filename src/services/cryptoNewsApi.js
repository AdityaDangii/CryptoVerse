import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query";

const cryptoNewsHeaders={
    'content-type': 'application/json',
      'X-RapidAPI-Key': '318f3b8f5cmsh33a87b04031826bp194f08jsn3241cd596b28',
      'X-RapidAPI-Host': 'newsnow.p.rapidapi.com'
}

const baseUrl='https://newsnow.p.rapidapi.com';
const createRequest=(url)=>({url , headers : cryptoNewsHeaders})
export const cryptoNewsApi = createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) =>({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),

        })
    })
  })

export const {
  useGetCryptoNewsQuery,
} = cryptoNewsApi;






// const options = {
//     method: 'POST',
//     url: 'https://newsnow.p.rapidapi.com/',
//     headers: {
//       'content-type': 'application/json',
//       'X-RapidAPI-Key': '318f3b8f5cmsh33a87b04031826bp194f08jsn3241cd596b28',
//       'X-RapidAPI-Host': 'newsnow.p.rapidapi.com'
//     },
//     data: {
//       text: 'Europe',
//       region: 'wt-wt',
//       max_results: 25
//     }
//   };