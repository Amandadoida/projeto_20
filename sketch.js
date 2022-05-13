
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var chaozinho;
var chaozinhocomfig;
var objetinho1;
var objetinho2;
var objetinho3;
var objetivinho1fig;
var objetivinho2fig;
var objetivinho3fig;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
chaozinhocomfig={
	isStatic:true,
}
chaozinho=Bodies.rectangle(600,580,1200,2,chaozinhocomfig);
World.add(world,chaozinho);

objetivinho1fig={
	restitution:0.5,
	friction:0.02,
	frictionAir:0
}
objetivinho2fig={
	restitution:0.7,
	friction:0.01,
	frictionAir:0.1
}
objetivinho3fig={
	restitution:0.01,
	friction:1,
	frictionAir:0.3
}
objetinho1=Bodies.circle(220,10,50,objetivinho1fig);
World.add(world,objetinho1);

objetinho2=Bodies.rectangle(110,50,50,50,objetivinho2fig);
World.add(world,objetinho2);

objetinho3=Bodies.rectangle(350,50,100,50,objetivinho3fig);
World.add(world,objetinho3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  Engine.update(engine);
  background(0);
  rect(chaozinho.position.x,chaozinho.position.y,1200,2);
  ellipse(objetinho1.position.x,objetinho1.position.y,50);
  rect(objetinho2.position.x,objetinho2.position.y,50,50);
  rect(objetinho3.position.x,objetinho3.position.y,100,50);
  drawSprites();
 
}



