var fixedRect,movingRect;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600,400,50,80);
  fixedRect.shapeColour = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,50);
  movingRect.shapeColour = "green";
  movingRect.debug = true;
}


function draw() {
  background(0,0,0); 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x - fixedRect.x < fixedRect.width/2+movingRect.width/2&&
    movingRect.y - fixedRect.y < fixedRect.width/2+movingRect.width/2 &&
    movingRect.x - fixedRect.x < fixedRect.height/2+movingRect.height/2&&
    movingRect.y - fixedRect.y < fixedRect.height/2+movingRect.height/2
    )
  {
    fixedRect.shapeColour = "red";
    movingRect.shapeColour = "red";
  }
  else {
    fixedRect.shapeColour = "green"; 
    movingRect.shapeColour = "green";
  }
  drawSprites();
}