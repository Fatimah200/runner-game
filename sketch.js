var runner, runnerimg;
//var ground, groundImg;
var invisibleground;
var backgroundImg;
var strawberryimg;
var SGroup;


var score=0;

function preload(){
  runnerimg=loadImage("images/runnerImg.jpg");
//groundImg=loadImage("images/g.jpg");
backgroundImg=loadImage("images/backg.jpg");
strawberryimg=loadImage("images/strawberry.png");
}
function setup() {
  createCanvas(displayWidth-20, displayHeight-30);
 

  //ground=createSprite(700,200,2000,20);
  //ground.addImage(groundImg);
  //ground.velocityX=-2;
  //ground.x=ground.width/2;

  runner=createSprite(50, 115,displayWidth/2-40, displayHeight/2-80);
  runner.addImage(runnerimg);
  runner.scale=0.8;

  invisibleground=createSprite(700,800,1500,20);
  invisibleground.visible=false;
  invisibleground.velocityX=-2;
  invisibleground.x=invisibleground.width/2;

  SGroup=new Group();

  }

function draw() {
  background(backgroundImg);  
  runner.velocityY=runner.velocityY+0.8;
  
  if(invisibleground.x<0){
    invisibleground.x=invisibleground.width/2;
}

score=score +Math.round(getFrameRate()/60);
invisibleground.velocityX=-(6+3*score/100);

if(keyDown("space")&& runner.y>=712){
runner.velocityY=-12;
}
//console.log(runner.y);


runner.collide(invisibleground);

spawnStrawberry();


  drawSprites();

stroke("white");
textSize(20);
fill("black");
text("Score: "+score,1300,50);
}

function spawnStrawberry(){
  if(frameCount%80===0){
    var strawberry=createSprite(1400,700,40,10);
    strawberry.y=random(900,400);
    strawberry.addImage(strawberryimg);
    strawberry.scale=0.1;
    strawberry.velocityX=-5;
    strawberry.lifetime=300;
    runner.depth=strawberry.depth+1;
    SGroup.add(strawberry);

  }
}