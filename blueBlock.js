class blueBox{
  constructor(x, y){
    
    this.blueImg = loadImage("blue block.png");
    this.visibility = 255;
    var options={
      restitution:0.1,
      density:1.2,
      friction:1.5,

    }
    this.body=Bodies.rectangle(x,y,30,40,options);
    this.x=x;
    this.y=y;
    this.width=30;
    this.height=40;
    World.add(world,this.body)
  }
  display(){
   
       if(this.body.speed>2.5)
    {
      World.remove(world,this.body);
      push();
      this.Visibility=this.Visibility-5;
      tint(255,this.Visibility);
      var pos=this.body.position;
      image(this.image,pos.x,pos.y,this.width,this.height)
      pop();
    }
    else
    {
      imageMode(CENTER)
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
      super.display();
    }
  }
