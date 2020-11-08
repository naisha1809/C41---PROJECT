const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

  var man,boy;
  var drops = [] ;
  var thunder,thunderbolt;
  var maxDrops ;
  

  function preload(){ 
    thunderbolt = loadAnimation("images/thunderbolt/1.png","images/thunderbolt/2.png","images/thunderbolt/3.png","images/thunderbolt/4.png");

    man = loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png"); 
   }

function setup(){
    createCanvas(800, 400);
    engine = Engine.create();
    world = engine.world; 
  
    boy = createSprite(350,260,300);
    boy.addAnimation("man",man);
    boy.scale = 0.4;


    maxDrops = 100;

    thunder = createSprite(300,70,1,2); 
    thunder.addAnimation("thunderbolt",thunderbolt);
    thunder.scale = 0.2;
    
}

function draw(){
  background("black");
  Engine.update(engine);

  
  for(var i = 0;i<maxDrops;i++){
    drops.push(new drop(random(0,400),random(0,400),5));
  }

  for(i=0;i<maxDrops;i++){
    drops[i].display();
    drops[i].update();
  }

  if(frameCount % 120 === 0){
     thunder.display();
  }

 
  drawSprites();

}   

