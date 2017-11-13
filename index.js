// Make a command line tic-tac-toe game from scratch for two players. 
// Expected features
// ===============
// * Minimal UI that redraws the board and makes clear whose turn it is, each turn.
// * Players can submit moves (assume, admittedly unrealistically, that both players are sitting at the same keyboard).
// * Win detection - detect and display who won

// Bonus / stretch goals (any or all of the following)
// =======================================
// * Structure your code such that the UI can be turned easily into a native mobile app (iOS say) without having to rewrite the core game logic.
// * Implement win detection with a functional rather than iterative style.
// * Between moves, rotate the board 90 degrees counter-clockwise. The moves "fall" due to "gravity", post-rotation.

// Implementation instructions
// =======================
// * Create the project from scratch. Don't just clone an existing project.
// * This includes writing configuration files for any dependencies and test framework setup.
// * You should have a reasonably thorough suite of unit tests using a real unit test framework.
// * Use the editor of your choice.
// * Init a git repo for this project.
// * Push the repo up to github.
// * Make small commits as you go to illustrate your thought process and be able to back out changes easily.
// * Don't forget to push your final solution up to Github.
// * Add a professional-looking README file with installation and usage instructions.

// Try your best to work on this challenge without referring to outside resources. However, if you have to look things up online, go ahead. 

function prompt(question, callback) {
  var stdin = process.stdin;
  var stdout = process.stdout;

  stdin.resume();
  stdout.write(question);

  stdin.once('data', function (data) {
    callback(data.toString().trim());
  });
}

// prompt('Whats your name?', function (input) {
//   console.log(input);
//   process.exit();
// });


function displayBoard (board) {
  for (var i = 0; i < board.length; i += 3) {
    console.log(board[i], board[i + 1], board[i + 2]);
  }
}

function playerInput () {
  var marker;

  while (marker !== 'X' || marker !== 'O') {
    prompt('Player 1: Do you want to be X or O?', function(input) {
      if (input !== 'X' || input !== '0') {
        console.log('Please select a valid choice');
        playerInput();
      } else {

      }
    })
  }
}

function placeMarker (board, marker, position) {
  board[position] = marker;
}

function winCheck (board, marker) {
  var winCombo = [ 
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6] ];

  var markPos = [];

  for (var i = 0; i < board.length; i++) {
    if (board[i] === marker) {
      markPos.push(i);
    }
  }

}

function chooseFirst () {

}

function spaceCheck (board, position) {

}

function fullBoardCheck (board) {

}

function playerChoice (board) {

}

function startNewGame () {
  while (true) {
    var theBoard = ['*', '*', '*', '*', '*', '*', '*', '*', '*'];
    var gameOn = true;
    var turn = chooseFirst();
    console.log(turn, 'will go first');

    while (gameOn) {
      if (turn === 'Player 1') {
        console.log('Player 1\'s Turn');
        displayBoard(theBoard);
      }
    }
  }
}

// var theBoard = ['*', '*', '*', '*', '*', '*', '*', '*', '*'];
// displayBoard(theBoard);
