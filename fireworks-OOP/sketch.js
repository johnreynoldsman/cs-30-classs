// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Particle{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.radius = 3;
    this.r = 255;
    this.g = 0;
    this.b = 0;
    this.opacity = 255;
  }

  display(){
    noStroke();
    fill(this.r, this.g, this.b, this.opacity);
    circle(this.x, this.y, this.radius*2);
  }

  update(){
    this.x += this.dx;
    this.y += this.dy;
    
    this.opacity --;
  }
  isDead(){
    return this.opacity <= 0;
  }
}

const NUMBER_PER_CLICK = 100;
let theFirwroks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  for(let aFirework of theFirwroks){
    if( aFirework.isDead()){
      let index = theFirwroks.indexOf(aFirework);
      theFirwroks.splice(index, 1);
    }
    else{
      aFirework.update();
      aFirework.display();
    }
  }
}
function mousePressed(){
  for(let i = 0; i < NUMBER_PER_CLICK; i++){
    let someFirework = new Particle(mouseX, mouseY);
    theFirwroks.push(someFirework);
  }
}
