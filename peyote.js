var diagram = document.getElementById("grid");

function CreateANewOddRow() {
    var oddRow = document.createElement("div");
    oddRow.className = "odd-row";

    for (let nbOfCell = 0; nbOfCell < 6; nbOfCell++){
        var cell = addANewCell();
        oddRow.appendChild(cell);
    }
    
    /*var cell = addANewCell();

    var cell2 = cell.cloneNode(true);
    var cell3 = cell.cloneNode(true);
    var cell4 = cell.cloneNode(true);
    var cell5 = cell.cloneNode(true);
    oddRow.appendChild(cell);
    oddRow.appendChild(cell2);
    oddRow.appendChild(cell3);
    oddRow.appendChild(cell4);
    oddRow.appendChild(cell5);*/

    return oddRow;
}

for (let nbOfLine = 0; nbOfLine < 5 ; nbOfLine++) {

    if (numIsPair(nbOfLine) == false){

        var oddRow = CreateANewOddRow();

        diagram.appendChild(oddRow);
    }
    else {
        console.log(numIsPair(nbOfLine));
        var pairRow = document.createElement("div");
        pairRow.className = "pair-row";

        var cell = addANewCell();

        var cell2bis = cell.cloneNode(true);
        var cell3bis = cell.cloneNode(true);
        var cell4bis = cell.cloneNode(true);
        var cell5bis = cell.cloneNode(true);

        pairRow.appendChild(cell);
        pairRow.appendChild(cell2bis);
        pairRow.appendChild(cell3bis);
        pairRow.appendChild(cell4bis);
        pairRow.appendChild(cell5bis);

        diagram.appendChild(pairRow);
    }

}

function numIsPair (num) {
    return (num & 1) ? true : false ;
}

function addANewCell() {
    var cell = document.createElement("div");
    cell.className = "cell";
    return cell;
}


