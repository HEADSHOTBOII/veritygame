class Player{
    constructor(x, y){
         this.andy = createSprite(x,y,20,60)
         this.andy.visible = false;
         this.andy.debug = true;
         this.andystill = loadImage("images/tile000.png")
         this.andyimg = loadAnimation("images/tile000.png", "images/tile001.png", "images/tile002.png")
       this.andy.addAnimation("andy", this.andystill)
         
        this.andy.scale=3

        

    }
 move() {
    if(keyDown('a') || keyDown(LEFT_ARROW)){
        this.andy.x = this.andy.x - 2;
        this.andy.changeAnimation("andy", this.andyimg)

    }
     else  if(keyDown('d') || keyDown(RIGHT_ARROW)){
        this.andy.x = this.andy.x + 2;
        this.andy.changeAnimation("andy", this.andyimg)

    }
    
  
    
}
}