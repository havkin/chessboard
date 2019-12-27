const rowsCount = 8;
const colsCount = 8;

const cols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '0'];
const rows = ['0', 'a', 'b', 'c', 'd', 'f', 'e', 'g', 'h', '0'];


let renderer = {

    /**
     * Метод рисует игровое поле.
     */
    renderBoard() {
        let result = this.generateBoard();
        document.body.insertAdjacentHTML("afterbegin", result);
        // this.renderUserPosition(player);
    },

    /**
     * Метод генерирует игровое поле на основании размеров в константах.
     * @returns {string} сгенерированный html-код таблицы(игрового поля).
     */

    // generateBoard() {
    //     let board = "";
    //     for (let y = 0; y < rowsCount; y++) {
    //         board += "<tr>";
    //         for (let x = 0; x < colsCount; x++) {
    //             board += `<td data-x="${x}" data-y="${y}"></td>`;
    //         }
    //         board += "</tr>";
    //     }
    //     return `<table><tbody>${board}</tbody></table>`;
    // },

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

    decorateBoard() {

    }

};