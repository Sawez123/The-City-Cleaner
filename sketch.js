var platform, airPlatform, platfromImage, airPlatformImage, rewardPlatform, rewardPlatformImage;
var backgroundImage, back;
var player, playerImage;
var rightArrow, leftArrow,jump, rightArrowImage, leftArrowImage, jumpImage;
var trash, trashgroup, trash1Image, trash2Image, trash3Image;
var airGroup, rewardGroup;
var barrier, endBarrier;
var inventory=0;



function preload(){
  platformImage = loadImage("images/platform.png");
  airPlatformImage = loadImage("images/airplatform.png");
  rewardPlatformImage = loadImage("images/reward.png");
  backgroundImage = loadImage("images/background.jpg");
  rightArrowImage = loadImage("images/rightArrow.png");
  leftArrowImage = loadImage("images/leftArrow.png");
  jumpImage = loadImage("images/jump.png");
  trash1Image = loadImage("images/trash1.png");
  trash2Image = loadImage("images/trash2.png");
  trash3Image = loadImage("images/trash3.png");
  playerImage = loadAnimation("images/man1.png" , "images/man2.png" , "images/man3.png" , "images/man4.png" , "images/man5.png" , "images/man6.png" , "images/man7.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight-160);
  platform=createSprite(width/2,height-10);
  platform.addImage(platformImage);
  platform.scale=4.3

  player=createSprite(120, height-140);
  player.shapeColor="yellow";
  player.addAnimation("running", playerImage);
  rightArrow=createSprite(width-50, height-150);
  rightArrow.addImage(rightArrowImage);
  rightArrow.scale=0.5;

  barrier=createSprite(10, height/2, 10, height*10);
  barrier.visible=false;

  endBarrier=createSprite(16105, height/2, 10, height*10);

  airGroup=new Group();
  rewardGroup=new Group();
  trashGroup=new Group();
}

function draw() {
  background(backgroundImage);
  player.collide(platform);
  player.collide(barrier);
  player.collide(endBarrier);

/*  if(player.x>displayWidth-100){
    player.x=displayWidth;
  }*/

  spawnAirPlatform();
  spawnTrash();
  /*if(frameCount%60==0){
    airPlatform.y=displayHeight/2;
    airPlatform.x=player.x+800;
    rewardPlatform.y=displayHeight/2;
    rewardPlatform.x=airPlatform.x+110;
  }*/

  
  if(keyIsDown(RIGHT_ARROW)||keyDown("D")){
    player.x+=11;
  }

  if(keyIsDown(LEFT_ARROW)||keyDown("A")){
    player.x-=11;
  }

  if(keyDown("SPACE")){
    player.velocityY=-30;
  }
   player.velocityY+=1

   camera.position.x=player.x;
  drawSprites();
  console.log(player.x);
}

function spawnAirPlatform() {
  //write code here to spawn the clouds
  if (frameCount % Math.round(random(80,150)) === 0) {
    airPlatform = createSprite(player.x+800,height/2,40,10);
    airPlatform.addImage(airPlatformImage);
    airPlatform.scale = 1.5;
      player.collide(airGroup);
      //add each cloud to the group
      airGroup.add(airPlatform);

      rewardPlatform = createSprite(player.x+850,height/2,40,10);
      rewardPlatform.x = Math.round(random(80,120));
      rewardPlatform.addImage(rewardPlatformImage);
      rewardPlatform.scale = 1.5;
      player.collide(rewardGroup);
    //add each cloud to the group
    rewardGroup.add(rewardPlatform);
  }
}

function spawnTrash() {
  //write code here to spawn the clouds
  if (frameCount % Math.round(random(80,150)) === 0) {
    trash = createSprite(player.x+800,platform.x-100);
    
    var ram=Math.round(random(1,3));
    if(ram===1){
    trash.addImage(trash1Image);
    trash.scale =0.3
  }
    if(ram===2){
      trash.addImage(trash2Image);
     trash.scale =0.3
    }
    if(ram===3){
      trash.addImage(trash3Image);
      trash.scale =0.3
    }
    trash.scale = 1.5;
      player.collide(airGroup);
      //add each cloud to the group
      trashGroup.add(trash);

  }
}

