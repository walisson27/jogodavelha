document.addEventListener('DOMContentLoaded', () =>{

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) =>{
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event) {

    let square = event.target;
    let postion = square.id;

    if (handleMove(postion)) {

        setTimeout(() => {
            alert("O jogo acabou - O Vencedor foi " + playerTime);
        }, 10);
        
    };
    updateSquares();

}

function updateSquares() {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let postion = square.id;
        let symbol = board[postion];

        if (Symbol != '') {
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })
}