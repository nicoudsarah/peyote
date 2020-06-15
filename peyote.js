var diagram = document.getElementById("grid");

for (let nbOfLine = 0; nbOfLine < 5 ; nbOfLine++) {

    if (numIsPair(nbOfLine) == false){

        var oddRow = CreateANewOddRow();

        diagram.appendChild(oddRow);
    }
    else {
        var pairRow = CreateANewPairRow();

        diagram.appendChild(pairRow);
    }

}

function numIsPair (num) {
    return (num & 1) ? true : false ;
}

function CreateANewOddRow() {
    var oddRow = document.createElement("div");
    oddRow.className = "odd-row";

    for (let nbOfCell = 0; nbOfCell < 5; nbOfCell++){
        var cell = addANewCell();
        oddRow.appendChild(cell);
    }

    return oddRow;
}

function CreateANewPairRow() {
    var pairRow = document.createElement("div");
    pairRow.className = "pair-row";

    for (let nbOfCell = 0; nbOfCell < 5; nbOfCell++){
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


