export const keyToValueNamesMap = new Map<string, string>([
  ['name', 'Name'],
  ['rotation_period', 'Rotation Period'],
  ['orbital_period', 'Orbital Period'],
  ['diameter', 'Diameter'],
  ['climate', 'Climate'],
  ['gravity', 'Gravity'],
  ['terrain', 'Terrain'],
  ['surface_water', 'Surface Water'],
  ['population', 'Population'],
]);

/*
  It's way more performatic to have 2 reversed maps then 
  creating a function for retrieving the key using the value 
*/

export const valueToKeyNamesMap = new Map<string, string>([
  ['Name', 'name'],
  ['Rotation Period', 'rotation_period'],
  ['Orbital Period', 'orbital_period'],
  ['Diameter', 'diameter'],
  ['Climate', 'climate'],
  ['Gravity', 'gravity'],
  ['Terrain', 'terrain'],
  ['Surface Water', 'surface_water'],
  ['Population', 'population'],
]);
