function setup() {
  createCanvas(750,750)
  frameRate(4)
  background
  
}

function draw() {
  //random background shapes
  ellipse(random(0,750),random(600,750),10)
  //body
  rect(350, 150, 75, 200)
  fill(0);
  rect(350, 350,10,250);
  rect(415, 350, 10, 250);
  
  //robot head
  fill(random(1,255),random(1,255),random(1,255))
  rect (375, 120, 30, 30)
  
  // robot hat 
  fill
  triangle(362,120,390,70,417,119);
  
  // robotpc
  ellipseMode(CENTER)
  fill
  ellipse ( 388,360,40,40)
  ellipse ( 350,200,40,40)
  ellipse ( 425,200,40,40)
}
function windowResized (){
  resizeCanvas(windowWidth, windowHeight);
}