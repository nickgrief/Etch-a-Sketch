const rgb2hex = (r, g, b) => {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};
// Big box with boxes in a column with boxes inside them in a row. (big brain)

const body = document.querySelector("body");

function createGrid(size = 2) {
  const prew_grid = document.querySelector(".grid");
  if (prew_grid != null) {
    prew_grid.remove();
  }
  // Make grid
  const grid = document.createElement("div");

  // Make horizontal holders
  for (let i = 0; i < size; i++) {
    let row = document.createElement("div");
    for (let j = 0; j < size; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.addEventListener("mouseenter", () => {
        var randomColor =
          "#" + Math.floor(Math.random() * 16777215).toString(16);
        if (cell.classList.contains("howered")) {
          let brightness = cell.getAttribute("brightness");
          brightness *= 0.8;
          cell.setAttribute("brightness", `${brightness}`);
          cell.style.filter = `brightness(${brightness})`;
        } else {
          cell.classList.add("howered");
          cell.setAttribute("brightness", "1");
          cell.style.backgroundColor = randomColor;
          cell.style.filter = `brightness(${brightness})`;
        }
      });
      cell.addEventListener("touchstart", () => {
        cell.classList.add("howered");
      });
      row.appendChild(cell);
    }
    row.classList.add("row");
    grid.appendChild(row);

    // Add grid to page (do it after all styling)
    grid.classList.add("grid");
    body.appendChild(grid);
  }
}

// Add button on top of the screen
const new_grid = document.createElement("button");
new_grid.textContent = "NEW GRID";
new_grid.addEventListener("click", () => {
  let size = parseInt(prompt("Enter the size of new grid:"));
  if (isNaN(size)) {
    alert("Size should be a whole number :)");
  } else if (size < 1 || size > 100) {
    alert("Size outside of reasonable bounds :3");
  } else {
    createGrid(size);
  }
});
body.appendChild(new_grid);

// Courtesy of css-tricks.com
function LightenDarkenColor(col, amt) {
  var usePound = false;

  if (col[0] == "#") {
    col = col.slice(1);
    usePound = true;
  }

  var num = parseInt(col, 16);

  var r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  var b = ((num >> 8) & 0x00ff) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  var g = (num & 0x0000ff) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}

// Courtesy of delgtstack
function ColorToHex(color) {
  var hexadecimal = color.toString(16);
  return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

function ConvertRGBtoHex(red, green, blue) {
  return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
}
