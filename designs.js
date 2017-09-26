const tbl = $("#pixel_canvas");

// Function that clears previous grid and builds new grid based on inputs

$('#sizePicker').submit(function(event) {
    event.preventDefault();
    //create table

    var tbl = document.getElementById("pixel_canvas");
    //clear previously created grid before building new grid

    tbl.innerHTML = "";
    //take value input for width and height

    let height = $("#input_height").val();
    let width = $("#input_width").val();

    //iterate over values and add them to width and height

    for (let i = 0; i < height; i++) {
        let row = tbl.insertRow();

        let j = 0;


        while (j < width) {
            let cell = row.insertCell();
            cell.onclick(function(changeColor) {
                    for (let i = 0; i < tbl.rows.length; i++) {
                        for (let j = 0; j < tbl.rows[i].cells.length; j++)
                            tbl.rows[i].cells[j].onclick = function() {
                                changeColor(this);
                            };
    }
          };
              )
            j++;
        }
    }
});
