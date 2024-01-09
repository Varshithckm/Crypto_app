import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const cryptoNewsHeaders =   {
    
    'X-RapidAPI-Key': '12648468afmsh23d9f93eb2e1aeap182fecjsnb074e5d2f1d1',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  };
  const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

  const createRequest = (url ) =>({url, headers:cryptoNewsHeaders});
 
  export const cryptoNewsApi = createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder) =>({
        getCryptoNews: builder.query({
            query:({newsCategory, count})=>createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
});
export  const {useGetCryptoNewsQuery} = cryptoNewsApi;