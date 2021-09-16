var groundImage;
var ship,ship_moving,edges;
var sea;

function preload(){
ship_moving=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
sea=loadImage("sea.png");
}

function setup(){
  createCanvas(600,600);
  // creating the ground
  groundImage=createSprite(300,300,width,height);
  groundImage.addImage(sea);
  groundImage.scale=0.5

  // creating ship
ship = createSprite(150,400,20,20);
ship.addAnimation("moving",ship_moving);

// adding scale and position to ship
  ship.scale = 0.3;
  groundImage.velocityX=-10;
}

function draw() {
  background("skyblue");
  if(groundImage.x<0){
    groundImage.x=300
    };
    //logging the x position of the ship
    console.log(ship.x);
    
  drawSprites();
}