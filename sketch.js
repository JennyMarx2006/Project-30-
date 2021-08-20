const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground;
var base1,base2;
var bridge;
var stones=[];
var zombie;
var zombie1,zombie2,zombie3,zombie4;
var breakButton;
var backgroundImg;

function preload(){

zombie1=loadImage("zombie1.png");
zombie2=loadImage("zombie2.png");

zombie3=loadImage("zombie3.png");
zombie4=loadImage("zombie4.png");

backgroundImg=loadImage("background.png");

}

function setup() {
  createCanvas(1200,700);
  engine = Engine.create();
  world = engine.world;

  zombie=createSprite(width/2,height-110);
  zombie.addAnimation("lefttoright",zombie1,zombie2,zombie1);
  zombie.addAnimation("righttoleft",zombie3,zombie4,zombie3);
  zombie.scale=0.1;
  zombie.velocityX=10;

  breakButton=createImg("axe.png");
  breakButton.position(width-200,height/2-50);
  breakButton.size(50,50)
  //breakButton.class("breakbutton");
  breakButton.mousePressed(handleButtonPress);

  frameRate(80);

  for(var i=0; i<=8;i++){
    var x=random(width/2-200,width/2+300);
    var y=random(-10,140);
    var stone=new Stone(x,y);
    stones.push(stone);

  }

ground=new Base(600,680,1200,40);
base1=new Base(100,300,100,50);
base2=new Base(1000,300,100,50);
bridge=new Bridge(15,{x:100,y:280});
jointPoint=new Base(870,280,100,50);

Matter.Composite.add(bridge.body,jointPoint);
jointLink=new Link(bridge,jointPoint);
rectMode(CENTER);
}
function draw() {
  background(backgroundImg);

  Engine.update(engine);

  

  ground.display();
  base1.display();
  base2.display();
  //jointPoint.display();
  bridge.show();
  for(var stone of stones){
    stone.display();
  }

  drawSprites();
}
function handleButtonPress(){
  jointLink.detach();
  setTimeout(()=>{
    bridge.break();
  },1500);
}