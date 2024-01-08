import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const cryptoNewsHeaders =   {
    
    'X-RapidAPI-Key': '12648468afmsh23d9f93eb2e1aeap182fecjsnb074e5d2f1d1',
    'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
  };
  const baseUrl = 'https://cryptocurrency-news2.p.rapidapi.com/v1'

  const apiData = {
    "query": "crypto",
    "page": 1,
      "time_bounded": true,
      "from_date": "01/02/2021",
      "to_date": "05/06/2021",
      "location": "",
      "category": "",
      "source": ""
  };
  
  
  const createRequest = (url ) =>({url, headers:cryptoNewsHeaders});
 

  
  export const cryptoNewsApi = createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder) =>({
        getCryptoNews: builder.query({
            query:({newsCategory, count})=>createRequest(`/news`)
        })
    })
});
export  const {useGetCryptoNewsQuery} = cryptoNewsApi;