var backgroundImg;
var zhunter,zhunterImg;
var zombieImg;


function preload(){
  backgroundImg=loadImage("backgroundimg.jpg");
  zhunterImg=loadImage("gg.png");
  zombieImg=loadImage("zombies.png")
}

function setup() {
  createCanvas(800,400);

  zhunter=createSprite(80,200,30,30);
  zhunter.addImage(zhunterImg);
  zhunter.scale=0.5;
}

function draw() {
  background(backgroundImg);  
  spawnZombies();
  drawSprites();
}

function spawnZombies(){
 if(frameCount%60==0){
  var zombie =  createSprite(800,200,30,30);
  zombie.y=Math.round (random(130,300));
  zombie.addImage(zombieImg);
  zombie.velocityX= -4;
  zombie.scale=0.3;
 }



}