var diagram = document.getElementById("grid");


//création de la ligne impaire
var newOddRow = document.createElement("div");
newOddRow.className = "odd-row";

//création des cellules
var newCell = document.createElement("div");
newCell.className = "cell";

//copie des céllules pour en avoir 5
var newCell2 = newCell.cloneNode(true);
var newCell3 = newCell.cloneNode(true);
var newCell4 = newCell.cloneNode(true);
var newCell5 = newCell.cloneNode(true);

//Insertion de la ligne impaire
newOddRow.appendChild(newCell);
newOddRow.appendChild(newCell2);
newOddRow.appendChild(newCell3);
newOddRow.appendChild(newCell4);
newOddRow.appendChild(newCell5);

diagram.appendChild(newOddRow);


//Création de la ligne paire
var newPairRow = document.createElement("div");
newPairRow.className = "pair-row";

//les cellules
var newCell1bis = newCell.cloneNode(true);
var newCell2bis = newCell.cloneNode(true);
var newCell3bis = newCell.cloneNode(true);
var newCell4bis = newCell.cloneNode(true);
var newCell5bis = newCell.cloneNode(true);

//Insertion des cellules dans la ligne paire
newPairRow.appendChild(newCell1bis);
newPairRow.appendChild(newCell2bis);
newPairRow.appendChild(newCell3bis);
newPairRow.appendChild(newCell4bis);
newPairRow.appendChild(newCell5bis);

diagram.appendChild(newPairRow);


//création de la ligne impaire n°2
var newOddRow2 = document.createElement("div");
newOddRow2.className = "odd-row";

//les cellules
var newCell6 = newCell.cloneNode(true);
var newCell7 = newCell.cloneNode(true);
var newCell8 = newCell.cloneNode(true);
var newCell9 = newCell.cloneNode(true);
var newCell10 = newCell.cloneNode(true);

//Insertion de la ligne impaire
newOddRow2.appendChild(newCell6);
newOddRow2.appendChild(newCell7);
newOddRow2.appendChild(newCell8);
newOddRow2.appendChild(newCell9);
newOddRow2.appendChild(newCell10);

diagram.appendChild(newOddRow2);


//Création de la ligne paire n°2
var newPairRow2 = document.createElement("div");
newPairRow2.className = "pair-row";

//les cellules
var newCell6bis = newCell.cloneNode(true);
var newCell7bis = newCell.cloneNode(true);
var newCell8bis = newCell.cloneNode(true);
var newCell9bis = newCell.cloneNode(true);
var newCell10bis = newCell.cloneNode(true);

//Insertion des cellules dans la ligne paire
newPairRow2.appendChild(newCell6bis);
newPairRow2.appendChild(newCell7bis);
newPairRow2.appendChild(newCell8bis);
newPairRow2.appendChild(newCell9bis);
newPairRow2.appendChild(newCell10bis);

diagram.appendChild(newPairRow2);


//création de la ligne impaire n°3
var newOddRow3 = document.createElement("div");
newOddRow3.className = "odd-row";

//les cellules
var newCell11 = newCell.cloneNode(true);
var newCell12 = newCell.cloneNode(true);
var newCell13 = newCell.cloneNode(true);
var newCell14 = newCell.cloneNode(true);
var newCell15 = newCell.cloneNode(true);

//Insertion de la ligne impaire
newOddRow3.appendChild(newCell11);
newOddRow3.appendChild(newCell12);
newOddRow3.appendChild(newCell13);
newOddRow3.appendChild(newCell14);
newOddRow3.appendChild(newCell15);

diagram.appendChild(newOddRow3);
