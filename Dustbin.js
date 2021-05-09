class Dustbin{
    constructor(x,y,width,heigth){
        this.image=loadImage("dustbingreen.png")
        var option ={
            isStatic:true,
            'restitution':0,
            'friction':1,
            'density':0.1
        }
        this.body = Bodies.rectangle(x,y,width,heigth,option);
        this.width = width;
        this.heigth = heigth;
        World.add(world,this.body)
    }
display(){

imageMode(CENTER);
image(this.image,this.body.position.x,this.body.position.y,this.width,this.heigth);
}
}