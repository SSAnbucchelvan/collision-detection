var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
  gameObject1 = createSprite(400, 100, 50, 80);
  gameObject1.shapeColor = "green";
  gameObject1.debug = true;
  gameObject2 = createSprite(400, 800,80,30);
  gameObject2.shapeColor = "green";
  gameObject2.debug = true;

  gameObject2.velocityY = -5;
  gameObject1.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(myIsTouching(movingRect,fixedRect)){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";

  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
    
  }
  myBounceOff(gameObject1,gameObject2)

 
  drawSprites();
}
