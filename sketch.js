const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon,polygonImg;

function preload(){
  polygonImg=loadImage("polygon.png");
  
}
function setup() {
  var canvas = createCanvas(1000,400);
  engine = Engine.create();
  
  world = engine.world;
  ball1=new greyBox(480,275);
  ball2=new greyBox(510,275);
  ball3=new greyBox(540,275);
  ball4=new greyBox(570,275);
  ball5=new greyBox(600,275);
  ball6=new greyBox(450,275);
  ball7=new greyBox(630,275);
  ball8=new greyBox(480,235);
  ball9=new greyBox(510,235);
  ball10=new greyBox(540,235);
  ball11=new greyBox(570,235);
  ball12=new greyBox(600,235);
  ball13=new greyBox(510,195);
  ball14=new greyBox(530,195);
  ball15=new greyBox(560,195);
  ball16=new greyBox(530,155);
  ball17=new greyBox(800,100);
  ball18=new greyBox(800,140);
  ball19=new greyBox(830,140);
  ball20=new greyBox(770,140);
  ball21=new greyBox(800,180);
  ball22=new greyBox(830,180);
  ball23=new greyBox(860,180);
  ball24=new greyBox(770,180);
  ball25=new greyBox(740,180);
  ground1=new Ground(500,390,1000,20);
  ground2=new Ground(550,305,250,20);
  ground3=new Ground(800,205,250,20);
  var options={
    density:2.5,
    restitution:0.5,
    friction:1.2,
  }
  polygon=Bodies.circle(200,200,20,options);
  World.add(world,polygon);
  chain1=new SlingShot(this.polygon,{x:200,y:200});
}
function draw() {
  background("black"); 
 
  Engine.update(engine);
  fill("white")
  textSize(15)
  text("Drag the mouse to play. Press space to get the second chance.",300,100);
  fill(135,206,234);

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  ball7.display();
  fill("pink");
  ball8.display();
  ball9.display();
  ball10.display();
  ball11.display();
  ball12.display();
  fill("yellow");
  ball13.display();
  ball14.display();
  ball15.display();
  fill("lightgreen");
  ball16.display();
  fill(254,192,203);
  ball17.display();
  fill(63,224,208);
  ball18.display();
  ball19.display();
  ball20.display();
  fill(135,206,234);
  ball21.display();
  ball22.display();
  ball23.display();
  ball24.display();
  ball25.display();
  chain1.display();
  ground1.display();
  ground2.display();
  ground3.display();
  imageMode(CENTER);
  image(polygonImg,this.polygon.position.x,this.polygon.position.y,40,40);
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  chain1.fly();
}
function keyPressed(){
  if(keyCode === 32){
      chain1.attach(this.polygon);
  }
  
}
