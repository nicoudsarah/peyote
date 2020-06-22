
function CreateGrid() {
    var body = document.body;

    var newGrid = document.createElement("div");
    newGrid.id = "new-grid";
    newGrid.className = "new-grid"

    var nbOfLine = 5
    var nbOfCell = 5

    for (let line = 0; line < nbOfLine ; line++) {

        if (numIsPair(line) == false) {
            var oddRow = CreateANewOddRow(nbOfCell);

            newGrid.appendChild(oddRow);
        }
        else {
            var pairRow = CreateANewPairRow(nbOfCell);

            newGrid.appendChild(pairRow);
        }
    }

    body.appendChild(newGrid);

}

function numIsPair (num) {
    return (num & 1) ? true : false ;
}

function CreateANewOddRow(nbOfCell) {
    var oddRow = document.createElement("div");
    oddRow.className = "odd-row";

    for (let i = 0; i < nbOfCell; i++){
        var cell = addANewCell();
        oddRow.appendChild(cell);
    }

    return oddRow;
}

function CreateANewPairRow(nbOfCell) {
    var pairRow = document.createElement("div");
    pairRow.className = "pair-row";

    for (let i = 0; i < nbOfCell; i++){
        var cell = addANewCell();
        pairRow.appendChild(cell);
    }

    return pairRow;
}

function addANewCell() {
    var cell = document.createElement("div");
    cell.className = "cell";
    return cell;
}


