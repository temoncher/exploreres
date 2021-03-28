import { TileType } from '@/enums/tile-type.enum';

export interface Tile {
  type: TileType;
  borders: {
    left?: boolean;
    top?: boolean;
    right?: boolean;
    bottom?: boolean;
  };
}
