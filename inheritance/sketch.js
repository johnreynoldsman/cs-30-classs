// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


class Vehicle{
  constructor(name, type){
    this.name = name;
    this.type = type;
  
  }
  getName(){
    return this.name;
  }
  getType(){
    return this.type;
  }
}
class Car  extends Vehicle{
  constructor(name){
    super(name, "car");
  }
  getName(){
    return "this is a car called" + super.getName();
  }
}

//let speed = new Vehicle("dodge", "car");
speedy = new Car("kona");
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}
