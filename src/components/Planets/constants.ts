export const defaultPlanetActions = [
  {
    label: 'Go to Films',
    action: (row: any) => {
      console.log(`redirect to grid with ${row.films.length} Films`);
    },
  },
  {
    label: 'Go to Residents',
    action: (row: any) => {
      console.log(`redirect to grid with ${row.residents.length} Residents`);
    },
  },
];
