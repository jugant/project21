var bullet,wall;
var thickness,speed,Weight;

function setup() {
  createCanvas(1600,400);
   speed=random(223,321);
   Weight=random(30,52);
   thickness=random(22,83);
   bullet=createSprite(50,200,50,5);
   wall=createSprite(1200,200,thickness,height/2);
 
   bullet.velocityX = speed;
  bullet.shapeColor= "white";
   

   

   wall.shapeColor=color("browne");
}

function draw() {
   background("black");

   if(hascollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5  * Weight *speed* speed/(thickness *thickness*thickness);

    if(damage>10){
     
      wall.shapecolor=color(255,0,0);
    }

    
     if(damage<10)
     {
     
      wall.shapeColor=color(0,255,0);
   }

   
}
 drawSprites();

 
}

function hascollided(lbullet,lwall)
{
  
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;
}


