// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const number_of_rects = 100;
function setup() {
  createCanvas(windowWidth, windowHeight);
  generateterrain;
}

function draw() {
  background(220);
  for(let theRect of terrain){
    rect(theRect.x, theRect.y, theRect.w, theRect.h);
  }
}
function generateterrain(){
  let width = width/number_of_rects;
  for(let i = 0; i < 100; i++){
    let somerect = spawnRectangle(20*i , 300, 500);
    terrain.push(somerect);

  }
}
function spawnRectangle(leftside, rectwidth, rectheight){
  let theRect = {
    x: leftside,
    y: height - rectheight,
    w: rectwidth,
    h: rectheight,
  };
}
