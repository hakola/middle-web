var level1 = [0, 0, 0, 0, 0,
			  0, 0, 1, 0, 0,
			  0, 2, -1, 2, 0,
			  0, 0, 1, 0, 0,
			  0, 0, 0, 0, 0];

var level2 = [0, 0, 0, 0, 0,
			  0, 3, 3, 1, 0,
			  0, 2, -1, 2, 0,
			  0, 1, 2, 1, 0,
			  0, 0, 0, 0, 0];

var level3 = [0, 0, 1, 2, 3,
			  0, 0, 2, 0, 2,
			  1, 2, -1, 2, 2,
			  0, 0, 2, 0, 0,
			  0, 0, 1, 0, 0];

var level4 = [1, 1, 2, 1, 1,
			  1, 0, 2, 0, 1,
			  2, 0, -1, 0, 2,
			  2, 0, 2, 0, 3,
			  1, 1, 2, 1, 2];

var level5 = [0, 0, 2, 3, 3,
			  0, 0, 5, 3, 1,
			  4, 3, -1, 0, 0,
			  3, 3, 0, 0, 0,
			  1, 3, 0, 0, 0];

var level6 = [1, 1, 0, 0, 0,
			  3, 5, 2, 1, 0,
			  0, 2, -1, 2, 0,
			  0, 1, 2, 5, 2,
			  0, 0, 0, 4, 2];


var level7 = [2, 3, 2, 1, 1,
			  1, 0, 5, 0, 2,
			  2, 3, -1, 0, 2,
			  0, 0, 5, 0, 3,
			  0, 0, 1, 2, 4];

var level8 = [1, 1, 2, 1, 1,
			  3, 0, 2, 0, 3,
			  5, 1, -1, 1, 5,
			  2, 0, 2, 0, 3,
			  1, 1, 2, 3, 2];

var level9 = [2, 3, 0, 3, 4,
			  2, 2, 0, 4, 6,
			  3, 0, -1, 0, 2,
			  3, 0, 2, 0, 2,
			  2, 2, 4, 3, 2];

var level10 = [0, 0, 1, 2, 3, 0,
			  0, 0, 2, 0, 3, 0,
			  1, 2, -1, 2, 3, 0,
			  0, 0, 2, 0, 3, 0,
			  0, 0, 1, 0, 3, 0,
			  0, 0, 2, 0, 3, 0];

var levels = [level1, level2, level3, level4, level5, level6, level7, level8, level9];

var levelNumber = 0;
var score = 0;
var finished = false;
var canMove = true;

document.onkeydown = checkKey;

var restartButton = document.getElementById("restart-button");
restartButton.addEventListener("click", function(){
	grid.loadLevel(levels[levelNumber], 
	levelNumber);
	updateScore(score = 0);
	canMove = true;}
);

var sideLength = Math.sqrt(levels[levelNumber].length);
var grid = new Board(sideLength)

/* Setting up the application */
grid.populateBoard();
grid.loadLevel(levels[levelNumber], levelNumber);
updateScore(score);


function setSideLength(s) {
	sideLength = s;
}

function updateScore(score) {
	var scoreContainer = document.getElementById("score-container");
	scoreContainer.innerHTML = "SCORE: "+score;
}

var $gameboard = document.getElementById("gameboard");

$(gameboard).bind('touchmove', function(e) {
    e.preventDefault();
});

/* Executing moves */
$("#gameboard").on('swipeleft', function(e) {
	   if(canMove) {
       		moveLeft(grid);
       		finished = checkGameStatus(grid, sideLength, grid.player);
       	}
       if(finished) {
       		++levelNumber;
       		setSideLength(Math.sqrt(levels[levelNumber].length));
       		grid.loadLevel(levels[levelNumber], levelNumber);
       }
});

$("#gameboard").on('swipedown', function(e) { 
	   if(canMove) {
       		moveDown(grid);
       		finished = checkGameStatus(grid, sideLength, grid.player);
       	}
       if(finished) {
       		++levelNumber;
       		setSideLength(Math.sqrt(levels[levelNumber].length));
       		grid.loadLevel(levels[levelNumber], levelNumber);
       }
});

$("#gameboard").on('swipeup', function(e) { 
	   if(canMove) {
       		moveUp(grid);
       		finished = checkGameStatus(grid, sideLength, grid.player);
       	}
       if(finished) {
       		++levelNumber;
       		setSideLength(Math.sqrt(levels[levelNumber].length));
       		grid.loadLevel(levels[levelNumber], levelNumber);
       }
});

$("#gameboard").on('swiperight', function(e) { 
	   if(canMove) {
       		moveRight(grid);
       		finished = checkGameStatus(grid, sideLength, grid.player);
       	}
       if(finished) {
       		++levelNumber;
       		setSideLength(Math.sqrt(levels[levelNumber].length));
       		grid.loadLevel(levels[levelNumber], levelNumber);
       }
});

/* Executing moves */
function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
	   if(canMove) {
       		moveUp(grid);
       		finished = checkGameStatus(grid, sideLength, grid.player);
       	}
      	if(finished) {
       		++levelNumber;
       		setSideLength(Math.sqrt(levels[levelNumber].length));
       		grid.loadLevel(levels[levelNumber], levelNumber);
      	}
    }
    else if (e.keyCode == '40') {
	   if(canMove) {
       		moveDown(grid);
       		finished = checkGameStatus(grid, sideLength, grid.player);
       	}
       if(finished) {
       		++levelNumber;
       		setSideLength(Math.sqrt(levels[levelNumber].length));
       		grid.loadLevel(levels[levelNumber], levelNumber);
       }
    }
    else if (e.keyCode == '37') {
	   if(canMove) {
       		moveLeft(grid);
       		finished = checkGameStatus(grid, sideLength, grid.player);
       	}
       if(finished) {
       		++levelNumber;
       		setSideLength(Math.sqrt(levels[levelNumber].length));
       		grid.loadLevel(levels[levelNumber], levelNumber);
       }
    }
    else if (e.keyCode == '39') {
	   if(canMove) {
       		moveRight(grid);
       		finished = checkGameStatus(grid, sideLength, grid.player);
       	}
       if(finished) {
       		++levelNumber;
       		setSideLength(Math.sqrt(levels[levelNumber].length));
       		grid.loadLevel(levels[levelNumber], levelNumber);
       }
    }
}

/* Moving player */
function moveLeft(grid) {
	// Calculating the position
	var tileNumber = grid.player.yPos*sideLength+grid.player.xPos;

	if(grid.player.xPos > 0 && (grid.board[tileNumber-1].strength > 0 || grid.board[tileNumber-1].name == "middle")) {
		// Save last position/state
		grid.lastState = grid;

		// Moving player and updating variables
		grid.player.xPos -= 1;
		grid.board[tileNumber].hasPlayer = false;
		if(grid.board[tileNumber].strength > 0) {
			score += 2*(grid.board[tileNumber].strength+1);
			updateScore(score);
			grid.board[tileNumber].strength -= 1
		}
		grid.board[tileNumber-1].hasPlayer = true;

		// Updating the grid
		grid.updateRender(tileNumber);
		grid.updateRender(tileNumber-1);
		grid.animatePlayer();
	}
}

function moveRight(grid) {
	// Calculating the position
	var tileNumber = grid.player.yPos*sideLength+grid.player.xPos;

	if(grid.player.xPos < sideLength-1 && (grid.board[tileNumber+1].strength > 0 || grid.board[tileNumber+1].name == "middle")) {
		// Save last position/state
		grid.lastState = grid;

		// Moving player and updating variables
		grid.player.xPos += +1;
		grid.board[tileNumber].hasPlayer = false;
		if(grid.board[tileNumber].strength > 0) {
			score += 2*(grid.board[tileNumber].strength+1);
			updateScore(score);
			grid.board[tileNumber].strength -= 1
		}
		grid.board[tileNumber+1].hasPlayer = true;

		// Updating the grid
		grid.updateRender(tileNumber);
		grid.updateRender(tileNumber+1);
		grid.animatePlayer()
	}
}

function moveUp(grid) {
	// Calculating the position
	var tileNumber = grid.player.yPos*sideLength+grid.player.xPos;

	if(grid.player.yPos > 0 && (grid.board[tileNumber-sideLength].strength > 0 || grid.board[tileNumber-sideLength].name == "middle")) {
		// Save last position/state
		grid.lastState = grid;
		
		// Moving player and updating variables
		grid.player.yPos -= 1;
		grid.board[tileNumber].hasPlayer = false;
		if(grid.board[tileNumber].strength > 0) {
			score += 2*(grid.board[tileNumber].strength+1);
			updateScore(score);
			grid.board[tileNumber].strength -= 1
		}
		grid.board[tileNumber-sideLength].hasPlayer = true;

		// Updating the grid
		grid.updateRender(tileNumber);
		grid.updateRender(tileNumber-sideLength);
		grid.animatePlayer();
	}
}

function moveDown(grid) {
	// Calculating the position
	var tileNumber = grid.player.yPos*sideLength+grid.player.xPos;

	if(grid.player.yPos < sideLength && (grid.board[tileNumber+sideLength].strength > 0 || grid.board[tileNumber+sideLength].name == "middle")) {
		// Save last position/state
		grid.lastState = grid;
		
		// Moving player and updating variables
		grid.player.yPos += 1;
		grid.board[tileNumber].hasPlayer = false;
		if(grid.board[tileNumber].strength > 0) {
			score += 2*(grid.board[tileNumber].strength+1);
			updateScore(score);
			grid.board[tileNumber].strength -= 1
		}
		grid.board[tileNumber+sideLength].hasPlayer = true;

		// Updating the grid
		grid.updateRender(tileNumber);
		grid.updateRender(tileNumber+sideLength);
		grid.animatePlayer();
	}
}

/* Checking game status, basically checking if the game is over or not */
function checkGameStatus (grid, sideLength) {
	var tileNumber = grid.player.yPos*sideLength+grid.player.xPos;
	var isGameOver;
	var tilesLeft = 0;
	if(grid.board[tileNumber].strength == -1) {
		for(i = 0; i < grid.board.length; ++i) {
			if(grid.board[i].strength > 0)
				++tilesLeft;
		}
		if(tilesLeft == 0)
			return true;
	}
	// Player is not on the edges
	if(grid.player.yPos > 0 && grid.player.yPos < sideLength-1 && grid.player.xPos > 0 && grid.player.xPos < sideLength-1) {
		if(grid.board[tileNumber-1].strength == 0 && grid.board[tileNumber+1].strength == 0 && grid.board[tileNumber-sideLength].strength == 0 && 
		   grid.board[tileNumber+sideLength].strength == 0) {
			isGameOver = false;
		}
	}
	// Player is on the top left corner
	else if (grid.player.xPos == 0 && grid.player.yPos == 0) {
		if(grid.board[tileNumber+1].strength == 0 && grid.board[tileNumber+sideLength].strength == 0 ) {
			isGameOver = false;
		}
	}
	// Player is on the bottom left corner
	else if (grid.player.xPos == 0 && grid.player.yPos == sideLength-1) {
		if(grid.board[tileNumber+1].strength == 0 && grid.board[tileNumber-sideLength].strength == 0 ) {
			isGameOver = false;
		}
	}
	// Player is on the top left corner
	else if (grid.player.xPos == sideLength-1 && grid.player.yPos == 0) {
		if(grid.board[tileNumber-1].strength == 0 && grid.board[tileNumber+sideLength].strength == 0 ) {
			isGameOver = false;
		}
	}
	// Player is on the bottom right corner
	else if (grid.player.xPos == sideLength-1 && grid.player.yPos == sideLength-1) {
		if(grid.board[tileNumber-1].strength == 0 && grid.board[tileNumber-sideLength].strength == 0 ) {
			isGameOver = false;
		}
	}
	// Player is somewhere on the left edge
	else if (grid.player.xPos == 0  && grid.player.yPos > 0 && grid.player.yPos < sideLength-1) {
		if(grid.board[tileNumber-sideLength].strength == 0 && grid.board[tileNumber+sideLength].strength == 0 && grid.board[tileNumber+1].strength == 0) {
			isGameOver = false;
		}
	}
	// Player is somewhere on the right edge
	else if (grid.player.xPos == sideLength-1 && grid.player.yPos > 0 && grid.player.yPos < sideLength-1) {
		if(grid.board[tileNumber-sideLength].strength == 0 && grid.board[tileNumber+sideLength].strength == 0 && grid.board[tileNumber-1].strength == 0) {
			isGameOver = false;
		}
	}
	// Player is somewhere on the bottom edge
	else if (grid.player.yPos == sideLength-1 && grid.player.xPos > 0 && grid.player.xPos < sideLength-1) {
		if(grid.board[tileNumber-1].strength == 0 && grid.board[tileNumber+1].strength == 0 && grid.board[tileNumber-sideLength].strength == 0) {
			isGameOver = false;
		}
	}
	// Player is somewhere on the top edge
	else if (grid.player.yPos == 0 && grid.player.xPos > 0 && grid.player.xPos < sideLength-1) {
		if(grid.board[tileNumber-1].strength == 0 && grid.board[tileNumber+1].strength == 0 && grid.board[tileNumber+sideLength].strength == 0) {
			isGameOver = false;
		}
	}
	if(isGameOver == false) {
		var boardElement = document.getElementById("gameboard");
		boardElement.className = "gameover"

		var message = document.getElementById("message");

		var text = document.createElement("p");
		text.className = "game-over";
		text.innerHTML = "Game over!";
		message.appendChild(text);

		var tryAgain = document.createElement("a");
		tryAgain.className = "try-again-button";
		tryAgain.innerHTML = "Try again";
		message.appendChild(tryAgain);

		tryAgain.addEventListener("click", function(){
				grid.loadLevel(levels[levelNumber], 
				levelNumber);
				updateScore(score = 0);
				canMove = true;}
		);

		canMove = false;
	}
}