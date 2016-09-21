$(document).ready(function () {
  console.log('Ready');
  var playerTurn = true;
  $('.square').on('click', function() {
    var xpos = $(this).attr('xpos');
    var ypos = $(this).attr('ypos');
    console.log(xpos);
    console.log(ypos);
    $(this).html('');

    if(playerTurn) {
      var img = $('<img src="images/x.png">');
      $(this).append(img);
      playerTurn = false;
    }
    else {
      var img = $('<img src="images/o.png">');
      $(this).append(img);
      playerTurn = true;
    }
    play(xpos, ypos);
  });

});
