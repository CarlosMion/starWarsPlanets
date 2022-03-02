import React from 'react';
import { PlanetDetails } from 'pages/PlanetDetails';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App } from 'App';
import { NotFoundPage } from 'components/NotFoundPage';
import { PlanetFilms } from 'pages/PlanetFilms';
import { PlanetResidents } from 'pages/PlanetResidents';
import { useDispatch } from 'react-redux';
import { usePlanets } from 'api/planets';
import { updateData } from 'redux/slices/planets';
import { IPlanets } from 'api/planets/types';

export const routes = {
  home: '/',
  details: '/planet',
  planetFilms: '/films',
  planetResidents: '/residents',
};

export function Router() {
  const dispatch = useDispatch();
  const { data } = usePlanets();

  const dispatchUpdate = (data?: IPlanets) =>
    data && dispatch(updateData(data));

  dispatchUpdate(data);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<App />} />
        <Route
          path={`${routes.details}/:planetName${routes.planetFilms}`}
          element={<PlanetFilms />}
        />
        <Route
          path={`${routes.details}/:planetName${routes.planetResidents}`}
          element={<PlanetResidents />}
        />
        <Route
          path={`${routes.details}/:planetName`}
          element={<PlanetDetails />}
        />
        <Route element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
