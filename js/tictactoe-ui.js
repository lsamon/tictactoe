$(document).ready(function () {
  //Setup global Variables
  var gameOver = false;
  var totalMoves = 0;
  var xpos = 0;
  var ypos = 0;
  $('.player-win-count.one').html(game.player1.name + ': ' + game.player1.winCount);
  $('.player-win-count.two').html(game.player2.name + ': ' + game.player2.winCount);
  $('span').html(game.counter);

  //This function is used to update the UI eventime a DIV is clicked
  var updateUI = function(xpos, ypos) {
      if(grid[xpos][ypos] === game.player1.sign) {
        var img = $('<img src="images/x.png">');
        var $div = $('div').find("[xpos='" + xpos + "'][ypos='" + ypos + "']");
        $div.append(img);
      }
      if(grid[xpos][ypos] === game.player2.sign) {
        var img = $('<img src="images/o.png">');
        var $div = $('div').find("[xpos='" + xpos + "'][ypos='" + ypos + "']");
        $div.append(img);
      }
    };

    //This function is used to clear the board
    var clearBoard = function() {
      gridReset();
      game.player1.winner = false;
      game.player2.winner = false;
      game.player1.turn = true;
      game.player1.moves = 0;
      game.player2.moves = 0;
      gameOver = false;
      $('.square > img').remove(); //clear squares
      $('#winner').html(''); //clear winner div
      $('#display-turn').html(''); //clear turns div
      $('#game-board').css({"opacity":"1"}); // reset opacity to full
    };

// This is a function that reacts to when a square gets clicked
  $('.square').on('click', function() {

    //Return early if game over is true
    if (gameOver){
      $('span').html(game.counter);
      return;
    }

    xpos = $(this).attr('xpos');
    ypos = $(this).attr('ypos');
    $(this).html('');

//This just adds a message once the game is over
    var winnerMessage = function(message) {
      game.counter++;
      $('span').html(game.counter);
      $('#winner').html(message);
      $('#winner').hide().fadeIn(2000);
      $('#game-board').css({"opacity":"0.3"});
      $('#display-turn').html('');
      gameOver = true;
    };

    //Determine Player's turn function
    var playerTurn = function () {
      if(game.player1.turn) {
        $('#display-turn').html(game.player1.name +"'s turn ");
        console.log('Player 1 turn: ',game.player1.turn);
      }
      else {
        $('#display-turn').html(game.player2.name +"'s turn ");
        console.log('Player 2 turn: ',game.player2.turn);
      }
    };

    //Determine winner by checking the current value of winner from player object
    var determineWinner = function () {
      if(game.player1.winner) {
        winnerMessage(game.player1.name + ' Wins');
        game.player1.winCount ++;
        $('.player-win-count.one').html(game.player1.name + ': ' + game.player1.winCount);
      }
      else if(game.player2.winner) {
        winnerMessage(game.player2.name + ' Wins');
        game.player2.winCount ++;
        $('.player-win-count.two').html(game.player2.name + ': ' + game.player2.winCount);
      }
      else if(totalMoves === 9) {
        winnerMessage('Draw, Try Again');
      }
    };
    // End Determine winner

// Here we run the functions that play the game determine playerturn, determine winner and also updating the UI
    playerTurn();
    game.play(xpos, ypos);
    playerTurn();
    game.win();
    determineWinner();
    updateUI(xpos, ypos);
    totalMoves = game.player1.moves + game.player2.moves;

  });

  // Start Set Players Names and update screen accordingly
  $('button.one').on('click', function(){
    game.player1.name = $('.user.one').val();
    $('.player-win-count.one').html(game.player1.name + ': ' + game.player1.winCount);
    updateUI(xpos, ypos);
    $('.user.one').val('');
  });

  $('button.two').on('click', function(){
    game.player2.name = $('.user.two').val();
    $('.player-win-count.two').html(game.player2.name + ': ' + game.player2.winCount);
    updateUI(xpos, ypos);
    $('.user.two').val('');
  });
  //end Set player names

//This section will clear up the game board and the winner variable
  $('.reset').on('click', clearBoard);
//This section has the function to reset the whole game with the scores
  $('.reset-game').on('click', function(){
    clearBoard();
    game.player1.winCount = 0;
    game.player2.winCount = 0;
    game.counter = 0
    $('.player-win-count.one').html(game.player1.name + ': ' + game.player1.winCount);
    $('.player-win-count.two').html(game.player2.name + ': ' + game.player2.winCount);
    $('span').html(game.counter);
  });

});
