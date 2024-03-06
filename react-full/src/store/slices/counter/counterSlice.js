import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
   name: 'counter',
   initialState: {
      counter: 100,
   },
   reducers: {
      increment: (state /* action */) => {
         state.counter += 1;
      },
      decrement: (state) => {
         state.counter -= 1;
      },
      incrementByAmount: (state, action) => {
         state.counter += action.payload;
      },
   },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
