var issImg
var spacebg
var spacecraft1Img, spacecraft2Img, spacecraft3Img, spacecraft4Img

var iss, spacecraft, hasDocked = false

function preload() {
  issImg = loadImage("images/iss.png");
  spacebg = loadImage("images/spacebg.jpg");
  spacecraft1Img = loadImage("images/spacecraft1.png");
  spacecraft2Img = loadImage("images/spacecraft2.png");
  spacecraft3Img = loadImage("images/spacecraft3.png");
  spacecraft4Img = loadImage("images/spacecraft4.png");
}

function setup() {
  createCanvas(600, 350);

  iss = createSprite(330, 130, 50, 50);
  iss.addImage(issImg, "ISS");
  iss.scale = 0.75

  spacecraft = createSprite(280, 250, 50, 50);
  spacecraft.addImage(spacecraft1Img, "spacecraft");
  spacecraft.scale = 0.25
}

function draw() {
  background(spacebg);  

  if(!hasDocked) {
    spacecraft.x = spacecraft.x + Math.random(-1, 1);

    if(keyDown("LEFT_ARROW")) {
      spacecraft.addImage(spacecraft4Img, "spacecraftLeft");
      spacecraft.x = spacecraft.x - 3;
    }
    if(keyDown("RIGHT_ARROW")) {
      spacecraft.addImage(spacecraft3Img, "spacecraftRight");
      spacecraft.x = spacecraft.x + 3;
    }
    if(keyDown("UP_ARROW")) {
      spacecraft.addImage(spacecraft2Img, "spacecraftUp");
      spacecraft.y = spacecraft.y - 2;
    }
    if(keyDown("DOWN_ARROW")) {
      spacecraft.addImage(spacecraft2Img, "spacecraftDown");
    }
  }
if(spacecraft.y <=(iss.y + 100) && spacecraft.x<=(iss.x - 5)) {
  hasDocked = true
  textSize(35);
  fill("white");
  text("Docking successfull", 200, 300);
}
  drawSprites();
}