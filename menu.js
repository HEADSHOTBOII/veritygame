class Menu{
    constructor(x, y){
        this.ngimg = loadImage("images/newgame.png")
        this.verityimg = loadImage("images/Verity.png")
        this.verity=createSprite(x,y-250);
        this.quitimg= loadImage("images/quit.png")
        this.newgame = createSprite(x,y,200,100);
        this.quit = createSprite(x,y+200,200,100)
        this.newgame.addImage(this.ngimg)
        this.quit.addImage(this.quitimg)
        this.verity.addImage(this.verityimg)
        this.verity.scale=2;
      

    }
}