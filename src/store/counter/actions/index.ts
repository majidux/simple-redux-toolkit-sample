import { PayloadAction } from '@reduxjs/toolkit';
import { CounterState } from '../slice';

export const increment = (state: CounterState) => {
  state.value += 1;
};

export const decrement = (state: CounterState) => {
  state.value -= 1;
};

export const incrementByAmount = (
  state: CounterState,
  action: PayloadAction<number>
) => {
  state.value += action.payload;
};
