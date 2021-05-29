import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { NaughtComponent } from './naught/naught.component';
import { CrossComponent } from './cross/cross.component';



@NgModule({
  declarations: [
    BoardComponent,
    NaughtComponent,
    CrossComponent
  ],
  exports: [
    BoardComponent
  ],
  imports: [
    CommonModule
  ],
})
export class GameModule { }
