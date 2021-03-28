import { TileType } from '../enums/tile-type.enum';

export interface Placement {
  type: TileType;
  tiles: number[];
}
