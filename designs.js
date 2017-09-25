const tbl = $("#pixel_canvas");

// Function that clears previous grid and builds new grid based on inputs

// do I need to write it as $("#submit").addEventListener("click", function() {}); ??

$("#submit").on("click", function(makeGrid) {

//create table

  var tbl = document.createElement("table");
  $("body").append(tbl);

  //clear previously created grid before building new grid

  tbl.innerHTML = "";
//take value input for width and height

  let height = "input_height.value";
  let width = "input_width.value"; 

//iterate over values and add them to width and height

  for (let i = 0; i < height; i++) {
    const rows = document.createElement("tr"); //creates <tr> element

    let j = 0;

    while (j < width) {
      const cells = document.createElement("td"); // creates <td> element

      j++;

      rows.appendChild(cells); // appends td's to tr's
    }

    tbl.appendChild(rows); //appends tr's to tbl
  }

});

//do I have to call this function here since this function is based on an event listener?

//Traverse the table and call the changeColour function on the selected table cell
const changeColor = () => {
  for (let i = 0; i < tbl.rows.length; i++) {
    for (let j = 0; j < tbl.rows[i].cells.length; j++)
      tbl.rows[i].cells[j].onclick = function() {
        changeColor(this);
      };
  }
};

const changeColor = cell => {
  const colour = document.getElementById("colorPicker").value;

  cell.style.backgroundColor = colour;
};

const validateForm = () => {
  return false;
};
