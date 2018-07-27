//Store default values for game progress
var gameProgress = [
        ["1","2","3"],
        ["4","5","6"],
        ["7","8","9"]
    ];

$("#ticTacToeImg").click( function() {
    alert("Clicked"); 
});

function checkForWin() {
    console.log(gameProgress[0][0] + " " + gameProgress[0][1] + " " + gameProgress[0][2]);
    console.log(gameProgress[1][0] + " " + gameProgress[1][1] + " " + gameProgress[1][2]);
    console.log(gameProgress[2][0] + " " + gameProgress[2][1] + " " + gameProgress[2][2]);
    if (gameProgress[0][0] === gameProgress[0][1] && gameProgress[0][0] === gameProgress[0][2]) {
        alert(gameProgress[0][0] + " wins!");
    }
    else if (gameProgress[1][0] === gameProgress[1][1] && gameProgress[1][0] === gameProgress[1][2]) {
        alert(gameProgress[1][0] + " wins!");
    }
    else if (gameProgress[2][0] === gameProgress[2][1] && gameProgress[2][0] === gameProgress[2][2]) {
        alert(gameProgress[2][0] + " wins!");
    }
    else if (gameProgress[0][0] === gameProgress[1][0] && gameProgress[0][0] === gameProgress[2][0]) {
        alert(gameProgress[0][0] + " wins!");
    }
    else if (gameProgress[0][1] === gameProgress[1][1] && gameProgress[0][1] === gameProgress[2][1]) {
        alert(gameProgress[0][1] + " wins!");
    }
    else if (gameProgress[0][2] === gameProgress[1][2] && gameProgress[0][2] === gameProgress[2][2]) {
        alert(gameProgress[0][2] + " wins!");
    }
    else if (gameProgress[0][0] === gameProgress[1][1] && gameProgress[0][0] === gameProgress[2][2]) {
        alert(gameProgress[0][0] + " wins!");
    }
    else if (gameProgress[2][0] === gameProgress[1][1] && gameProgress[2][0] === gameProgress[0][2]) {
        alert(gameProgress[2][0] + " wins!");
    }
}

//turn assigns itself once first move is placed and switches between X and O each time currentTurn() is called
var currentTurn = turn =>  {
    console.log("Turn is: " + this.turn);
    if (this.turn === "Xturn") {
        this.turn = "Oturn";
        return "O";
    }
    else {
        this.turn = "Xturn";
        return "X";
    }
}

$("#area1Id").click( function() {
    var contentToFillSquare = currentTurn();
    $("#ticTacToeBoard").append("<img id='area1ImageSpot' src='images/" + contentToFillSquare + ".png' alt='circleImg'/>");
    gameProgress[0][0] = contentToFillSquare;
    checkForWin();
});

$("#area2Id").click( function() {
    var contentToFillSquare = currentTurn();
    $("#ticTacToeBoard").append("<img id='area2ImageSpot' src='images/" + contentToFillSquare + ".png' alt='circleImg'/>");
    gameProgress[0][1] = contentToFillSquare;
    checkForWin();
});

$("#area3Id").click( function() {
    var contentToFillSquare = currentTurn();
    $("#ticTacToeBoard").append("<img id='area3ImageSpot' src='images/" + contentToFillSquare + ".png' alt='circleImg'/>");
    gameProgress[0][2] = contentToFillSquare;
    checkForWin();
});

$("#area4Id").click( function() {
    var contentToFillSquare = currentTurn();
    $("#ticTacToeBoard").append("<img id='area4ImageSpot' src='images/" + contentToFillSquare + ".png' alt='circleImg'/>");
    gameProgress[1][0] = contentToFillSquare;
    checkForWin();
});

$("#area5Id").click( function() {
    var contentToFillSquare = currentTurn();
    $("#ticTacToeBoard").append("<img id='area5ImageSpot' src='images/" + contentToFillSquare + ".png' alt='circleImg'/>");
    gameProgress[1][1] = contentToFillSquare;
    checkForWin();
});

$("#area6Id").click( function() {
    var contentToFillSquare = currentTurn();
    $("#ticTacToeBoard").append("<img id='area6ImageSpot' src='images/" + contentToFillSquare + ".png' alt='circleImg'/>");
    gameProgress[1][2] = contentToFillSquare;
    checkForWin();
});

$("#area7Id").click( function() {
    var contentToFillSquare = currentTurn();
    $("#ticTacToeBoard").append("<img id='area7ImageSpot' src='images/" + contentToFillSquare + ".png' alt='circleImg'/>");
    gameProgress[2][0] = contentToFillSquare;
    checkForWin();
});

$("#area8Id").click( function() {
    var contentToFillSquare = currentTurn();
    $("#ticTacToeBoard").append("<img id='area8ImageSpot' src='images/" + contentToFillSquare + ".png' alt='circleImg'/>");
    gameProgress[2][1] = contentToFillSquare;
    checkForWin();
});

$("#area9Id").click( function() {
    var contentToFillSquare = currentTurn();
    $("#ticTacToeBoard").append("<img id='area9ImageSpot' src='images/" + contentToFillSquare + ".png' alt='circleImg'/>");
    gameProgress[2][2] = contentToFillSquare;
    checkForWin();
});