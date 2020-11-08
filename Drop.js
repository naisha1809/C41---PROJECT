class drop{
    constructor(x, y,r) {

        var options ={
            restitution:0.4,
            isStatic : false
        }

        this.r=r;
        this.body = Bodies.circle(x, y,r,options);   
        World.add(world, this.body);
    }
        display(){
        var pos = this.body.position;
        fill("red")
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y, this.r,this.r);
    }

       update(){
          if(this.body.position.y<height){
             Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
       }

        }
    }