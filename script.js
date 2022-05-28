// Big box with boxes in a column with boxes inside them in a row. (big brain)

const body = document.querySelector("body");

// Make grid
const grid = document.createElement("div");

// Make horizontal holders
for (let i = 0; i < 16; i++) {
  let row = document.createElement("div");
  for (let j = 0; j < 16; j++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    row.appendChild(cell);
  }
  row.classList.add("row");
  grid.appendChild(row);
}

// Add grid to page (do it after all styling)
grid.classList.add("grid");
body.appendChild(grid);
