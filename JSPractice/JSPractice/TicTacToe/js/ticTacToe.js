var gameProgress = [
        ["","",""],
        ["","",""],
        ["","",""]
    ];

$("#ticTacToeImg").click( function() {
    alert("Clicked"); 
});

function checkForWin() {
    
}

//turn assigns itself once first move is placed
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
    console.log("Area 1 clicked");
    var contentToFillSquare = currentTurn();
    $("#ticTacToeBoard").append("<img id='area1ImageSpot' src='images/" + contentToFillSquare + ".png' alt='circleImg'/>");
    gameProgress[0][0] = contentToFillSquare;
    console.log("Filling square 1 with: " + gameProgress[0][0]);
    
});

$("#area2Id").click( function() {
    console.log("Area 2 clicked");
    var contentToFillSquare = currentTurn();
    $("#ticTacToeBoard").append("<img id='area2ImageSpot' src='images/" + contentToFillSquare + ".png' alt='circleImg'/>");
    gameProgress[0][1] = contentToFillSquare;
    console.log("Filling square 2 with: " + gameProgress[0][1]);
});

$("#area3Id").click( function() {
    console.log("Area 3 clicked");
    var contentToFillSquare = currentTurn();
    $("#ticTacToeBoard").append("<img id='area3ImageSpot' src='images/" + contentToFillSquare + ".png' alt='circleImg'/>");
    gameProgress[0][2] = contentToFillSquare;
    console.log("Filling square 3 with: " + gameProgress[0][2]);
});

$("#area4Id").click( function() {
    console.log("Area 4 clicked");
    var contentToFillSquare = currentTurn();
    $("#ticTacToeBoard").append("<img id='area4ImageSpot' src='images/" + contentToFillSquare + ".png' alt='circleImg'/>");
    gameProgress[1][0] = contentToFillSquare;
    console.log("Filling square 4 with: " + gameProgress[1][0]);
});

$("#area5Id").click( function() {
    console.log("Area 5 clicked");
    var contentToFillSquare = currentTurn();
    $("#ticTacToeBoard").append("<img id='area5ImageSpot' src='images/" + contentToFillSquare + ".png' alt='circleImg'/>");
    gameProgress[1][1] = contentToFillSquare;
    console.log("Filling square 5 with: " + gameProgress[1][1]);
});

$("#area6Id").click( function() {
    console.log("Area 6 clicked");
    var contentToFillSquare = currentTurn();
    $("#ticTacToeBoard").append("<img id='area6ImageSpot' src='images/" + contentToFillSquare + ".png' alt='circleImg'/>");
    gameProgress[1][2] = contentToFillSquare;
    console.log("Filling square 6 with: " + gameProgress[1][2]);
});

$("#area7Id").click( function() {
    console.log("Area 7 clicked");
    var contentToFillSquare = currentTurn();
    $("#ticTacToeBoard").append("<img id='area7ImageSpot' src='images/" + contentToFillSquare + ".png' alt='circleImg'/>");
    gameProgress[2][0] = contentToFillSquare;
    console.log("Filling square 7 with: " + gameProgress[2][0]);
});

$("#area8Id").click( function() {
    console.log("Area 8 clicked");
    var contentToFillSquare = currentTurn();
    $("#ticTacToeBoard").append("<img id='area8ImageSpot' src='images/" + contentToFillSquare + ".png' alt='circleImg'/>");
    gameProgress[2][1] = contentToFillSquare;
    console.log("Filling square 8 with: " + gameProgress[2][1]);
});

$("#area9Id").click( function() {
    console.log("Area 9 clicked");
    var contentToFillSquare = currentTurn();
    $("#ticTacToeBoard").append("<img id='area9ImageSpot' src='images/" + contentToFillSquare + ".png' alt='circleImg'/>");
    gameProgress[2][2] = contentToFillSquare;
    console.log("Filling square 9 with: " + gameProgress[2][2]);
});