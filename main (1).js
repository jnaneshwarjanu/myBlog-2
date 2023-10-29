function setup() {
    canvas = createcanvas(280, 280,);
    canvas.center();
    background("white");
}



function clearCanvas() {
  background("white");
}
function setup() {
  canvas = creatcanvas(280, 280);
  canvas.center();
  background("white");
  canvas.mouseRelease(classifyCanvas);
  synth = window.speedSynthesis;
}
function preload() {
    classifier = ml5.imageClassifer('Doolnet');
}


function draw() {
}
  //set stroke weight to 13
  strokeWeight(13);
  // set stroke color to black
  stroke(0)
  // if mouse is pressed, draw line between previous and current mouse postion
  if(mouseIsPressed) {
   line(pmouseX, pmouseY, mouseX, mouseY);
    }
   
    function classifyCanvas() {
      classifier.classify(canvas, gotResult);
    }

    function gotResult(error, result) {
      if(error) {
          console.error(error);
      }
      console.log(result);
      document.getElementById('label').innerHTML = 'Label:' +result[0].label;
  
  
      document.getElementById('cofidence').innerHtml = 'Cofidence: '+Math.round(result[0].confidence*100) + '%';
  
  
      utterThis = new SpeechSynthesisUtterance(result[0].label);
      synth.speak(utterThis);
     }
  
  