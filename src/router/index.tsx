import React from 'react';
import { PlanetDetails } from 'pages/planetDetails';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App } from 'App';
import { NotFoundPage } from 'components/NotFoundPage';

export const routes = {
  home: '/',
  details: '/planet',
};

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<App />} />
        <Route
          path={`${routes.details}/:planetName`}
          element={<PlanetDetails />}
        />
        <Route element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
