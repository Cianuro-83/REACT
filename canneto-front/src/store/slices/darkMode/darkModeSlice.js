import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	darkMode: localStorage.getItem('darkMode') === 'true',
};
export const darkModeSlice = createSlice({
	name: 'darkMode',
	initialState,
	reducers: {
		toggleDarkMode: (state) => {
			state.darkMode = !state.darkMode;
			if (state.darkMode) {
				document.body.classList.add('dark-mode');
				localStorage.setItem('darkMode', 'true');
			} else {
				document.body.classList.remove('dark-mode');
				localStorage.setItem('darkMode', 'false');
			}
		},
	},
});

// Action creators are generated for each case reducer function
export const { toggleDarkMode } = darkModeSlice.actions;
