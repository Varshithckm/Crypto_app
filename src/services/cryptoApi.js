import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const cryptoApiHeaders ={
    'X-RapidAPI-Key': '12648468afmsh23d9f93eb2e1aeap182fecjsnb074e5d2f1d1',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const baseUrl ='https://coinranking1.p.rapidapi.com'
const createRequest = (url) =>({url, headers:cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder) =>({
        getCryptos: builder.query({
            query:(count)=>createRequest(`/coins?limit=${count}`)
        })
    })
})
export const {useGetCryptosQuery} = cryptoApi;