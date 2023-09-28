let zBereich

function setup() {
  zBereich =  createCanvas(windowWidth, windowHeight);
  zBereich.position(0,0);
  zBereich.style('z-Index','1');
}

function draw() {
  noStroke();
  fill(255, 50);
  circle(mouseX, mouseY, 24);
 }

// function mousePressed() {
//   background(0);
// }