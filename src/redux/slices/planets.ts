import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPlanets, IPlanet } from 'api/planets/types';
import { PlanetsState } from './types';

const initialData = {
  count: 0,
  next: '',
  previous: '',
  results: [] as IPlanet[],
};

const initialState: PlanetsState = {
  data: initialData,
};

const planetsSlice = createSlice({
  name: 'planets',
  initialState,
  reducers: {
    updateData: (state, action: PayloadAction<IPlanets>) => {
      state.data = action.payload;
    },
  },
});

export const { updateData } = planetsSlice.actions;

export default planetsSlice.reducer;
