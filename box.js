class Box{
    constructor(x,y){
        var A={
            restitution:0.5
        }
        this.body=Bodies.rectangle(x,y,70,70,A)
        this.width=70
        this.height=70
        World.add(world,this.body)
    }
    display(){
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }
}