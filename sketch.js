var ball;
var ground;
var side1,side2 ,side3;
var engineObject, worldVariable;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;





/*function preload(){
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}*/

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engineObject = Matter.Engine.create();
    worldVariable = engineObject.world;

	ball= new Ball(width/2-300,590,60);
    

   // side1= new Dustbin(width/2+150,575,10,80); 
	
	side2=new Dustbin(width/2+200,height/2+165,200,3); 
	
	//side3= new Dustbin(width/2+250,575,10,80); 
	
	ground= new Ground(width/2,height-80, width,10);
	
	

 	

}


function draw() {
  rectMode(CENTER);
  background("white");
  Matter.Engine.update(engineObject);
  
  ground.display();

  //side1.display();
  side2.display();
 // side3.display();
 ball.display();
  
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(ball.body,ball.body.position,{x:65,y:-65});

    
  }
 }

