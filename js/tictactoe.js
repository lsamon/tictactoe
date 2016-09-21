//fill grid with blanks
// replace the empty character on the grid with X or 0

//create grid

var grid = [
      ['*', '*', '*'],
      ['*', '*', '*'],
      ['*', '*', '*']
    ];

  // var drawGrid = function () {
  //   console.table(grid);
  //   return grid;
  // }

var playerTurn = true;
var play = function (x,y) {
  var location = grid[x][y];
  if(location === '*' && playerTurn === true) {
    grid[x][y] = 'X';
    playerTurn = false;
  }
  else {
    grid[x][y] = 'O';
    playerTurn = true;
  }
 // for(var i = 0; i < grid.length; i++) {
 //   for(var j = 0; j < grid[i].length; j++) {
 //     var coordinates = grid[i][j];
 //     var location = grid[x][y];
 //     if(coordinates === location && coordinates === '*') {
 //       grid[i][j] = 'X';
 //     }
 //   }
 // }
 console.table(grid);
};

var rowWin = function() {
  var rowToBeChecked = '';
  for(var i = 0; i < grid.length; i++) {
    var row = grid[i];
    var rowStr = row.join('');
    for(var j = 0; j < grid[i].length; j++) {
      rowToBeChecked += grid[i][j];
      if(j === row.length - 1) {
        if(rowStr === rowToBeChecked && rowStr !== '***') {
          console.log('winner');
        }
      }
    }
  }
}

rowWin();

var player = function (name,score) {
  return {
    name: name,
    score: score,
    win: function () {

    }
  }
};
