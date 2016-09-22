var grid = []; // Define empty grid

// function to reset the grid evertime the game is over or at the start of a game
var gridReset = function() {
  grid = [
      ['*', '*', '*'],
      ['*', '*', '*'],
      ['*', '*', '*']
    ];
};

gridReset();

// Creating game structure
var game = {
  player1: {
    name: 'Player1',
    turn: true,
    moves: 0,
    sign: 'X',
    win: 'XXX',
    winner: false,
    winCount: 0
  },
  player2: {
    name: 'Player2',
    turn: true,
    moves: 0,
    sign: 'O',
    win: 'OOO',
    winner: false,
    winCount: 0
  },
  counter: 0,
  play: function(x, y) {
    if(this.player1.turn) {
      if(grid[x][y] === '*' || grid[x][y] !== this.player2.sign) {
        grid[x][y] = this.player1.sign;
        this.player1.turn = false;
        this.player1.moves ++;
        this.player2.turn = true;
      }
    }
    else {
      if(grid[x][y] === '*' || grid[x][y] !== this.player1.sign) {
        grid[x][y] = this.player2.sign;
        this.player2.turn = false;
        this.player2.moves ++;
        this.player1.turn = true;
      }
    }
    console.table(grid);
  },
  winRow: function() {
    for(var i = 0; i < grid.length; i++) {
      var row = grid[i];
      var rowStr = row.join('');
      console.log(rowStr);
      if(game.player1.win === rowStr) {
        game.player1.winner = true;
      }
      if(game.player2.win === rowStr) {
        game.player2.winner = true;
      }
    }
  },
  winCol: function() {
      for(var i = 0; i < grid.length; i++) {
        var row = grid[i];
        var col = [];
        for(var j = 0; j < row.length; j++) {
          col.push(grid[j][i]);
        }
        var colStr = col.join('');
        if(game.player1.win === colStr) {
          game.player1.winner = true;
        }
        if(game.player2.win === colStr) {
          game.player2.winner = true;
        }
      }
  },
  winDiag: function() {
    var pattern1 = grid[0][0] + grid[1][1] + grid[2][2];
    var pattern2 = grid[0][2] + grid[1][1] + grid[2][0];
    if(game.player1.win === pattern1 || game.player1.win === pattern2) {
      game.player1.winner = true;
    }
    if(game.player2.win === pattern1 || game.player2.win === pattern2) {
      game.player2.winner = true;
    }
  },
  win: function() {
    this.winRow();
    this.winCol();
    this.winDiag();
  }
};
