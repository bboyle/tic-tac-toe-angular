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
  winner: TicTacToePlayer | null = null;


  detectGameOver(row: number, column: number) {
    // check for winner on row
    this.winner = this.getRowWinner(row);
    if (this.winner) {
      this.gameOver = true;
      return;
    }

    // check for winner on column
    // check for winner on diagonal

    // if grid is filled, game is over
    if (this.grid.every(rows => rows.every(value => value !== null))) {
      this.gameOver = true;
      // stalemate?
    }
  }


  newGame() {
    this.winner = null;
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


  private getRowWinner(row: number): TicTacToePlayer | null {
    const values = this.grid[row];
    if (values[0] !== null && values.every(value => value === values[0])) {
      return values[0];
    }

    return null;
  }
}
