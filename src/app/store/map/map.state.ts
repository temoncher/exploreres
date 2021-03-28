import { Injectable } from '@angular/core';
import { Selector, State } from '@ngxs/store';
import { defaultMap } from 'src/app/constants/default-map.const';
import { TileType } from 'src/app/enums/tile-type.enum';

export type MapStateModel = {
  tiles: TileType[][];
};

@State<MapStateModel>({
  name: 'map',
  defaults: {
    tiles: defaultMap,
  },
})
@Injectable()
export class MapState {
  @Selector()
  static getTiles(state: MapStateModel): TileType[][] {
    return state.tiles;
  }
}
