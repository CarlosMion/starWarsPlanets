import { IPlanets } from 'api/planets/types';
import { IAction } from 'components/Grid/types';
import { buildPlanetsGridData } from 'utils';
import { mockPlanetsData } from './fixtures';

describe('utils', () => {
  describe('buildPlanetsGridData', () => {
    const expectedHeaders = [
      'Name',
      'Rotation Period',
      'Orbital Period',
      'Diameter',
      'Climate',
      'Gravity',
      'Terrain',
      'Population',
    ];
    it('should build the correct object when propper data is given', () => {
      const result = buildPlanetsGridData({
        data: mockPlanetsData,
        actions: [] as IAction[],
      });

      expect(result).toMatchObject({
        headers: expectedHeaders,
        values: mockPlanetsData.results,
        actions: [],
      });
    });
    it('should return the built object but with empty data', () => {
      const result = buildPlanetsGridData({
        data: {} as IPlanets,
        actions: [] as IAction[],
      });

      expect(result).toMatchObject({
        headers: [],
        values: [],
        actions: [],
      });
    });
  });
});
