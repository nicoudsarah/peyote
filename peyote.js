var diagram = document.getElementById("grid");

for (let nbOfLine = 0; nbOfLine < 5 ; nbOfLine++) {

    if (numIsPair(nbOfLine) == false){
        var oddRow = document.createElement("div");
        oddRow.className = "odd-row";

        var cell = document.createElement("div");
        cell.className = "cell";

        var cell2 = cell.cloneNode(true);
        var cell3 = cell.cloneNode(true);
        var cell4 = cell.cloneNode(true);
        var cell5 = cell.cloneNode(true);

        oddRow.appendChild(cell);
        oddRow.appendChild(cell2);
        oddRow.appendChild(cell3);
        oddRow.appendChild(cell4);
        oddRow.appendChild(cell5);

        diagram.appendChild(oddRow);
    }
    else {
        console.log(numIsPair(nbOfLine));
        var pairRow = document.createElement("div");
        pairRow.className = "pair-row";

        var cell1bis = document.createElement("div");
        cell1bis.className = "cell";

        var cell2bis = cell1bis.cloneNode(true);
        var cell3bis = cell1bis.cloneNode(true);
        var cell4bis = cell1bis.cloneNode(true);
        var cell5bis = cell1bis.cloneNode(true);

        pairRow.appendChild(cell1bis);
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


