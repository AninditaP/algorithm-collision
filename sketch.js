
var fixedRect,MovingRect;



function setup() {
  createCanvas(1200,800);
  fixedRect= createSprite(400, 200, 50, 80);
  MovingRect= createSprite(100,100,80,30);
  MovingRect.shapeColor="green";
  fixedRect.shapeColor="green";

}

function draw() { 
  background(0);

  MovingRect.x= World.mouseX;
  MovingRect.y=World.mouseY;

  if(MovingRect.x-fixedRect.x<MovingRect.width/2+fixedRect.width/2 
    && fixedRect.x-MovingRect.x<MovingRect.width/2+fixedRect.width/2  
    && fixedRect.y-MovingRect.y<MovingRect.height/2+fixedRect.height/2
    && MovingRect.y-fixedRect.y<MovingRect.height/2+fixedRect.height/2 ){
    
      fixedRect.shapeColor="red";
      MovingRect.shapeColor="red";
    }
    else{

      fixedRect.shapeColor="green";
      MovingRect.shapeColor="green";


    }
  
  
  
  drawSprites();
}