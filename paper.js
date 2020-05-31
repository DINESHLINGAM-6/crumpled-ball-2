class Paper extends Combine {
 
    constructor(x, y) {
     
     super(x,y,50,50)
     
      this.image = loadImage("sprites/paper.png");

      
    }
    display(){
      var pos =this.body.position;
      
      var angle =this.body.angle;
     
     super.display();
    }

   
  };

 
  