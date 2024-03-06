import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API = "http://localhost:3000";
export const messageApi = createApi( {
  reducerPath: 'messageApi',
  baseQuery: fetchBaseQuery( { baseUrl: API } ),
  endpoints: ( builder ) => ( {
    getMessages: builder.query( {
      query: () => '/todos',
      providesTags: ["Todos"]
    } ),
    addNewTodo: builder.mutation( {
      query: ( newTodo ) => ( {
        url: '/todos',
        method: 'POST',
        body: newTodo,
      } ),
      invalidatesTags: ['Todos'],
    } ),
    deleteTodo: builder.mutation( {
      query: ( id ) => ( {
        url: `/todos/${id}`,
        method: 'DELETE',
      } ),
      invalidatesTags: ['Todos'],
    } ),
    updateTodo: builder.mutation( {
      query: ( updatedTodo ) => ( {
        url: `/todos/${updatedTodo.id}`,
        method: 'PATCH',
        body: updatedTodo,
      } ),
      invalidatesTags: ['Todos'],
    } ),

  } ),
} );
export const { useGetMessagesQuery, useAddNewTodoMutation, useDeleteTodoMutation, useUpdateTodoMutation } = messageApi;