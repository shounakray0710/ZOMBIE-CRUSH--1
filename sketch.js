const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var base;
var leftWall;
var rightWall;
var bridge;
var stones = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  base = new Base (200,680,600,20);
leftWall = new LeftWall(300,height/2+50,600,100,"#8d6e63",true);
rightWall = new RightWall(width - 300,height/2+50,600,100,"#8d6e63",true);

bridge = new Bridge (15,{x: width/2-400,y:height/2});
jointPoint = new Base(width - 600,height/2+10,40,20,"#8d6e63",true);

Matter.Composite.add(bridge.body, jointPoint );
jointLink = new Link(bridge,jointPoint);

for (var i = 0; i<= 8;i++){
  var x = random(width/2-100,width/2+300);
  var y = random(-10,140);
  var stone = new Stone ( X, Y ,80,80);
  stones.push(Stone);
}

 
}

function draw() {
  background(51);
  Engine.update(engine);

  ground.show();
  bridge.show();
  LeftWall.show();
  RightWall.show();

for(var stone of stones){
  stone.show();
}
}



