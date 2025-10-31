// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
const CELL_SIZE = 30;
const open_tile = 0;
const wall = 1;
const character = 5;
let grid;
let rows;
let cols;

function setup() {
  createCanvas(windowWidth * 0.9, windowHeight * 0.9);
  cols = Math.floor(width/CELL_SIZE);
  rows = Math.floor(height/CELL_SIZE);
  grid = generateRandomGrid(cols, rows);
}

function draw() {
  background("blue");
  displayGrid();
  grid = generateRandomGrid(cols, rows);
}

function mousePressed() {
  let x = Math.floor(mouseX/CELL_SIZE);
  let y = Math.floor(mouseY/CELL_SIZE);

  //self
  toggleCell(x ,y);

  //neighbours
//   toggleCell(x + 1, y);
//   toggleCell(x - 1, y);
//   toggleCell(x, y - 1);
//   toggleCell(x, y + 1);
}

function toggleCell(x, y) {
  //make sure the cell you're toggling actually exists!
  if (x >= 0 && x < cols && y >= 0 && y < rows) {
    if (grid[y][x] === open_tile) {
      grid[y][x] = wall;
    }
    else if (grid[y][x] === wall) {
      grid[y][x] = open_tile;
    }
  }
}

function keyPressed() {
  if (key === "r") {
    grid = generateRandomGrid(cols, rows);
  }
  else if (key === "e") {
    grid = generateEmptyGrid(cols, rows);
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
      else if (grid[y][x] === character) {
        fill("red");
      }
      square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
    }
  }
}

function generateRandomGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      //pick 0 or 1 randomly
      if (random(100) < 50) {
        newGrid[y].push(open_tile);
      }
      else {
        newGrid[y].push(wall);
      }
    }
  }
  return newGrid;
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