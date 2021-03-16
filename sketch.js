var platform, airPlatform, platfromImage, airPlatformImage, rewardPlatform, rewardPlatformImage;
var backgroundImage, back;
var player, playerImage;
var rightArrow, leftArrow,jump, rightArrowImage, leftArrowImage, jumpImage;
var trash1, trash2,trash3, trashgroup, trash1Image, trash2Image, trash3Image;
var airGroup1, airGroup2, airGroup3;
var barrier;


function preload(){
  platformImage = loadImage("images/platform.png");
  airPlatformImage = loadImage("images/airplatform.png");
  rewardPlatformImage = loadImage("images/reward.png");
  backgroundImage = loadImage("images/background.jpg");
  rightArrowImage = loadImage("images/rightArrow.png");
  leftArrowImage = loadImage("images/leftArrow.png");
  jumpImage = loadImage("images/jump.png");
  trash1Image = loadImage("images/trash1.jpeg");
  trash2Image = loadImage("images/trash2.jpeg");
  trash3Image = loadImage("images/trash3.jpeg");
}

function setup() {
  createCanvas(displayWidth,displayHeight-160);
  platform=createSprite(width/2,height-10);
  platform.addImage(platformImage);
  platform.scale=4.3

  player=createSprite(120, height-140);
  player.shapeColor="yellow";

  airPlatform=createSprite(-10, -10);
  airPlatform.addImage(airPlatformImage);
  airPlatform.scale=2;

  rewardPlatform=createSprite(-10,-10);
  rewardPlatform.addImage(rewardPlatformImage);
  rewardPlatform.scale=2;

  rightArrow=createSprite(width-50, height-150);
  rightArrow.addImage(rightArrowImage);
  rightArrow.scale=0.5;

  barrier=createSprite(10, height/2, 10, height);
  barrier.visible=false;

  trash1=createSprite();


  
}

function draw() {
  background(backgroundImage);
  player.collide(platform);
  player.collide(airPlatform);
  player.collide(barrier);

/*  if(player.x>displayWidth-100){
    player.x=displayWidth;
  }*/
  console.log(player.y)

  
  if(frameCount%60==0){
    airPlatform.y=displayHeight/2;
    airPlatform.x=player.x+800;
    rewardPlatform.y=displayHeight/2;
    rewardPlatform.x=airPlatform.x+110;
  }

  
  if(keyIsDown(RIGHT_ARROW)||keyDown("D")){
    player.x+=11;
  }

  if(keyIsDown(LEFT_ARROW)||keyDown("A")){
    player.x-=11;
  }

  if(keyDown("SPACE")){
    player.velocityY=-25;
  }
   player.velocityY+=1

   camera.position.x=player.x;
  drawSprites();
  console.log(displayHeight);

}