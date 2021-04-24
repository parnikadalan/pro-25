class Paper{
    constructor(x,y){
        var options ={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }

        this.body = Bodies.circle(x,y,20, options)
        this.radius = 30
        this.image = loadImage("paper.png")
        World.add(world, this.body)
    }

    display(){
        var pos = this.body.position
        push()
        translate(pos.x, pos.y)
        rotate(this.body.angle)
        imageMode(CENTER)
        fill("pink")
        image(this.image,0,0,this.radius+20, this.radius+20)
        pop()
    }
}