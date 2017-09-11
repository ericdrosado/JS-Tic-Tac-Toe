var WinConditions = require ('../src/WinConditions');
var ComputerLogic = require ('../src/ComputerLogic');

describe("ComputerLogic", function() {

  beforeEach(function() {
    winConditions = new WinConditions();
    computerLogic = new ComputerLogic(winConditions);
  });

  describe("#pickSpace", function() {
    it ("will return the center position if it is not chosen by the player", function() {
      var gameBoard = ["X","1","2","3","4","5","6","7","8"];
      expect(computerLogic.pickSpace(gameBoard)).toEqual(4);
    });
    it ("will block a top horizontal win", function() {
      var gameBoard = ["X","X","2","O","4","5","6","7","8"];
      expect(computerLogic.pickSpace(gameBoard)).toEqual(2);
    });
    it ("will block a middle horizontal win", function() {
      var gameBoard = ["0","1","O","3","X","X","6","7","8"];
      expect(computerLogic.pickSpace(gameBoard)).toEqual(3);
    });
    it ("will block a bottom horizontal win", function() {
      var gameBoard = ["0","1","2","3","O","5","6","X","X"];
      expect(computerLogic.pickSpace(gameBoard)).toEqual(6);
    });
    it ("will block a left vertical win", function() {
      var gameBoard = ["X","1","2","X","O","5","6","7","8"];
      expect(computerLogic.pickSpace(gameBoard)).toEqual(6);
    });
    it ("will block a middle vertical win", function() {
      var gameBoard = ["0","X","2","3","X","5","6","7","O"];
      expect(computerLogic.pickSpace(gameBoard)).toEqual(7);
    });
    it ("will block a right vertical win", function() {
      var gameBoard = ["0","1","X","3","O","5","6","7","X"];
      expect(computerLogic.pickSpace(gameBoard)).toEqual(5);
    });
    it ("will block a backward diagonal win", function() {
      var gameBoard = ["0","1","2","O","X","5","6","7","X"];
      expect(computerLogic.pickSpace(gameBoard)).toEqual(0);
    });
    it ("will block a forward diagonal win", function() {
      var gameBoard = ["0","1","X","3","X","5","6","7","O"];
      expect(computerLogic.pickSpace(gameBoard)).toEqual(6);
    });
    it ("will place the token to win if there is no imminent loss", function() {
      var gameBoard = ["O","X","X","3","4","5","X","7","O"];
      expect(computerLogic.pickSpace(gameBoard)).toEqual(4);
    });
    it ("will play a game and O will win or tie", function() {

      play = function(gameBoard) {
        while (! winConditions.isGameOver(gameBoard) ) {
          var availableSpots = computerLogic.getAvailableSpots(gameBoard);
          var mockPlayerMoveIndex = Math.floor(Math.random() * (availableSpots.length + 1));
          var mockPlayerMove = availableSpots[mockPlayerMoveIndex];
          gameBoard[mockPlayerMove] = "X";
          if (winConditions.isGameOver(gameBoard)) {
            return gameBoard;
          } else {
              var computerMove = computerLogic.pickSpace(gameBoard);
              gameBoard[computerMove] = "O";
          }
        }
        return gameBoard;
      }

      computerWinOrTie = function(endOfGameBoard) {
        return "O" === endOfGameBoard[0] && endOfGameBoard[0] === endOfGameBoard[1] && endOfGameBoard[1] === endOfGameBoard[2] ||
        "O" === endOfGameBoard[3] && endOfGameBoard[3] === endOfGameBoard[4] && endOfGameBoard[4] === endOfGameBoard[5] ||
        "O" === endOfGameBoard[6] && endOfGameBoard[6] === endOfGameBoard[7] && endOfGameBoard[7] === endOfGameBoard[8] ||
        "O" === endOfGameBoard[0] && endOfGameBoard[0] === endOfGameBoard[3] && endOfGameBoard[3] === endOfGameBoard[6] ||
        "O" === endOfGameBoard[1] && endOfGameBoard[1] === endOfGameBoard[4] && endOfGameBoard[4] === endOfGameBoard[7] ||
        "O" === endOfGameBoard[2] && endOfGameBoard[2] === endOfGameBoard[5] && endOfGameBoard[5] === endOfGameBoard[8] ||
        "O" === endOfGameBoard[0] && endOfGameBoard[0] === endOfGameBoard[4] && endOfGameBoard[4] === endOfGameBoard[8] ||
        "O" === endOfGameBoard[2] && endOfGameBoard[2] === endOfGameBoard[4] && endOfGameBoard[4] === endOfGameBoard[6] ||
        winConditions.isTie(endOfGameBoard);
      }

      var gameBoard = ["0","1","2","3","4","5","6","7","8"];
      var endOfGameBoard = play(gameBoard);

      expect(computerWinOrTie(endOfGameBoard)).toEqual(true);
    });
  });

  describe("#getAvailableSpots", function() {
    it ("will return the available spots '5,6,7' on a game board", function() {
      var gameBoard = ["X","O","X","O","X","5","6","7","8"];
      expect(computerLogic.getAvailableSpots(gameBoard)).toEqual([5, 6, 7, 8]);
    });
    it ("will return the available spots '4,6,7' on a game board", function() {
      var gameBoard = ["X","O","X","O","4","X","6","7","8"];
      expect(computerLogic.getAvailableSpots(gameBoard)).toEqual([4, 6, 7, 8]);
    });
    it ("will return no available spots on a game board", function() {
      var gameBoard = ["X","O","X","O","O","X","X","O","X"];
      expect(computerLogic.getAvailableSpots(gameBoard)).toEqual([]);
    });
  });

  describe("#getScore", function() {
    it ("will return the correct score object for a 'X' player win", function() {
      var depth = 1;
      var gameBoard = ["X","O","X","O","X","O","X","7","8"];
      var marker = "O"
      expect(computerLogic.getScore(depth, gameBoard, marker)).toEqual({score: -9});
    });
    it ("will return the correct score object for a 'O' player win", function() {
      var depth = 2;
      var gameBoard = ["X","O","X","3","O","5","X","O","8"];
      var marker = "X"
      expect(computerLogic.getScore(depth, gameBoard, marker)).toEqual({score: 8});
    });
    it ("will return the correct score object for a 'tie'", function() {
      var depth = 3;
      var gameBoard = ["X","O","X","X","O","X","O","X","O"];
      var marker = "X"
      expect(computerLogic.getScore(depth, gameBoard, marker)).toEqual({score: 0});
    });
  });

});
