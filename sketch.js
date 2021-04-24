
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
img1 = loadImage("dustbingreen.png")	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	
	paper = new Paper(50,630,40,40);
	ground = new Ground(400,660, 800, 20)

	box1 = new Box(600,645,100,10)
	box2 = new Box(650,610,10,80)
	box3 = new Box(550,610,10,80)

}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.run(engine);
  image(img1,550,545,100,100)
  paper.display()
  ground.display()
  box1.display()
  box2.display()
  box3.display()

  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:60,y:-60})
	}
}



