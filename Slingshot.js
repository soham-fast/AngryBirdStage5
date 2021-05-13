class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");

    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,60,40,160);
        image(this.sling2,178,60,35,90);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(8);
            stroke("#301608")
            
            if(this.sling.bodyA.position.x>260){
                line(pointA.x-30, pointA.y, pointB.x, pointB.y-10);
                line(pointA.x-20, pointA.y, pointB.x+20, pointB.y-10);
                image(this.sling3,pointA.x+20,pointA.y-15,15,30); 
            }
            else{
                line(pointA.x-30, pointA.y, pointB.x, pointB.y-10);
                line(pointA.x-20, pointA.y, pointB.x+20, pointB.y-10);
                image(this.sling3,pointA.x-30,pointA.y-15   ,15,30);
            }
        }


    }
    
}