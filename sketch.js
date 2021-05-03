var a, b;
var car, wall;
function setup() {
  createCanvas(800,400);
 a = createSprite(400, 200, 50, 50);
 b = createSprite(200, 100, 30, 30);
 a.shapeColor ="red";
 b.shapeColor = "red";
 car = createSprite(200,200,50,50);
 car.shapeColor = "red";
 wall = createSprite(600,200,50,70);
 wall.shapeColor = "blue";
 car.velocityX = 4;
}

function draw() {
  background(255,255,255);  
  a.x = World.mouseX;
  a.y = World.mouseY;
  console.log(a.x - b.x);
  bounceOff(car,wall);
  drawSprites();
}


