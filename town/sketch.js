const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,stand;
var poloygon;
var poloygonImage;
var sling;

function preload(){
  poloygonImage = loadImage("images/images.png")
}

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,height,1200,20);
  stand = new Ground(390, 300, 300, 10);
 
poloygon = Bodies.circle(50,200,20);
World.add(world,poloygon);

sling= new SlingShot(this.poloygon,{x:100,y:200});

  box1=new Box(300,275,30,40);
  box2=new Box(330,275,30,40);
  box3=new Box(360,275,30,40);
  box4=new Box(390,275,30,40);
  box5=new Box(420,275,30,40);
  box6=new Box(450,275,30,40);
  box7=new Box(480,275,30,40);

  box8=new Box(330,235,30,40);
  box9=new Box(360,235,30,40);
  box10=new Box(390,235,30,40);
  box11=new Box(420,235,30,40);
  box12=new Box(450,235,30,40);

  box13=new Box(360,195,30,40);
  box14=new Box(390,195,30,40);
  box15=new Box(420,195,30,40);

  box16=new Box(390,155,30,40);
  
}

function draw() {
  background(0);

  Engine.update(engine);
  ground.display();
  stand.display(); 
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  sling.display();
  imageMode(CENTER);
  image(poloygonImage,poloygon.position.x,poloygon.position.y,40,40)
  drawSprites();
}

function mouseDragged(){
  
       Matter.Body.setPosition(this.poloygon, {x: mouseX , y: mouseY});
  }



function mouseReleased(){
  slingshot.fly();

}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(this.poloygon);
  }
}