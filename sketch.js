function setup() {
    createCanvas(400, 400);
    background("whith");
  }
  
  function draw()  {
  
    stroke("blue")
    fill("red")
    
    // console.log(mouseIsPressed);
    
    if  (mouseIsPressed) {
    rect(mouseX, mouseY, 10, 10);
    }
  }