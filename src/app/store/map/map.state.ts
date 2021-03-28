/* eslint-disable class-methods-use-this */
import { Injectable } from '@angular/core';
import {
  Action,
  Selector,
  State,
  StateContext,
} from '@ngxs/store';
import { patch, append } from '@ngxs/store/operators';

import { initialPlacement, DEFAULT_GRID_SIZE } from '@/constants/default-map.const';
import { TileMap } from '@/core/tile-map';
import { TileType } from '@/enums/tile-type.enum';
import { Placement } from '@/models/placement.interface';

import { MapActions } from './map.actions';

/* eslint-disable array-element-newline */
const testPlacements: Placement[] = [
  {
    type: TileType.WATER,
    tiles: [2, 3, 4, 4 + 11],
  },
  {
    type: TileType.FOREST,
    tiles: [5 * 11 + 4, 5 * 11 + 5 + 11],
  },
  {
    type: TileType.FOREST,
    tiles: [6 * 11 + 4, 7 * 11 + 4, 7 * 11 + 5, 8 * 11 + 5],
  },
  {
    type: TileType.MONSTERS,
    tiles: [5 * 11 - 3, 5 * 11 - 2, 5 * 11 - 2 + 11, 5 * 11 - 2 + 11 * 2, 5 * 11 - 2 + 11 * 2 - 1],
  },
];
/* eslint-enable array-element-newline */

export type MapStateModel = {
  gridSize: number;
  placements: Placement[];
};

@State<MapStateModel>({
  name: 'map',
  defaults: {
    gridSize: DEFAULT_GRID_SIZE,
    placements: [initialPlacement],
  },
})
@Injectable()
export class MapState {
  @Selector()
  static getTileMap(state: MapStateModel): TileMap {
    return new TileMap([...state.placements, ...testPlacements]);
  }

  @Selector()
  static getGridSize(state: MapStateModel): number {
    return state.gridSize;
  }

  @Action(MapActions.AddPlacement)
  addPlacement(context: StateContext<MapStateModel>, payload: MapActions.AddPlacement): void {
    context.setState(
      patch<MapStateModel>({
        placements: append([payload.placement]),
      }),
    );
  }
}
