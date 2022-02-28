export interface IAction {
  label: string;
  action: (row: any) => void;
}

export interface IGridData {
  headers: string[];
  values: any[];
  actions: IAction[];
}
