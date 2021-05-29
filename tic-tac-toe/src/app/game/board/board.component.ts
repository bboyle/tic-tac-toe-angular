import { Component } from '@angular/core';

// a tic tac toe board is an array of rows
// each cell can be marked by player 1 or 2, or be null (not yet played)
type TicTacToePlayer = 1 | 2;
type TicTacToeValue = TicTacToePlayer | null;
type TicTacToeBoard = TicTacToeValue[][];

@Component({
  selector: 'tictac-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  gameOver = false;

  // need to eventually protect this from changes via browser dev tools
  grid: TicTacToeBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];

  player: TicTacToePlayer = 1;


  detectGameOver(row: number, column: number) {
    // if grid is filled, game is over
    if (this.grid.every(rows => rows.every(value => value !== null))) {
      this.gameOver = true;
      // stalemate?
    }
  }


  newGame() {
    this.player = 1;
    this.grid.forEach(row => row.fill(null));
    this.gameOver = false;
  }


  play(row: number, column: number, player: TicTacToePlayer) {
    if (!Array.isArray(this.grid[row]) || this.grid[row][column] !== null) return;
    this.grid[row][column] = player;
    this.player = this.player === 1 ? 2 : 1;
    this.detectGameOver(row, column);
  }
}
