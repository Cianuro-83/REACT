import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/counter/';
import { todosApi } from './api/todosApi';
import { darkModeSlice } from './slices/darkMode';
import { commentsApi } from './api/commentsApi';

export const store = configureStore({
   reducer: {
      counter: counterSlice.reducer,
      darkMode: darkModeSlice.reducer,

      // api
      [todosApi.reducerPath]: todosApi.reducer,
      [commentsApi.reducerPath]: commentsApi.reducer,
   },
   // middleware da usare con le chiamate api
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
         todosApi.middleware,
         commentsApi.middleware
      ),
});
