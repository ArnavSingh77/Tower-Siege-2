class greyBox{
  constructor(x, y){
    
    this.greyImg = loadImage("grey block.png");
    var options={
      restitution:0.1,
      density:1.2,
      friction:1.5,
      this.visibility = 255;
    }
    this.body=Bodies.rectangle(x,y,30,40,options);
    this.x=x;
    this.y=y;
    this.width=30;
    this.height=40;
    World.add(world,this.body)
  }
  display(){
   
    if(this.body.speed<4){
      
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,30,40);
      pop();
    }
    else{
      World.remove(world,this.body);
      push();
      this.Visibility=this.Visibility-3;
      tint(255,this.Visibility);
      image(this.greyImg, this.body.position.x, this.body.position.y, 50, 50)
      
      pop();
    }
  }
}
