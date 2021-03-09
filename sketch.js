
var fixedRect, movingRect;
var gameObject1, gameObject2;
var car,wall
function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  car = createSprite(200,200,50,50);
  car.shapeColor = "blue";
  wall = createSprite(1000,200,20,100);
  wall.shapeColor = "pink"
  car.velocityX = 4
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(car,wall)){
  car.velocityX = 0
  car.shapeColor = "orange";
  wall.shapeColor = "green";
  wall.velocityY = -4
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}

function isTouching(o1,o2){
  if (o1.x - o2.x < o2.width/2 + o1.width/2
    && o2.x - o1.x < o2.width/2 + o1.width/2
    && o1.y - o2.y < o2.height/2 + o1.height/2
    && o2.y - o1.y < o2.height/2 + o1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}


