class Bob {
    constructor(x,y){
        var opt = {
            isStatic : false,
            restitution : 1,
            friction : 0, 
            density : 8,
        }
        this.body = Bodies.circle(x,y,25,opt)
        World.add(world,this.body)

        console.log(this.body);
    }
   
    display(){
        push();
        ellipseMode(RADIUS);
        fill(255,0,255);
        ellipse(this.body.position.x,this.body.position.y,25,25)
        pop();
    }
}