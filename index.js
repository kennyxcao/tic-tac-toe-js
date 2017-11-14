var prompt = require('readline-sync');

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

// function prompt(question, callback) {
//   var stdin = process.stdin;
//   var stdout = process.stdout;

//   stdin.resume();
//   stdout.write(question);

//   stdin.once('data', function (data) {
//     callback(data.toString().trim());
//   });
// }

// prompt('Whats your name?', function (input) {
//   console.log(input);
//   process.exit();
// });

// var userName = prompt.question('May I have your name? ');
// console.log('Hi ' + userName + '!');

// var userName2 = prompt.question('May I have your name? ');
// console.log('Hi ' + userName2 + '!');


var displayBoard = function (board) {
  for (var i = 0; i < board.length; i += 3) {
    console.log(board[i], board[i + 1], board[i + 2]);
  }
};

var isValidMarker = function (marker) {
  return ['X', 'O'].includes(marker);
};

var playerInput = function () {
  var marker;

  do {
    marker = prompt.question('Player 1: Do you want to be X or O? ');    
  } while (!isValidMarker(marker));

  return (marker === 'X') ? ['X', 'O'] : ['O', 'X'];
};

var placeMarker = function (board, marker, position) {
  board[position] = marker;
};

var winCheck = function (board, marker) {
  var winCombos = [ 
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6] 
  ];

  var markPos = [];

  for (var i = 0; i < board.length; i++) {
    if (board[i] === marker) {
      markPos.push(i);
    }
  }

  for (var j = 0; j < winCombos.length; j++) {
    var combo = winCombos[j];

    if (markPos.includes(combo[0]) && markPos.includes(combo[1]) && markPos.includes(combo[2])) {
      return true;
    }
  }

  return false;
};

var chooseFirst = function () {
  return Math.random() > 0.5 ? 'Player 1' : 'Player 2';
};

var spaceCheck = function (board, position) {
  return !['X', 'O'].includes(board[position - 1]);
};

var fullBoardCheck = function (board) {
  for (var i = 0; i < board.length; i++) {
    if (!['X', 'O'].includes(board[i])) {
      return false;
    }
  }
  return true;
};

var isValidPosition = function (position) {
  return +position >= 1 && +position <= 9;
};

var playerChoice = function (board) {
  var pos = '';

  do {
    pos = prompt.question('Please input your next move (1-9): ');    
  } while (!isValidPosition(pos) || !spaceCheck(board, +pos));

  return +pos - 1;
};

var replay = function() {
  var choice = prompt.question('Play again (Y or N)?');
  return choice[0].toUpperCase() === 'Y';
};

var startNewGame = function () {
  while (true) {
    var [p1, p2] = playerInput();
    var theBoard = ['*', '*', '*', '*', '*', '*', '*', '*', '*'];
    var gameOn = true;
    var turn = chooseFirst();
    var pos;
    console.log(turn, 'will go first');

    while (gameOn) {
      if (turn === 'Player 1') {
        console.log('Player 1\'s Turn');
        displayBoard(theBoard);
        pos = playerChoice(theBoard);
        placeMarker(theBoard, p1, pos);

        if (winCheck(theBoard, p1)) {
          displayBoard(theBoard);
          console.log('Congrats Player 1 Won the Game');
          gameOn = false;
        } else {
          if (fullBoardCheck(theBoard)) {
            displayBoard(theBoard);
            console.log('Tie game');
            gameOn = false;
          } else {
            turn = 'Player 2';
          }
        }
      } else {
        console.log('Player 2\'s Turn');
        displayBoard(theBoard);
        pos = playerChoice(theBoard);
        placeMarker(theBoard, p2, pos);

        if (winCheck(theBoard, p2)) {
          displayBoard(theBoard);
          console.log('Congrats Player 2 Won the Game');
          gameOn = false;
        } else {
          if (fullBoardCheck(theBoard)) {
            displayBoard(theBoard);
            console.log('Tie game');
            gameOn = false;
          } else {
            turn = 'Player 1';
          }
        }
      }
    }

    if (!replay()) {
      console.log('Goodbye!!!');
      break;
    }
  }
};

startNewGame();

// var theBoard = ['*', '*', '*', '*', '*', '*', '*', '*', '*'];
// displayBoard(theBoard);
