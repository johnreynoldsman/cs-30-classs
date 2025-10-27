// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let theGrid = [
  [1,0,1,0],
  [0,0,1,1],
  [1,1,0,0],
  [0,1,0,1]
];
let cellSize;
              

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (width < height){
    cellSize = width/4;
  }
  else{
    cellSize = height/4;
  }
}  
function draw() {
  background(220);
  showgrid();
}
function showgrid(){
  for(let y = 0; y < 4; y++){
    for(let x = 0; x < 4; x++){
      square(x * cellSize, y * cellSize, cellSize);
    }
  }
}
