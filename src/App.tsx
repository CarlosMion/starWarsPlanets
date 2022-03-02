import React, { FC } from 'react';

import { Router } from './router';

import { useDispatch } from 'react-redux';
import { usePlanets } from 'api/planets';
import { updateData } from 'redux/slices/planets';
import { IPlanets } from 'api/planets/types';

export const App: FC = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = usePlanets();

  const dispatchUpdate = (data?: IPlanets) =>
    data && dispatch(updateData(data));

  dispatchUpdate(data);

  return <>{!isLoading && <Router />}</>;
};
