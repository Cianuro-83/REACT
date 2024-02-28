import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API = "http://localhost:3000";
export const messageApi = createApi( {
  reducerPath: 'messageApi',
  baseQuery: fetchBaseQuery( { baseUrl: API } ),
  endpoints: ( builder ) => ( {
    getMessages: builder.query( {
      query: () => '/message',
    } ),

  } ),
} );
export const { useGetMessagesQuery } = messageApi;