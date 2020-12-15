class Ball{
    constructor(x,y,r){
        var options = {
            isStatic: false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.image=loadImage("paper.png");
        this.body = Matter.Bodies.circle(x ,y, r/3 ,options);
        this.x = x;
        this.y = y;
        this.r=r;        

        Matter.World.add(worldVariable,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        fill("red");
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image,0,0, this.r,this.r );
        pop();
    }
















}