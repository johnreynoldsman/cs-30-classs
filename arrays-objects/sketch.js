// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let myarray = [];
let theColor = 'white';
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function keyPressed(){
  if (keyCode === 65){
    myarray.push('a');
  }
}



function draw() {
  background(theColor);
  text(myarray , 100, 100);
  // use keytyped or maybe keyisdown to add letters to an array thats in a textblock except that may only work by writing backwards
  // use backspace to pop current 

  
  
}
