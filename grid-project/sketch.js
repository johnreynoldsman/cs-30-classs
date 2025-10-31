// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


const CELL_SIZE = 20;
const RENDER_ON_FRAME = 5;
let grid;
let rows;
let cols;
let autoplayon = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = Math.floor(width/CELL_SIZE);
  rows = Math.floor(height/CELL_SIZE);
  grid = generateRandomGrid(cols, rows);
}

function draw() {
  background(220);
  if (autoplayon && frameCount % RENDER_ON_FRAME === 0) {
    grid = updategrid();
  }
  displayGrid();
}

function mousePressed() {
  let x = Math.floor(mouseX/CELL_SIZE);
  let y = Math.floor(mouseY/CELL_SIZE);

  toggleCell(x ,y);

}

function toggleCell(x, y) {
  if (x >= 0 && x < cols && y >= 0 && y < rows) {
    if (grid[y][x] === 0) {
      grid[y][x] = 1;
    }
    else if (grid[y][x] === 1) {
      grid[y][x] = 0;
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
  else if (key === " "){
    grid = updategrid();
  }
  else if (key === "a") {
    autoplayon = !autoplayon;
  }
}
function updategrid(){
  let nextTurn = generateEmptyGrid(cols, rows);

  for(let y = 0; y < rows; y ++){
    for(let x = 0; x < cols; x++){
      let neighbours = 0;

      for(let i = -1; i <= 1; i++){
        for(let j = -1; j <= 1; j ++){
          if (x + j >= 0 && x + j < cols && y+i  >= 0 && y+i < rows){
            neighbours += grid[y+i][x+j];
          }
        }
      }
      neighbours -= grid[y][x];

      if (grid[y][x] === 1){
        if(neighbours === 2 || neighbours === 3){
          nextTurn[y][x] = 1;
        }
        else{
          nextTurn[y][x] = 0;
        }
      }
      if(grid[y][x] === 0){
        if(neighbours === 3){
          nextTurn[y][x] = 1;
        }
        else{
          nextTurn[y][x] = 0;
        }
      }
    }
  }
  return nextTurn;
}
function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      else if (grid[y][x] === 1) {
        fill("black");
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
      newGrid[y].push(0);
    }
  }
  return newGrid;
}