import { DEFAULT_GRID_SIZE } from '@/constants/default-map.const';
import { TileType } from '@/enums/tile-type.enum';
import { Placement } from '@/models/placement.interface';
import { Tile } from '@/models/tile.interface';

export class TileMap {
  tiles: Tile[];

  constructor(private placements: Placement[], gridSize = DEFAULT_GRID_SIZE) {
    this.tiles = Array(gridSize ** 2).fill(undefined).map(() => ({
      type: TileType.EMPTY,
      borders: {},
    }));

    this.placements.forEach((placement) => {
      placement.tiles.forEach((tileIndex) => {
        // Calculate current tile borders
        const borders = placement.tiles.reduce<Tile['borders']>((acc, tile) => ({
          left: tileIndex - 1 !== tile && acc.left,
          top: tileIndex - gridSize !== tile && acc.top,
          right: tileIndex + 1 !== tile && acc.right,
          bottom: tileIndex + gridSize !== tile && acc.bottom,
        }), {
          left: true,
          top: true,
          right: true,
          bottom: true,
        });
        // Create new Tile
        const newTile: Tile = {
          type: placement.type,
          borders,
        };

        this.tiles[tileIndex] = newTile;
      });
    });
  }
}
