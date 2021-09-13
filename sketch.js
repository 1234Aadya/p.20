var astronaut,bg,sleep,gym,eat,drink,brush,bath,move;

function preload() {
bg = loadImage("iss.png");
sleep = loadAnimation("sleep.png");
gym = loadAnimation("gym1.png","gym2.png");
eat = loadAnimation("eat1.png","eat2.png");
drink = loadAnimation("drink1.png","drink2.png");
brush = loadAnimation("brush.png");
bath = loadAnimation("bath1.png","bath2.png");
move = loadAnimation("move.png","move1.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  astronaut = createSprite(300,230,10,10);
  astronaut.addAnimation("sleeping",sleep)
  astronaut.scale = 0.1;

}

function draw() {
  background(bg);  

if (keyDown("RIGHT_ARROW")){
astronaut.addAnimation("Gymming",gym);
astronaut.changeAnimation("Gymming");
astronaut.y=350;
astronaut.velocityX=0;
astronaut.velocityY=0;

}

if (keyDown("LEFT_ARROW")){
  astronaut.addAnimation("Gymming",gym);
  astronaut.changeAnimation("Gymming");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
  
  }

if (keyDown("UP_ARROW")){
astronaut.addAnimation("Gymming",gym);
astronaut.changeAnimation("Gymming");
astronaut.y=350;
astronaut.velocityX=0;
astronaut.velocityY=0;
    
    }

if (keyDown("DOWN_ARROW")){
astronaut.addAnimation("Gymming",gym);
astronaut.changeAnimation("Gymming");
astronaut.y=350;
astronaut.velocityX=0;
astronaut.velocityY=0;
      
      }
      
  textSize(20);
  stroke("White");
  fill("grey");
  text("Instructions: Right Arrow = Gymming, Left Arrow = Eating, Down Arrow = Bathing, Up Arrow = Brushing",20,20);
       
        
 drawSprites();

}