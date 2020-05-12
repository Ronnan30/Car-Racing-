
var board 
var target 
var board2 
var groupBoard
var score =0 

var gameState="start" 
var time =0 


function preload(){
 board = loadImage("sprite_0.png");  
}

function setup() {
  createCanvas(800,600);
  groupBoard=new Group()
}


function draw() {
  background("black");

  time=World.seconds
  
  if(time>15){

  gameState="end"
  console.log(time)

}
  
if(gameState==="start"){

  spawnDart()
}

else if(gameState==='end'){
  textSize(25)
  fill("white")
  text("GAMEOVER",400,300)
  textSize(30)
  fill("white")
  text("score"+score,400,250)
  
}
  if(mousePressedOver(target)){
    target.destroy()
    console.log("works")
   score=score+1
  }
  
   textSize(25)
  text("score:"+score,700,100)
  drawSprites();
}
function spawnDart(){

x=Math.round(random(0,800))
y=Math.round(random(0,600))

if(World.frameCount%70===0){
    target=createSprite(x,y,20,20)
  target.addImage("dartBoard",board)
 target.scale=1/2
 target.debug=true
target.setCollider("circle",0,0,50)
target.lifetime= 50
groupBoard.add(target)


}








}