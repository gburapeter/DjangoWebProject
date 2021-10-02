
document.addEventListener('DOMContentLoaded', function () {


    var abChess = {};
    var options = {
        animated: false
    };
    abChess = new AbChess("chessboard", options);
    abChess.setFEN();
});