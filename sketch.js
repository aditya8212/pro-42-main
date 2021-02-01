var canvas
const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var man;

var maxDrops = 100;

var drops = [];

function preload(){
  t1 = loadImage("1.png");
  t2 = loadImage("2.png");
  t3 = loadImage("3.png");
  t4 = loadImage("4.png");

}

function setup(){
  
 canvas = createCanvas(600,500);
 engine = Engine.create();
 world = engine.world;

 man = new MAN();

 if(frameCount%100 === 0){
  for(var i = 0; i<maxDrops; i++){
    drops.push(new RAIN(random(0,600),random(0,500)));
    
  }

}

}

function draw(){
  background("darkblue");

  Engine.update(engine);

  if(frameCount%12 === 0){
  thunder = createSprite(random(50,550),random(10,50),10,10);
    rand = Math.round(random(1,4));
    switch(rand){
      case 1:thunder.addImage(t1);
      break;
      case 2:thunder.addImage(t2);
      break;
      case 3:thunder.addImage(t3);
      break;
      case 4:thunder.addImage(t4);
      break;

      default:break;

    }

    thunder.lifetime = 10;
    thunder.scale = 0.5;
}

  man.display();

  drawSprites();

  for(var i = 0; i < drops.length; i = i+1){
    drops[i].display();
    drops[i].update();
  }

}

  
