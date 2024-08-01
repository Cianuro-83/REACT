import { configureStore } from '@reduxjs/toolkit';
import { darkModeSlice } from './slices/darkMode';

export const store = configureStore({
	reducer: {
		darkMode: darkModeSlice.reducer,
	},
});
