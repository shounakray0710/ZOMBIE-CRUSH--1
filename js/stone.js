class Stone {
    constructor(x, y, w,h) 

    {
        var stone_options={
             density: 0.001
        };
        
        stone  = Bodies.circle(300,300,15,stone_options)
        this.w = w;
        this.h = h;
        World.add(world, this.body);
      }
    
      show() {
        let pos = this.body.position;
        push();
        ellipseMode(RADIUS);
        noStroke();
        fill(148,127,146);
        ellipse(fruit.position.x,fruit.position.y,15,15)
        pop();
      }
    }
    
