const figureSet = [
    {name: 'queen', x: 'd', y: '1', sign: '&#9813'},
    {name: 'king', x: 'e', y: '1', sign: '&#9812'},
    {name: 'rook', x: 'a', y: '1', sign: '&#9814'},
    {name: 'rook', x: 'h', y: '1', sign: '&#9814'},
    {name: 'bishop', x: 'c', y: '1', sign: '&#9815'},
    {name: 'bishop', x: 'f', y: '1', sign: '&#9815'},
    {name: 'knight', x: 'b', y: '1', sign: '&#9816'},
    {name: 'knight', x: 'g', y: '1', sign: '&#9816'},
    {name: 'pawn', x: 'a', y: '2', sign: '&#9817'},
    {name: 'pawn', x: 'b', y: '2', sign: '&#9817'},
    {name: 'pawn', x: 'c', y: '2', sign: '&#9817'},
    {name: 'pawn', x: 'd', y: '2', sign: '&#9817'},
    {name: 'pawn', x: 'e', y: '2', sign: '&#9817'},
    {name: 'pawn', x: 'f', y: '2', sign: '&#9817'},
    {name: 'pawn', x: 'g', y: '2', sign: '&#9817'},
    {name: 'pawn', x: 'h', y: '2', sign: '&#9817'},
    {name: 'queen', x: 'd', y: '8', sign: '&#9819'},
    {name: 'king', x: 'e', y: '8', sign: '&#9818'},
    {name: 'rook', x: 'a', y: '8', sign: '&#9820'},
    {name: 'rook', x: 'h', y: '8', sign: '&#9820'},
    {name: 'bishop', x: 'c', y: '8', sign: '&#9821'},
    {name: 'bishop', x: 'f', y: '8', sign: '&#9821'},
    {name: 'knight', x: 'b', y: '8', sign: '&#9822'},
    {name: 'knight', x: 'g', y: '8', sign: '&#9822'},
    {name: 'pawn', x: 'a', y: '7', sign: '&#9823'},
    {name: 'pawn', x: 'b', y: '7', sign: '&#9823'},
    {name: 'pawn', x: 'c', y: '7', sign: '&#9823'},
    {name: 'pawn', x: 'd', y: '7', sign: '&#9823'},
    {name: 'pawn', x: 'e', y: '7', sign: '&#9823'},
    {name: 'pawn', x: 'f', y: '7', sign: '&#9823'},
    {name: 'pawn', x: 'g', y: '7', sign: '&#9823'},
    {name: 'pawn', x: 'h', y: '7', sign: '&#9823'}
];



let position = {


    /**
     * Метод расставляет фигуры на поле 
     *
     */
    setup () {
        figureSet.forEach(figure => {
            let cell = document.querySelector(`[data-x="${figure.x}"][data-y="${figure.y}"]`);
            cell.innerHTML = figure.sign;
        });
    }

}