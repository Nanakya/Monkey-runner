
var monkey,monkey_running
var ground,banana,bananaImage,obstacle,obstacleImage;
var FoodGroup,obstacleGroup,bananaGroup;
var score

var survivalTime=0;

monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkry_tunning);
monkey.scale=0.1;

ground=createSprite(400,350,900,10);
ground.velocityx=-4;
ground.x=ground.width/2;
console.log(ground.x);

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  var survivalTime=0;
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  FoodGroup=new Group();
  obstaclesGroup=new Group();
  score=0;
    

  
}


function draw() {
  background(255);
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  if(keyDown("space")) {
    monkey.velocityY=-12;
  }
  monkey.collide(ground);
  spawnFood();
  spawnObstacles();
  drawSprites();
  stroke("White");
  textSize(20);
  fill("white");
  text("score: "+score,500,50);
  if(obstaclesGroup.isTouching(monkey)) {
    ground.velocityX=0;
    monkey.velocityY=0;
    obstaclesGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    obstaclesGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
  }
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("surrvivalTime: "+score,100,50);
  
}
