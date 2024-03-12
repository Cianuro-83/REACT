import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/counter/';
import { todosApi } from './api/todosApi';
import { darkModeSlice } from './slices/darkMode';

export const store = configureStore({
   reducer: {
      counter: counterSlice.reducer,
      darkMode: darkModeSlice.reducer,

      // api
      [todosApi.reducerPath]: todosApi.reducer,
   },
   // middleware da usare con le chiamate api
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(todosApi.middleware),
});
