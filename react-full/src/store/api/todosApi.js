import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const todosApi = createApi({
   reducerPath: 'todosApi',
   baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:3000',
   }),
   tagTypes: ['Todo'],
   endpoints: (builder) => ({
      getTodos: builder.query({
         query: () => '/todos',
         providesTags: ['Todo'],
         transformResponse: (response) => {
            return response.sort((a, b) => b.id - a.id);
         },
      }),
      getTodo: builder.query({
         query: (todoId) => `/todos/${todoId}`,
         providesTags: ['Todo'],
      }),
      addNewTodo: builder.mutation({
         query: (newTodo) => ({
            url: '/todos',
            method: 'POST',
            body: newTodo,
         }),
         invalidatesTags: ['Todo'],
      }),
      deleteTodo: builder.mutation({
         query: (id) => ({
            url: `/todos/${id}`,
            method: 'DELETE',
         }),
         invalidatesTags: ['Todo'],
      }),
      updateTodo: builder.mutation({
         query: (updateTodo) => ({
            url: `/todos/${updateTodo.id}`,
            method: 'PUT',
            body: updateTodo,
         }),
         invalidatesTags: ['Todo'],
      }),
   }),
});

export const {
   useGetTodosQuery,
   useGetTodoQuery,
   useAddNewTodoMutation,
   useDeleteTodoMutation,
   useUpdateTodoMutation,
} = todosApi;
