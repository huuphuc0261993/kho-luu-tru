
// xây dựng bảng;
var wall = "wall";
var floor = "floor";
var target = "target";

var gamer = "gamer";
var box = "box";
var gBoard = buildBoard();


function buildBoard() {
    var board = new Array(15);
    for (var i = 0; i < board.length; i++) {
        board[i] = new Array(15)
    }

    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            if (i == 0 || i == board.length - 1 || j == 0 || j == board[0].length - 1) {
                board[i][j] = wall;

            } else {
                board[i][j] = floor;
            }
        }
    }
    board[3][7] = target;
    board[2][9] = gamer;
    board[3][8] = box;
    console.log(board);
    return board;
}
//in bảng
function printBoard() {

    var tableBoard = document.getElementById('tableBoard');
    var strHTML = " ";
    for (var i = 0; i < gBoard.length; i++) {
        strHTML += "<tr>";
        for (var j = 0; j < gBoard[0].length; j++) {

            var cellClass;
            if (gBoard[i][j] == floor) {
                cellClass = floor;
            } else if (gBoard[i][j] == wall) {
                cellClass = wall;
            } else if (gBoard[i][j] == target) {
                cellClass = target;
            } else if (gBoard[i][j] == gamer) {
                cellClass = gamer;
            } else if (gBoard[i][j] == box) {
                cellClass = box;
            }
            strHTML += "<td class='cell " + cellClass + "'></td>";
        }
        strHTML += "</tr>";
    }
    tableBoard.innerHTML = strHTML;
}
