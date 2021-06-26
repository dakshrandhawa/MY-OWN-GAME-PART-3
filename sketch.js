

var gameState = 0;
var PLAY =1;
var END = 2;

var special;
var intro, bgImg;
var crosshairImg, crosshair, dotImg, dot;
var specialBottle, bottleImg, bottle, bottle1, bottle2, bottle3, bottle4, bottle5, bottle6, bottle7, bottle8, bottle9, bottle10, bottle11;
var gunSound;

var score = 0;

var greetingImg;
var playImg;


function preload() {
 bgImg = loadImage("green bg.jpg")

 
 specialBottle = loadAnimation("super-bottle-unscreen-0.png", "super-bottle-unscreen-1.png","super-bottle-unscreen-2.png","super-bottle-unscreen-3.png", "super-bottle-unscreen-4.png","super-bottle-unscreen-5.png","super-bottle-unscreen-6.png","super-bottle-unscreen-7.png","super-bottle-unscreen-8.png","super-bottle-unscreen-9.png","super-bottle-unscreen-10.png","super-bottle-unscreen-11.png","super-bottle-unscreen-12.png","super-bottle-unscreen-13.png","super-bottle-unscreen-14.png","super-bottle-unscreen-15.png","super-bottle-unscreen-16.png","super-bottle-unscreen-17.png","super-bottle-unscreen-18.png","super-bottle-unscreen-19.png");
  
crosshairImg = loadImage("crosshair.png");
dotImg = loadImage("red_circle.png");

bottleImg = loadImage("bottle.png");
gunSound = loadSound("GunShot.mp3");

  greetingImg = loadImage("GREETING PAGE.png");
  playImg = loadImage("playButton.png");


}

function setup() {
  createCanvas(700,500);

 if(gameState === 0){
  play = createSprite(350, 460, 10, 10);
  play.addImage(playImg);
  play.scale = 0.5;

  greeting = createSprite(350, 200, 20, 20)
  greeting.addImage(greetingImg);
  greeting.scale = 0.7;

 }
  

    
   bottle = createSprite(250, 317, 10, 10)
    bottle.addImage(bottleImg);
    bottle.scale = 0;
    bottle.setCollider("rectangle", 0, -25, 100, 420);

    
    
    
    bottle1 = createSprite(350, 317, 10, 10)
    bottle1.addImage(bottleImg);
    bottle1.scale = 0;
    bottle1.setCollider("rectangle", 0, -25, 100, 420);
    
    
    bottle2 = createSprite(450, 317, 10, 10)
    bottle2.addImage(bottleImg);
    bottle2.scale = 0;
    bottle2.setCollider("rectangle", 0, -25, 100, 420);
    
    
    bottle3 = createSprite(150, 317, 10, 10)
    bottle3.addImage(bottleImg);
    bottle3.scale = 0;
    bottle3.setCollider("rectangle", 0, -25, 100, 420);
    
    
    bottle4 = createSprite(550, 317, 10, 10)
    bottle4.addImage(bottleImg);
    bottle4.scale = 0;
    bottle4.setCollider("rectangle", 0, -25, 100, 420);
    
    
    bottle5 = createSprite(50, 317, 10, 10)
    bottle5.addImage(bottleImg);
    bottle5.scale = 0;
    bottle5.setCollider("rectangle", 0, -25, 100, 420);
    
    
    
    bottle6 = createSprite(650, 317, 10, 10)
    bottle6.addImage(bottleImg);
    bottle6.scale = 0;
    bottle6.setCollider("rectangle", 0, -25, 100, 420);
    
    
    //-----------------------------------------------------------
    
    bottle7 = createSprite(350, 173, 10, 10)
    bottle7.addImage(bottleImg);
    bottle7.scale = 0;
    bottle7.setCollider("rectangle", 0, -25, 100, 420);
    
    
    bottle8 = createSprite(250, 173, 10, 10)
    bottle8.addImage(bottleImg);
    bottle8.scale = 0;
    bottle8.setCollider("rectangle", 0, -25, 100, 420);
    
    
    bottle9 = createSprite(450, 173, 10, 10)
    bottle9.addImage(bottleImg);
    bottle9.scale = 0;
    bottle9.setCollider("rectangle", 0, -25, 100, 420);
    
    
    bottle10 = createSprite(150, 173, 10, 10)
    bottle10.addImage(bottleImg);
    bottle10.scale = 0;
    bottle10.setCollider("rectangle", 0, -25, 100, 420);
    
    
    bottle11 = createSprite(550, 173, 10, 10)
    bottle11.addImage(bottleImg);
    bottle11.scale = 0;
    bottle11.setCollider("rectangle", 0, -25, 100, 420);

    

    special = createSprite(0, random(100, 300), 10, 10)
  special.addAnimation("super",specialBottle);
  special.scale = 0;
  special.velocityX = 0;
  special.lifetime = 1000;

    crosshair = createSprite(350, 250, 10, 10)
    crosshair.addImage(crosshairImg);
    crosshair.scale = 0;
    
    dot = createSprite(350, 250, 10, 10)
    dot.addImage(dotImg);
    dot.scale = 0;

    
    }


function draw() {
background("pink")


if(gameState === 0){
 
  bottle.scale = 0;
  bottle1.scale = 0;
  bottle2.scale = 0;
  bottle3.scale = 0;
  bottle4.scale = 0;
  bottle5.scale = 0;
  bottle6.scale = 0;
  bottle7.scale = 0;
  bottle8.scale = 0;
  bottle9.scale = 0;
  bottle10.scale = 0;
  bottle11.scale = 0;
  

if(mousePressedOver(play)){
  play.scale = 0;
  gameState = PLAY;
  
}

}


  
  


  
if(gameState === PLAY){
  fill("brown");
  rect(0, 375, 800, 130);
  rect(25, 230, 650, 20)
fill("black");
textSize(20);
text("SCORE = "+ score, 300,40)
text("NOTE : CLICK ONCE ON BOTTLE TO GET BETTER EXPERIENCE", 50, 480)

/*if(bottle.destroy(), bottle1.destroy(), bottle2.destroy(), special.destroy(), bottle3.destroy(), bottle4.destroy(), bottle5.destroy(), bottle6.destroy(), bottle8.destroy(), bottle7.destroy(), bottle9.destroy(), bottle10.destroy(), bottle11.destroy()){
  gameState = END;
}*/

if(frameCount%300===0){
special.scale = 0.3;
special.velocityX = 3;  
}

play.scale = 0;
greeting.scale = 0;


bottle.scale = 0.3;
bottle1.scale = 0.3;
bottle2.scale = 0.3;
bottle3.scale = 0.3;
bottle4.scale = 0.3;
bottle5.scale = 0.3;
bottle6.scale = 0.3;
bottle7.scale = 0.3;
bottle8.scale = 0.3;
bottle9.scale = 0.3;
bottle10.scale = 0.3;
bottle11.scale = 0.3;

crosshair.scale =0.2;
dot.scale = 0.1; 

  crosshair.x = World.mouseX
  crosshair.y = World.mouseY   
      
  dot.x = World.mouseX
  dot.y = World.mouseY
  
  

if(mousePressedOver(special)){
  special.scale = 0;
  score = score+50;
  gunSound.play();

}



  
  if(mousePressedOver(bottle)){
    gunSound.play();
    bottle.destroy();
    score = score + 5;

  }

  if(mousePressedOver(bottle1)){
    gunSound.play();
    bottle1.destroy();
    score = score + 5;
  }

  if(mousePressedOver(bottle2)){
    gunSound.play();
    bottle2.destroy();
    score = score + 5;
  }

  if(mousePressedOver(bottle3)){
    gunSound.play();
    bottle3.destroy();
    score = score + 5;
  }


  if(mousePressedOver(bottle4)){
    gunSound.play();
    bottle4.destroy();
    score = score + 5;
  }

  if(mousePressedOver(bottle5)){
    gunSound.play();
    bottle5.destroy();
    score = score + 5;
  }

  if(mousePressedOver(bottle6)){
    gunSound.play();
    bottle6.destroy();
    score = score + 5;
  }

  if(mousePressedOver(bottle7)){
    gunSound.play();
    bottle7.destroy();
    score = score + 5;
  }

  if(mousePressedOver(bottle8)){
    gunSound.play();
    bottle8.destroy();
    score = score + 5;
  }

  if(mousePressedOver(bottle9)){
    gunSound.play();
    bottle9.destroy();
    score = score + 5;
  }

  if(mousePressedOver(bottle10)){
    gunSound.play();
    bottle10.destroy();
    score = score + 5;
  }

  if(mousePressedOver(bottle11)){
    gunSound.play();
    bottle11.destroy();          
    score = score + 5;
  }
  

    
    
  

}



  drawSprites();

 

}



