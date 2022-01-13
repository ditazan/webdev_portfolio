var canvas;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y, 'sticky');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  // centerCanvas();
  canvas.position(0,0);
  canvas.style('z-index', '-1');
 
}

function draw(){
  background(50);
};
