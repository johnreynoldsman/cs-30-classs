// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let theBubbles = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for(let bubble of theBubbles){
    bubble.x = noise(bubble.time) * width;
    bubble.y = noise(bubble.time + bubble.buffer) * height;
    circle(bubble.x, bubble.y, bubble.diameter)
  }
}
function spawnBubble(){
  let _time = random(1000)
  let _buffer = random(1000)
  let theBubble  = (
    time = _time,
    buffer = _buffer,
    x; noise(time) * width, 
    y; noise(time + buffer) * height, 
    diameter; random(20, 50),
  );
  theBubble.push()
}
