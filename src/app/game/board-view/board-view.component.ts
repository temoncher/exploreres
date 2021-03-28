import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { DEFAULT_GRID_SIZE } from '@/constants/default-map.const';
import { TileMap } from '@/core/tile-map';
import { TileType } from '@/enums/tile-type.enum';
import { MapState } from '@/store/map/map.state';

@Component({
  selector: 'exp-board-view',
  templateUrl: './board-view.component.html',
  styleUrls: ['./board-view.component.scss'],
})
export class BoardViewComponent {
  @Select(MapState.getTileMap) tileMap$: Observable<TileMap>;
  @Select(MapState.getGridSize) gridSize$: Observable<number>;

  colorMap: Record<TileType, string> = {
    [TileType.EMPTY]: 'peru',
    [TileType.FOREST]: 'green',
    [TileType.MONSTERS]: 'purple',
    [TileType.MOUNTAIN]: 'grey',
    [TileType.VILLAGE]: 'red',
    [TileType.WATER]: 'cornflowerblue',
    [TileType.WHEAT]: 'yellow',
  };

  DEFAULT_GRID_SIZE = DEFAULT_GRID_SIZE;

  log(index: number): void {
    console.log(index);
  }
}
