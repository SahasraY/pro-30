const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body
const Constraint=Matter.Constraint
var world,engine 
function setup () {

createCanvas(800, 700);
engine=Engine.create()
world=engine.world;
rectMode(CENTER);

block1=new Block(330,265,30,40);
block2=new Block(360,265,30,40);
block3=new Block(390,265,30,40);
block4=new Block(420,265,30,40);
block5=new Block(450,265,30,40);
block6=new Block(360,225,30,40);
block7=new Block(390,225,30,40);
block8=new Block(420,225,30,40);
block9=new Block(390,185,30,40);
Polygon1=new Polygon(100,100);
ground=new Ground(400,295,250,20)
chain=new Slingshot(Polygon1.body,{x:100,y:100})
block10=new Block(140,600,30,40);
block11=new Block(170,600,30,40);
block12=new Block(200,600,30,40);
block13=new Block(230,600,30,40);
block14=new Block(260,600,30,40);
block15=new Block(170,560,30,40);
block16=new Block(200,560,30,40);
block17=new Block(230,560,30,40);
block18=new Block(200,520,30,40);
ground1=new Ground(210,630,250,20)
}

function draw(){
    background("pink")
    Engine.update(engine);
  block1.display();
   block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
   block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    Polygon1.display();
    chain.display();
    ground.display();
    ground1.display();


}

function mouseDragged(){
  Matter.Body.setPosition(Polygon1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  chain.fly();  
}
function keyPressed(){
  if(keyCode===32){
    chain.attach(Polygon1.body);   
  }
}