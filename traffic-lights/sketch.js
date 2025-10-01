// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let light_color = ("red");
let switchTime  = 0;
let greenDuration = 4000;
let redDuration = 4000;
let yellowDuration = 2000;
function setup() {
  createCanvas(600, 600);
}
function change_color(){
  if (light_color === "red" && millis() > switchTime + redDuration){
    light_color  = "green"
    switchTime = millis();
  }
  else if (light_color === "green" && millis() > switchTime + greenDuration){
    light_color = "yellow"
    switchTime = millis();
  }
  else if (light_color === "yellow" && millis() > switchTime + yellowDuration){
    light_color = "red"
    switchTime = millis();
  }
}
function draw() {
  background(0, 150, 255);
  drawOutlineOfLights();
  show_lights();
  change_color();
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  fill(255);
  ellipse(width/2, height/2 - 65, 50, 50); //top
  ellipse(width/2, height/2, 50, 50); //middle
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}
function show_lights(){
  if (light_color === "red"){
    fill("red")
    ellipse(width/2, height/2 - 65, 50, 50);
  }
  else if (light_color === "green"){
    fill("green")
    ellipse(width/2, height/2 + 65, 50, 50);
  }
  else if (light_color === "yellow"){
    fill("yellow")
    ellipse(width/2, height/2, 50, 50);
  }

  

}
