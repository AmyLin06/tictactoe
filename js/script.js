






$("#button1").click(function() {
    performLogic("#button1","#tile1");
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
});

var player = "O"
var totalTurn = 0
var gameOver = false 

function performLogic(buttonId, tileId){
    if(!gameOver){
        $(buttonId).hide();
        $(timeId).html(player);
        verticalWin();
        horizontalWin();
        diagonalWin();
        changePLayer();
        tieGame();
    }
}

function changePLayer(){
    totalTurn = totalTurn + 1
    if(player == "O"){
        player = "X"
    }
    else {
        player = "O"
    }
}

function verticalWin(){

}

function horizontalWin(){

}

function diagonalWin(){

}

function tieGame(){

}

function win(t1, t2, t3){
    if(t1 == t2 == t3){
        $(t1).html() == $(t2).html() 
    }
}