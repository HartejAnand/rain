class Drop{
  constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, 5,  options);
      this.radius = 5;
      World.add(world, this.body);
    }
    
    display(){
     
      if(this.body.position.y>windowHeight){
          Matter.Body.setPosition(this.body,{x:random(0,windowWidth), y:random(-10,0)})
      }
      
      
    }

    showDrop = function(){
      

      noStroke();
      fill(100,100,255);
      ellipseMode(RADIUS);
      ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
    };
}
