class Drop{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, radius, radius, options);
        this.radius = 5;
        World.add(world, this.body);
      }
      
      display(){
        push();


        

        if(this.body.position.y>windowHeight){
            Matter.Body.setPosition(this.body,{x:random(0,windowWidth), y:random(-10,10)})
        }
        
        pop();
      }

      showDrop = function(){
        ellipseMode(RADIUS);

        noStroke();
        fill(100,100,255);

        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
      };
}

