class umbrella{
    constructor(x, y,r) {

        var options ={
            isStatic : true,
            restitution:0.1,
            friction : 0.1
        }

        this.r=r;
        this.body = Bodies.circle(x, y,r,options);
        //this.image = loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png");   
        World.add(world, this.body);
    }
        display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        //fill("red")
        imageMode(CENTER);
        image(this.image,0, 0, this.r,this.r);
        pop();
    }

        }
    
    