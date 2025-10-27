// weird word world
// Lacon
// October 24 2025
//
// Extra for Experts:
// changed size???

const myarray = [];
let backColor = 255;
let textColor = 0;
let y = 455;
let x = 960;
let mysize = 12;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function keyPressed(){
  if (keyCode === 65){
    myarray.push('a');
  }
  else if (keyCode === 66){
    myarray.push('b');
  }
  else if (keyCode === 67){
    myarray.push('c');
  }
  else if (keyCode === 68){
    myarray.push('d');
  }
  else if (keyCode === 69){
    myarray.push('e');
  }
  else if (keyCode === 70){
    myarray.push('f');
  }
  else if (keyCode === 71){
    myarray.push('g');
  }
  else if (keyCode === 72){
    myarray.push('h');
  }
  else if (keyCode === 73){
    myarray.push('i');
  }
  else if (keyCode === 74){
    myarray.push('j');
  }
  else if (keyCode === 75){
    myarray.push('k');
  }
  else if (keyCode === 76){
    myarray.push('l');
  }
  else if (keyCode === 77){
    myarray.push('m');
  }
  else if (keyCode === 78){
    myarray.push('n');
  }
  else if (keyCode === 79){
    myarray.push('o');
  }
  else if (keyCode === 80){
    myarray.push('p');
  }
  else if (keyCode === 81){
    myarray.push('q');
  }
  else if (keyCode === 82){
    myarray.push('r');
  }
  else if (keyCode === 83){
    myarray.push('s');
  }
  else if (keyCode === 84){
    myarray.push('t');
  }
  else if (keyCode === 85){
    myarray.push('u');
  }
  else if (keyCode === 86){
    myarray.push('v');
  }
  else if (keyCode === 87){
    myarray.push('w');
  }
  else if (keyCode === 88){
    myarray.push('x');
  }
  else if (keyCode === 89){
    myarray.push('y');
  }
  else if (keyCode === 90){
    myarray.push('z');
  }
  else if (keyCode === 32){
    myarray.push(' ');
  }
  else if (keyCode === 8){
    myarray.pop();
  }
  else if (keyCode === 187){
    mysize += 1;
  }
  else if (keyCode === 189){
    mysize -= 1;
  }
  else if (keyCode === 48){
    myarray.push('0');
  }
  else if (keyCode === 49){
    myarray.push('1');
  }
  else if (keyCode === 50){
    myarray.push('2');
  }
  else if (keyCode === 51){
    myarray.push('3');
  }
  else if (keyCode === 52){
    myarray.push('4');
  }
  else if (keyCode === 53){
    myarray.push('5');
  }
  else if (keyCode === 54){
    myarray.push('6');
  }
  else if (keyCode === 55){
    myarray.push('7');
  }
  else if (keyCode === 56){
    myarray.push('8');
  }
  else if (keyCode === 57){
    myarray.push('9');
  }
  else if (keyCode === 190){
    myarray.push('.');
  }
  else if (keyCode === 188){
    myarray.push(',');
  }
  else if (keyCode === 222){
    myarray.push("'");
  }
}


function draw() {
  background(backColor);
  textAlign(CENTER);
  if (keyIsDown(38)){
    y -= 3;
  }
  if (keyIsDown(40)){
    y += 3;
  }
  if (keyIsDown(37)){
    x -= 3;
  }
  if (keyIsDown(39)){
    x += 3;
  }
  textSize(mysize);
  fill(textColor);
  text(myarray.join('') , x , y);

}
function mouseClicked(){
  if (backColor === 255){
    backColor = 0;
    textColor = 255;
  }
  else{
    backColor = 255;
    textColor = 0;
  }
}
