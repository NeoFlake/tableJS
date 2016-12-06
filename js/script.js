const people = [
    {firstname: "Landry", surname: "O'hara"},
    {firstname: "Sharon", surname: "O'Neil"},
    {firstname: "Emerson", surname: "O'Conneil"},
    {firstname: "Roberto", surname: "O'Maley"}
];

let cellHeaderElt = document.createElement("th");
    cellHeaderElt.innerHTML = "Surnom";
document.querySelector("tr").appendChild(cellHeaderElt);

for (let i = 0; i < people.length; i++) {

  let rowElt = document.createElement("tr");
  let celElt = document.createElement("td");
      celElt.innerHTML = people[i].firstname;
  let cel2Elt = document.createElement("td");
      cel2Elt.innerHTML = people[i].surname;

                            rowElt.appendChild(celElt);
                            rowElt.appendChild(cel2Elt);
    document.querySelector("tbody").appendChild(rowElt);
}
