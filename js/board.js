function Board(sideLength) {
	this.sideLength = sideLength;
	this.board = [];
	this.player = {xPos: 2, yPos: 2};
	this.lastState = null;
}

/* Populates board with tiles */
Board.prototype.populateBoard = function () {
	var player = document.createElement("div");
	player.id = "player";
	var boardElement = document.getElementById("gameboard");
	boardElement.appendChild(player);
	var number = 0;

	for(i = 0; i < this.sideLength; ++i) {
		var rowContainer = document.createElement("div");
		rowContainer.className = "row-container";
		var boardElement = document.getElementById("gameboard");
		boardElement.appendChild(rowContainer);

		for(j = 0; j < this.sideLength; ++j) {
			var tileName = "tile"+number;

			if(number == (sideLength*sideLength-1)/2) {
				this.board[number] = new Tile(-1, j, i, true, "middle");
			}
			else
				this.board[number] = new Tile(0, j, i, false, tileName);
			this.createRender(number, rowContainer);
			++number;
		}
		if(i != this.sideLength-1) {
			var row = document.createElement("div");
			row.className = "row";
			var boardElement = document.getElementById("gameboard");
			boardElement.appendChild(row);
		}

	}
}

/* Adds an id and a class to the tile so that it can be rendered correctly */
Board.prototype.createRender = function(number, rowContainer) {
	var render = document.createElement("div");
	render.id = this.board[number].name;
	render.className = "strength"+this.board[number].strength;

	var boardElement = document.getElementById("gameboard");
	rowContainer.appendChild(render);

	if(this.board[number].name == "middle") {
		render.innerHTML = "MIDDLE";
	}
}

/* The player is rendered by using different class names */
Board.prototype.animatePlayer = function() {
	var player = document.getElementById("player");
	player.className = "tile-"+this.player.xPos+"-"+this.player.yPos;
}


/* Loads the level from and calls different functions */
Board.prototype.loadLevel = function(level, levelNumber) {
	var gameboard = document.getElementById("gameboard");
	gameboard.className = "";
	var message = document.getElementById("message");
	while (message.firstChild) {
    	message.removeChild(message.firstChild);
	}
	var levelContainer = document.getElementById("level-container");
	levelContainer.innerHTML = "LEVEL: "+(levelNumber+1);

	for(i = 0; i < level.length; ++i) {
		if(this.board[i].hasPlayer == true && this.board[i].name != "middle")
			this.board[i].hasPlayer = false;
		if(this.board[i].name == "middle") {
			this.board[i].hasPlayer = true;
			this.player.xPos = this.board[i].xPos;
			this.player.yPos = this.board[i].yPos;
			this.animatePlayer();
		}
		this.board[i].strength = level[i];
		this.updateRender(i);
	} 
}

/* Updates tile render */
Board.prototype.updateRender = function(number) {
	var render = document.getElementById(this.board[number].name);

	if(this.board[number].name == "middle") {
		render.innerHTML = "";
			
	}
	else {
		render.className = "strength"+this.board[number].strength;
		render.innerHTML = this.board[number].strength;
	}
}