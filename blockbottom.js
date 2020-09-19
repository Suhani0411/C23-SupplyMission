class Bottom {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      
      rectMode(CENTER);
      
      fill(255,0,0);
      rect(0, 0, this.width, this.height);
      
    }
  };
  