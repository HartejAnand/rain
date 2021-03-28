class Umbrella {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,50,100,options);
      this.image = loadImage("images/walking_1.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      imageMode(CENTER);
      noStroke();
      fill(100,0,100);
      image(this.image, pos.x, pos.y, this.width, this.height);
      pop();
    }
  };
