// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


const CELL_SIZE = 20;
const open_tile = 0;
const wall = 1;
const redsquare = 5;
let grid;
let rows;
let cols;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = Math.floor(width/CELL_SIZE);
  rows = Math.floor(height/CELL_SIZE);
  grid = generateEmptyGrid(cols, rows);
}

function draw() {
  background("blue");
  displayGrid();
}
function mousePressed() {
  let x = Math.floor(mouseX/CELL_SIZE);
  let y = Math.floor(mouseY/CELL_SIZE);


  toggleCell(x ,y);
}
function toggleCell(x, y) {
  if (x >= 0 && x < cols && y >= 0 && y < rows) {
    if (grid[y][x] === redsquare) {
      grid[y][x] = wall;
    }
    else if (grid[y][x] === wall) {
      grid[y][x] = open_tile;
    }
    else if (grid[y][x] === open_tile) {
      grid[y][x] = redsquare;
    }
  }
}

function keyPressed() {
  if (key === "e") {
    grid = generateEmptyGrid(cols, rows);
  }
  else if (key === "r"){
    ;
  }
}

function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === open_tile) {
        fill("white");
      }
      else if (grid[y][x] === wall) {
        fill("black");
      }
      else if (grid[y][x] === redsquare) {
        fill("red");
      }
      square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
    }
  }
}

function generateEmptyGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      newGrid[y].push(open_tile);
    }
  }
  return newGrid;
}