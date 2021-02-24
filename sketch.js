
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var ground;
var divisions = [];
var divisionHeight=230;
var ball

function setup() {
	createCanvas(480, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(350,795,1900,10);
		
	ball = new Paper(150,350,30,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  ground.display();
  ball.display(); 
  for (var k = 0; k <=width; k = k + 80){
      divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight))
  }
  drawSprites();
 
}

