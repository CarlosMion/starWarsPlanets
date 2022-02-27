import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPlanets, IPlanet } from 'api/planets/types';
import { PlanetsState } from './types';

const initialState: PlanetsState = {
  data: { count: 0, next: '', previous: '', results: [] as IPlanet[] },
};

export const planetsSlice = createSlice({
  name: 'planets',
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<IPlanets>) => {
      state.data = action.payload;
    },
  },
});

export const { incrementByAmount } = planetsSlice.actions;

export default planetsSlice.reducer;
