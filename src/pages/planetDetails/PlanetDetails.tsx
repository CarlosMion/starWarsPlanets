import React from 'react';

import { Grid } from 'components/Grid';
import { useParams } from 'react-router-dom';

export const PlanetDetails = () => {
  const { planetName } = useParams<{
    planetName: string;
  }>();
  return (
    <div>
      <>PLANET {planetName} DETAILS PAGE </>
    </div>
  );
};
