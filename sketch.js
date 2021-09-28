var trex
function setup() {
  createCanvas(400,400);
   trex = createSprite (200,150)
}

function draw() 
{
  background(30);
drawSprites()
if(keyIsDown(DOWN_ARROW)){
  trex.y = trex.y+2

}

}




