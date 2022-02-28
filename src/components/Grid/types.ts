export interface IAction {
  label: string;
  action: (row: any) => void;
  to?: string;
}

export interface IGridData {
  headers: string[];
  values: any[];
  hasActions?: boolean;
}
