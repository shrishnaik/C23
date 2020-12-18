const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
ground=Bodies.rectangle(200,390,400,20,{isStatic:true})
World.add(world,ground)

var A={
    restitution:0.5
}
ball=Bodies.circle(200,90,20,A)
World.add(world,ball)
 box=new Box(50,50)  
 box1=new Box(300,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    box.display()
    box1.display()
    rectMode(CENTER)
    rect(ground.position.x,ground.position.y,400,20)
    ellipseMode(RADIUS)
    ellipse(ball.position.x,ball.position.y,20,20)

}