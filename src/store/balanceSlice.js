import { createSlice } from '@reduxjs/toolkit';

const balanceSlice = createSlice({
  name: 'balance',
  initialState: {
    value: 1000,
    comment: '',
  },
  reducers: {
    deposit: (state, { payload }) => {
      state.value += payload;
    },
    withdraw: (state, { payload }) => {
      state.value -= payload;
    },
  },
});

export const { deposit, withdraw } = balanceSlice.actions;

export const balancereducer = balanceSlice.reducer;
