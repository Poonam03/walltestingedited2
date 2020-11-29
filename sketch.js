
//declaring the variables
var bullet,weight,damage,speed,wall,bulletRightEdge,wallLeftEdge,wallThickness;

//function for creating sprites and canvas
function setup() 
{   
    //creating the canvas
    createCanvas(1600,400);
     
    //assigning a random initial value to the speed
    speed=random(203,301);
    
    //assigning an initial value to the weight
    weight=random(20,42);
    
     //creating the bullet sprite
     bullet=createSprite(50,200,70,10);
     
      //assigning an initial value to wall thickness
     wallThickness=random(15,83);

    
     //creating the wall sprite
     wall=createSprite(1200,200,wallThickness,200);
   
     //assigning an initial value to damage
     damage=0;
    
     //giving an initial shape color to the car 
     bullet.shapeColor="white";


    //giving the wall an initial shapeColor
     wall.shapeColor="white";
    }

function draw() 
{
    
    //setting the background color
    background("black");
   
     if(wall.x-bullet.x<(wall.width+bullet.width)/2)
  {
    bullet.velocityX=0;
    damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
    console.log(speed);
    console.log(weight);
    console.log(damage);
    if(damage>10)
    {
      wall.shapeColor="red";
    }
    else if(damage<10)
    {
      wall.shapeColor="green";
    }
    
  }
  drawSprites();
}
