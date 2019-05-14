class Squares extends Shape{
  constructor(maxR,minR,maxV,minV,a){
    super(maxR,minR,maxV,minV,a);
  }
  
  display (){
    for(var b = 0; b < shapes.length; b++) {
      fill(shapes[b].c[0], shapes[b].c[1], shapes[b].c[2], 100);
      noStroke();
      rect(shapes[b].x, shapes[b].y ,shapes[b].r*2, shapes[b].r*2);
    
      let d = dist(shapes[b].x , shapes[b].y, mouseX, mouseY);
      if(d<shapes[b].r && mouseIsPressed){
        shapes.splice(b,1);
        counter++;
        console.log(counter);
        }
      }
    }

    create (maxR,minR,maxV,minV,a){
      for(let i = 0; i < a; i++){
        var square = {
          x:random(width-30),
          y:0+15,
          r:random(minR,maxR),
          v:random(minV,maxV),
          c: [random(50,250), random(50,250) ,random(50,250)],
        }
      
        var overlapping = false;
        for(var j = 0; j<shapes.length ; j++){
             var other = shapes[j];
              var d = dist(square.x, square.y, other.x , other.y);
               if( d < square.r + other.r){
                     overlapping= true;
              break;
          }
      }
      
      if(!overlapping) {
        shapes.push(square);
          }
        }
      }




}


