
const cols = ['0', '8', '7', '6', '5', '4', '3', '2', '1', '0'];
const rows = ['0', 'a', 'b', 'c', 'd', 'f', 'e', 'g', 'h', '0'];

const playerSet = 'white';


let renderer = {

    /**
     * Метод рисует игровое поле.
     */
    renderBoard() {
        let result = this.generateBoard();
        document.body.insertAdjacentHTML("afterbegin", result);
        this.decorateBoard();
    },

    /**
     * Метод генерирует игровое поле на основании размеров в константах.
     * @returns {string} сгенерированный html-код таблицы(игрового поля).
     */
    generateBoard() {
        let board = "";
        let cellColor = '';
        let cellNumber = 0;

        cols.forEach(col => {
            board += "<tr>";
            rows.forEach(row => {
                if (col === '0' || row === '0') {
                    cellColor = 'edgeCell';
                } else if (cellNumber % 2 === 0) {
                    cellColor = 'darkCell';
                    cellNumber++;
                } else {
                    cellColor = 'lightCell';
                    cellNumber++; 
                }
                board += `<td data-x="${row}" data-y="${col}" class="${cellColor}"></td>`;
            });
            cellNumber++;
            board += "</tr>";
        });
        return `<table><tbody>${board}</tbody></table>`;
    },


    /**
     * Метод подписывает строки и столбцы игрового поля
     *
     */
    decorateBoard() {
        const edgeCells = document.querySelectorAll('.edgeCell');
        edgeCells.forEach(cell => {
            if (cell.dataset.y === "0" && cell.dataset.x !== "0") {
                cell.innerText =  cell.dataset.x;
            }
            if (cell.dataset.x === "0" && cell.dataset.y !== "0") {
                cell.innerText =  cell.dataset.y;
            }
        });
    }

};