export enum GridVariants {
  PLANETS,
  FILMS,
  RESIDENTS,
  PLANET_DETAILS,
}

export interface IGridData {
  headerNames: string[];
  headerTypes: string[];
  values: any[];
  variant: GridVariants;
}
