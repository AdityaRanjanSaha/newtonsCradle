class Dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
           
        }
        this.image=loadImage("dustbingreen.png");
        this.bottomBody = Matter.Bodies.rectangle(x,y,width,height/2,options);
        this.width = width;
        this.height = height;
        this. x = x;
        this.y = y;
        Matter.World.add(worldVariable,this.bottomBody);


        this.leftBody = Matter.Bodies.rectangle(this.x- this.width/2,this.y- (this.height/2)-20,height,width/2,options);
        Matter.World.add(worldVariable,this.leftBody);
        

        this.rightBody = Matter.Bodies.rectangle(this.x+ this.width/2,this.y- (this.height/2)-20,height,width/2,options);
        Matter.World.add(worldVariable,this.rightBody);


    }
    display(){

   /* var posLeft=this.leftBody.position;
    push();
    translate(posLeft.x,posLeft.y);
    rectMode(CENTER);
    fill(255);
    rect(0,0,this.height,this.width/2);
    pop();
*/
    var posBottom=this.bottomBody.position;
    push();
    translate(posBottom.x,posBottom.y);
    imageMode(CENTER);
    fill(255);
    image(this.image,0,0,this.width,this.width,this.height);
    pop();

    /*var posRight=this.rightBody.position;
    push();
    translate(posRight.x,posRight.y);
    rectMode(CENTER);
    fill(255);
    rect(0,0,this.height,this.width/2);
    pop();
*/
    }
    
}

