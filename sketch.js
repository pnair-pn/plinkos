const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 795, 480, 20);
  
  for (var k = 0; k <= width; k = k + 80)
  {
    divisions.push(new Division(k, height - divisionHeight/2, 10, divisionHeight))
  }
  for (var p = 40; p <= width; p = p + 50)
  {
    plinkos.push(new Plinko(p,75));
  }
  for (var l = 15; l <= width - 10; l = l + 50)
  {
    plinkos.push(new Plinko(l,175));
  }
  for (var p = 40; p <= width; p = p + 50)
  {
    plinkos.push(new Plinko(p,275));
  }
  for (var l = 15; l <= width - 10; l = l + 50)
  {
    plinkos.push(new Plinko(l,375));
  }
}
  
function draw() {
  background(0); 
  Engine.update(engine);
  
  ground.display(); 

  //push();
  
  for (var k = 0; k < divisions.length; k++)
  {
    divisions[k].display();
  }
  if (frameCount % 60 === 0)
  {
    particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
  }
  for (var j = 0; j < particles.length; j++)
  {
    particles[j].display();
  }
  for (var p = 0; p < plinkos.length; p++)
  {
    plinkos[p].display();
  }
    for (var l = 0; l < plinkos.length; l++)
  {
    plinkos[l].display();
  }
  
  }
  //pop();
