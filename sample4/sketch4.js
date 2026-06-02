function setup() {
  createCanvas(600, 400);
}

function draw() {
  background('#F4F1EA');
  
  let t = millis() * 0.002; 
  let sizeOsc = sin(t) * 15; 
  let moveOsc = cos(t) * 20; 

  //색상변화
  let colorA = color('#FFCCE5');
  let colorB = color('#E5E5FF');
  let amt = map(sin(millis() * 0.001), -1, 1, 0, 1); 
  let dynamicColor = lerpColor(colorA, colorB, amt);

  //왼쪽 원
  let leftCircleOsc = sin(t * 0.8) * 25; 
  strokeWeight(1);
  fill(255);
  ellipse(130, 240, 300 + leftCircleOsc, 300 + leftCircleOsc);
  
  // 오른쪽 원
  noStroke();
  fill('#FDFBF7'); 
  ellipse(450, 150, 420 + sizeOsc, 420 + sizeOsc);
  fill('#CCCCFF'); 
  ellipse(450, 150, 390 + sizeOsc, 390 + sizeOsc);
  fill('#CCE5FF'); 
  ellipse(450, 150, 360 + sizeOsc, 360 + sizeOsc);
  fill('#FFE5E5'); 
  ellipse(450, 150, 330 + sizeOsc, 330 + sizeOsc);
  fill('#FFCCE5'); 
  ellipse(450, 150, 300 + sizeOsc, 300 + sizeOsc);
  fill('#E5E5FF'); 
  ellipse(450, 150, 270 + sizeOsc, 270 + sizeOsc);
  fill('#FFE5FF'); 
  ellipse(450, 150, 240 + sizeOsc, 240 + sizeOsc);
  fill('#E5FFCC'); 
  ellipse(450, 150, 210 + sizeOsc, 210 + sizeOsc);
  fill('#FFCCFF'); 
  ellipse(450, 150, 180 + sizeOsc, 180 + sizeOsc);
  fill('#E5E5FF'); 
  ellipse(450, 150, 150 + sizeOsc, 150 + sizeOsc);
   
  // 삼각형
  let fanOsc = map(sin(t * 1.5), -1, 1, 0.3, 1.8); 
  fill('#E0E0E0'); 
  triangle(20 * fanOsc, 200, 400, 100, 70, 40);
  fill('#FFCCCC'); 
  triangle(80 * fanOsc, 200, 400, 100, 70, 40);
  fill('#FFC0E0'); 
  triangle(140 * fanOsc, 200, 400, 100, 70, 40);
  fill('#FF99CC'); 
  triangle(200 * fanOsc, 200, 400, 100, 70, 40);
  fill('#FFCCCC'); 
  triangle(260 * fanOsc, 190, 400, 100, 70, 40);
  fill('#FF80C0'); 
  triangle(320 * fanOsc, 180, 400, 100, 70, 40);
  fill('#FFC0C0'); 
  triangle(330 * fanOsc, 150, 390, 60, 70, 40);


  rectMode(CENTER);
  noStroke();
  fill('#E0E0FF'); 
  rect(160, 300, 210, 140);
  fill('#C0C0FF'); 
  rect(160, 300, 200, 130);
  
  //색상변화
  fill(dynamicColor); 
  ellipse(160, 300, 190, 120);
  
  fill('#C0C0FF'); 
  rect(160, 300, 180, 110);
  fill('#E0E0FF'); 
  rect(160, 300, 170, 100);
  fill('#C0C0FF'); 
  rect(160, 300, 160, 90);
  
  fill(dynamicColor); 
  ellipse(160, 300, 150, 80);
  
  fill('#C0C0FF'); 
  rect(160, 300, 140, 70);
  fill('#E0E0FF'); 
  rect(160, 300, 130, 60);
  fill('#C0C0FF'); 
  rect(160, 300, 120, 50);
  
  fill(dynamicColor); 
  ellipse(160, 300, 110, 40);
  
  fill('#C0C0FF'); 
  rect(160, 300, 100, 30); 
  
  
  fill(dynamicColor); 
  ellipse(160, 300, 90, 20);
  
  fill('#C0C0FF'); 
  rect(160, 300, 80, 10);

  noFill();
  strokeWeight(3);
  let strokeOsc = sin(frameCount * 0.05) * 0.2; 
  stroke('#FF99CC');
  arc(500, 300, 200, 200, PI + strokeOsc, PI + HALF_PI + strokeOsc);
  stroke('#9999FF');
  arc(520, 320, 150, 150, PI - strokeOsc, PI + HALF_PI - strokeOsc);
  
}
