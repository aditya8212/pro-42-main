class MAN{
    constructor(){
        var options={
            isStatic:true

        }
        
        this.body = Bodies.rectangle(300,350,10,10,options);
        this.width = 300;
        this.height = 300;
        this.image = loadImage("walking_1.png");
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
    }

}