import React, { FC } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PlanetDetails } from 'pages/PlanetDetails';
import { App } from 'App';
import { NotFoundPage } from 'components/NotFoundPage';
import { PlanetFilms } from 'pages/PlanetFilms';
import { PlanetResidents } from 'pages/PlanetResidents';
import { Planets } from 'pages/Planets';

export const routes = {
  home: '/',
  details: '/planet',
  planetFilms: '/films',
  planetResidents: '/residents',
};

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<Planets />} />
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
};
