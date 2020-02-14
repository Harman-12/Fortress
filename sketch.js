const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var pillar1, pillar2, pillar3, pillar4, pillar5, stone1, stone2, dome;


function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  
  pillar1 = new pillar(100,200,40,200);
  pillar2 = new pillar(50,0,40,200);
  pillar3 = new pillar(124,20,200,160);
  pillar4 = new pillar(124,-20,40,200);
  pillar5 = new pillar(50,0,40,200);
}

function draw() {
  background(255,255,255); 
  Engine.update(engine); 
  
  dome = circle(275,130,120);

  pillar1.display();
  pillar2.display();
  pillar3.display();
  pillar4.display();
  pillar5.display();

  stone1 = circle(-323,-120,40);
  stone2 = circle(-23,-120,40);
  
  

  
}