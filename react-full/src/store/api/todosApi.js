import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const todosApi = createApi({
   reducerPath: 'todosApi',
   baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:3000',
   }),
   providerTags: [''],
   endpoints: (builder) => ({
      getTodos: builder.query({
         query: () => '/todos',
         providerTags: [''],
      }),
      getTodo: builder.query({
         query: (todoId) => `/todos/${todoId}`,
         providerTags: [''],
      }),
   }),
});

export const { useGetTodosQuery, useGetTodoQuery } = todosApi;
