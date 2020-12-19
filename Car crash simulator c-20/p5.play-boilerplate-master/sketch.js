var car1,car2,car3,car4,wall;
var speed,weight,
var def1, def2, def3, def4;


function setup() {
  createCanvas(1600,800);
  speed = random(55,90)
  speed2 = random(55,90)
  speed3 = random(55,90)
  speed4 = random(55,90)

  weight  = random(400,1500)  
  weight2 = random(400,1500)
  weight3 = random(400,1500)
  weight4 = random(400.1500)

  background("black")

  car1 = createSprite(50,100,50,50)
  car2 = createSprite(50,200,50,50)
  car3 = createSprite(50,300,50,50)
  car4 = createSprite(50,400,50,50)
  wall = createSprite(1500,200,60,500)
  wall.shapeColor = (80,80,80)

  car1.velocityX = speed;
  car2.velocityX = speed2;
  car3.velocityX = speed3;
  car4.velocityX = speed4;

  def1 = 0.5(speed)(speed)(weight)/22500
  def2 = 0.5(speed2)(speed2)(weight)/22500
  def3 = 0.5(speed3)(speed3)(weight)/22500
  def4 = 0.5(speed4)(speed4)(weight)/22500

  if def1 > 180 {
    car1.shapeColor = ("red")
  }

  if def1 > 80 && def1 < 180{
    car1.shapeColor = ("yellow")
  }





  



}

function draw() {
  background(255,255,255);  
  drawSprites();
}