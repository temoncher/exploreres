import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BoardViewComponent } from './board-view/board-view.component';
import { GameComponent } from './game.component';

@NgModule({
  declarations: [GameComponent, BoardViewComponent],
  imports: [
    CommonModule, RouterModule.forChild([{ path: '**', component: GameComponent }]),
  ],
})
export class GameModule { }
