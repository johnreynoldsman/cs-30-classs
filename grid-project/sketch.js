// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


const CELL_SIZE = 20;
const whiteSquare = 0;
const blackSquare = 1;
const redSquare = 2;
const blueSquare = 3;
const brownSquare = 4;
const yellowSquare = 5;
const tanSquare = 6;
const purpleSquare = 7;
const orangeSquare = 8;
const greenSquare = 9;
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
  background(0);
  displayGrid();
}
function mousePressed() {
  let x = Math.floor(mouseX/CELL_SIZE);
  let y = Math.floor(mouseY/CELL_SIZE);

  toggleCell(x ,y);
}
function toggleCell(x, y) {
  grid[y][x] = blackSquare;
    
}

function keyPressed() {
  let x = Math.floor(mouseX/CELL_SIZE);
  let y = Math.floor(mouseY/CELL_SIZE);
  if (key === "e"){
    grid = generateEmptyGrid(cols, rows);
  }
  else if (key === "r"){
    grid[y][x] = redSquare;
    
  }
  else if (key === "b"){
    grid[y][x] = blueSquare;
    
  }
  else if (key === "w"){
    grid[y][x] = whiteSquare;
  }
  else if (key === "y"){
    grid[y][x] = yellowSquare;
  }
  else if (key === "t"){
    grid[y][x] = tanSquare;
  }
  else if (key === "p"){
    grid[y][x] = purpleSquare;
  }
  else if (key === "g"){
    grid[y][x] = greenSquare;
  }
  else if (key === "o"){
    grid[y][x] = orangeSquare;
  }
  else if (key === " "){
    grid[y][x] = brownSquare;
  }
}

function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === whiteSquare) {
        fill("white");
      }
      else if (grid[y][x] === blackSquare) {
        fill("black");
      }
      else if (grid[y][x] === redSquare) {
        fill("red");
      }
      else if (grid[y][x] === blueSquare){
        fill ("blue");
      }
      else if (grid[y][x] === brownSquare){
        fill ("#643200");
      }
      else if (grid[y][x] === yellowSquare){
        fill ("yellow");
      }
      else if (grid[y][x] === tanSquare){
        fill ("#f0cd95");
      }
      else if (grid[y][x] === greenSquare){
        fill ("green");
      }
      else if (grid[y][x] === orangeSquare){
        fill ("orange");
      }
      else if (grid[y][x] === purpleSquare){
        fill ("purple");
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
      newGrid[y].push(whiteSquare);
    }
  }
  return newGrid;
}