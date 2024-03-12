import { createSlice } from '@reduxjs/toolkit';

export const darkModeSlice = createSlice({
   name: 'darkMode',
   initialState: {
      darkMode: false,
   },
   reducers: {
      toggleDarkMode: (state) => {
         state.darkMode = !state.darkMode;
         if (state.darkMode) {
            document.body.classList.add('dark-mode');
         } else {
            document.body.classList.remove('dark-mode');
         }
      },
   },
});

// Action creators are generated for each case reducer function
export const { toggleDarkMode } = darkModeSlice.actions;
