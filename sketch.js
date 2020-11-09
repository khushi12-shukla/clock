var hr,mn,sc;

function setup() {
  createCanvas(1600,800);
}

function draw() {
  background(0); 
  translate(800,400);
  rotate(90);

  hr = hour();
mn = minute();
sc = second();
  
  angleMode(DEGREES);
  
  scAngle = map(sc, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 12, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);

  push();
  rotate(scAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0,350,380);
  pop();

  push();
  rotate(mnAngle);
  stroke(255, 0, 255);
  strokeWeight(7);
  line(0, 0, 250, 100);
  pop();
  
  push();
  rotate(hrAngle);
  stroke(255, 255, 0);
  strokeWeight(7);
  line(0, 0, 400, 120);
  pop();

  stroke(255, 255, 0);
  strokeWeight(7);
  arc(0, 0, 260, 260, 0, hrAngle);

  stroke(255, 0, 255);
  strokeWeight(7);
  arc(0, 0, 280, 280, 0, mnAngle);

  stroke(255, 0, 0);
  strokeWeight(7);
  arc(0, 0, 300, 300, 0 ,scAngle);
}