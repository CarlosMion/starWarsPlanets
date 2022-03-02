export enum GridVariants {
  PLANETS,
  FILMS,
  RESIDENTS,
}

export interface IGridData {
  headerNames: string[];
  headerTypes: string[];
  values: any[];
  variant: GridVariants;
}
