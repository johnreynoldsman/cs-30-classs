let r = 0;
let g = 0;
let b = 0;
function setup() {
  createCanvas(width, height);

}
//not done yet
function draw() {
  let mycolor = (r, g, b);
  background(r, g, b);
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
  
  
  
}