class RAIN{
    constructor(x,y){
        var options={
            isStatic:false,
            friction:0.1

        }
        
        this.body = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;

        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }

    update(){
        if(this.body.position.y > 500){
            Matter.Body.setPosition(this.body,{x:random(0,600),y:random(10,100)});

        }


    }

}

