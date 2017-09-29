const tbl = $("#pixel_canvas");

// Function that clears previous grid and builds new grid based on inputs

$("#sizePicker").submit(function(event) {
    event.preventDefault();
    //create table
    let tbl = document.getElementById("pixel_canvas");
    //clear previously created grid before building new grid
    tbl.innerHTML = "";
    //take value input for width and height
    let height = $("#input_height").val();
    let width = $("#input_width").val();
    //iterate over values and add them to width and height
    //this is not adding more rows/cells
    for (let i = 0; i < height; i++) {
        let row = tbl.insertRow();

        let j = 0;

        while (j < width) {
            let cell = row.insertCell();
            cell.onclick = function() { 
                let colour = document.getElementById("colorPicker").value;
                cell.style.backgroundColor = colour;
            };
            j++;
        }
    }
});
