import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const commentsApi = createApi({
   reducerPath: 'commentsApi',
   baseQuery: fetchBaseQuery({
      baseUrl: 'https://jsonplaceholder.typicode.com',
   }),
   tagTypes: ['Comments'],
   endpoints: (builder) => ({
      getComments: builder.query({
         query: () => '/comments',
         providesTags: ['Comments'],
      }),
   }),
});

export const { useGetCommentsQuery } = commentsApi;
