let r = 0;
let g = 0;
let b = 0;
let myColor;
function setup() {
  createCanvas(windowWidth, windowHeight);

}
//not done yet
function draw() {
  let square;
  let myColor = color(r, g, b);
  background(r, g, b);
  textAlign(CENTER);
  textSize(16); 
  if (keyIsDown(82)){
    r += 1;
  }
  if (keyIsDown(84)){
    r -= 1;
  }
  if (keyIsDown(71)){
    g += 1;
  }
  if (keyIsDown(72)){
    g -= 1;
  }
  if (keyIsDown(66)){
    b += 1;
  }
  if (keyIsDown(78)){
    b -= 1;
  }
  text(myColor.toString('#rrggbb'), 50, 50);
  
  
  
}
function 