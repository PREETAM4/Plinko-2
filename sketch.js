const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var plinkos=[];
var particles;
var gameState = "start";
var  count = 0;
var score = 0;


function setup() {
	createCanvas(500, 400);
  

  engine = Engine.create();
	world = engine.world;

	ground=new Ground(240,400,900,20);
	
	stand1=new Division(5,350,10,200);
	stand2=new Division(100,350,10,200);
	stand3=new Division(200,350,10,200);
	stand4=new Division(300,350,10,200);
	stand5=new Division(400,350,10,200);
	stand6=new Division(495,350,10,200);

	
	for (var i =35; i <=width; i=i+50) {
		plinkos.push(new Plinko(i,75,10));
	}
	  
	for (var i = 10; i <=width-10; i=i+50) {
		plinkos.push(new Plinko(i,110,10));
	}
	  
	for (var i = 35; i <=width; i=i+50) {
		plinkos.push(new Plinko(i,145,10));
	}
	  
	 for (var i = 10; i <=width-10; i=i+50) {
		plinkos.push(new Plinko(i,180,10));
	 }
  
}

function draw() {
  background("black");
  textSize(17);
  fill("lime");
  text("Move The Mouse In Horizontal Way and Press Space to Drop",20,25);
  

  text("Score : "+score,20,60);
  fill("lime");
  text("100",35,350);
  text("100",135,350);
  text("200",235,350);
  text("200",335,350);
  text("500",435,350);
  fill("lime");

 
  Engine.update(engine);

  fill("gold");
  ground.display(); 
  fill("gold");
  stand1.display();
  fill("gold");
  stand2.display();
  fill("gold");
  stand3.display();
  fill("gold");
  stand4.display();
  fill("gold");
  stand5.display();
  fill("gold");
  stand6.display();
  fill("gold"); 
  

  for(var i=0;i<plinkos.length;i++){
	plinkos[i].display();
	}
	
	
	
	if ( gameState =="end") {  
		textSize(30);
		fill("lime");
		text("GameOver", 150, 250);
	  }


	  if (particles!=null){
		particles.display();
		

		  if(particles.body.position.y>370){
			  if (particles.body.position.x<=195 && particles.body.position.x>=0 ){
				  score=score+100;
				  particles=null;
				  count=count+1;
				  if(count>=5) gameState ="end";
			  }
			  else if(particles.body.position.x >=200 && particles.body.position.x <=400 ){
				  score = score +200;
				  particles = null;
				  count=count+1;
				  if(count>=5) gameState = "end";
			  }
		      else if(particles.body.position.x >=400 &&particles.body.position.x<=490){
				  score=score + 500;
				  particles=null;
				  count=count+1;
				  if(count>=5)gameState ="end"
			  }

			}


		  
	  }
	
  drawSprites();
}

function keyPressed(){
if(keyCode === 32 ){
	particles=new Particles(mouseX,10,10,10)
		
}
}
