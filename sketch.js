var bgimg;
var menu;
var gameState = 0;
var player;
var cloneboi;

function preload(){
  bgimg = loadImage("images/bg.jpg")


}


function setup() {
  gameState = 0;
  createCanvas(windowWidth,windowHeight);
  menu = new Menu(windowWidth/2,windowHeight-350);
  player = new Player(windowWidth-1500,windowHeight-80)
  cloneboi = new Clone(windowWidth-100,windowHeight-80)
}

function draw() {
  background(bgimg);  
  drawSprites();

  if(gameState === 0){
    if(mousePressedOver(menu.newgame)){
      gameState = 1;
      menu.newgame.destroy();
      menu.quit.destroy();
      menu.verity.destroy();
    }
  }
  else if(gameState === 1) {
    player.andy.visible = true;
    cloneboi.clone.visible = true;
    player.move()
  }
  }