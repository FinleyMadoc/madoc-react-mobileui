import InternalGrid from './grid';
import GridItem from './grid-item';
export type { GridProps } from './grid';
export type { GridItemProps } from './grid-item';
declare type InternalGridType = typeof InternalGrid;
export interface GridInterface extends InternalGridType {
  Item: typeof GridItem;
}
declare const Grid: GridInterface;
export default Grid;
