class Stone{
    constructor(x,y){
        
        this.radius=40;
        this.body=Bodies.circle(x,y,this.radius);
       
        World.add(world,this.body);
    }
    display(){
        var angle=this.body.angle;
        var pos=this.body.position;

        push();
        rectMode(CENTER);
        ellipse(pos.x,pos.y,this.radius);
        pop();
    }
}