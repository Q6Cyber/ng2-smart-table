import { Cell } from '../../../lib/data-set/cell';

export interface ViewCell {
  value: string | number;
  cell: Cell;
  rowData: any;
}
