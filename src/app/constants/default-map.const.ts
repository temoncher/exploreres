import { Placement } from '@/models/placement.interface';

import { TileType } from '../enums/tile-type.enum';

export const DEFAULT_GRID_SIZE = 11;

export const initialPlacement: Placement = {
  type: TileType.MOUNTAIN,
  // eslint-disable-next-line array-element-newline
  tiles: [14, 30, 60, 90, 106],
};
