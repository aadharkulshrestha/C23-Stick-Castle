function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background("black");  
  fill(255);
  triangle(355,200,400,160,445,200)
  rect(355,200,90,200)
  rect(305,180,50,220)
  rect(445,180,50,220)
  rect(255,130,50,270)
  rect(495,130,50,270)
  triangle(240,130,277.5,90,325,130)
  triangle(475,130,515.5,90,560,130)
  rect(220,60,20,340)
  rect(560,60,20,340)
  drawSprites();
}