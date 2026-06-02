function setup() {
  createCanvas(400, 600);
    noStroke(); 

}

function draw() {
  background(250, 230, 240); 

  fill(0, 0, 0, 180); 
  beginShape();
  vertex(50, 600);
  bezierVertex(30, 400, 100, 200, 200, 150); 
  bezierVertex(300, 200, 370, 400, 350, 600);
  endShape(CLOSE);

  fill(250, 220, 180); 
  rect(170, 350, 60, 80); 

  //옷
  fill('#99CCFF'); 
  rect(90, 430, 220, 200,30); 
  fill(250, 220, 180);
  triangle(170, 430, 200, 470,230, 430); 
  stroke(100);
  line(140,480,120,600);
    line(260,480,280,600);
      noStroke(); 

  //얼굴
  fill(250, 220, 180); 
  ellipse(200, 250, 220, 270); 

 //앞머리
  fill(0, 0, 0, 180);
  beginShape();
  vertex(200, 100);
  bezierVertex(80, 120, 90, 200, 100, 300); 
  bezierVertex(90, 240, 120, 190, 200, 140);
    endShape(CLOSE);

    beginShape();

  vertex(200, 100); 
  bezierVertex(360, 150, 270, 200, 310, 300); 
  bezierVertex(300, 260, 280, 190, 200, 140);
  endShape(CLOSE);
  
  //귀,귀걸이
  fill(250, 220, 180, 200); 
  ellipse(85, 250, 30, 50); 
  ellipse(315, 250, 30, 50); 
  fill('#FFFF80'); 
  ellipse(85, 270, 10, 10); 
  ellipse(315, 270, 10, 10); 

  //눈 
  fill(255, 255, 255, 200); 
  ellipse(155, 230, 50, 60); 
  ellipse(245, 230, 50, 60); 
  fill(0, 0, 0, 200); 
  ellipse(155, 230, 30, 40);
  ellipse(245, 230, 30, 40);
  fill(255, 255, 255, 180); 
  ellipse(150, 220, 10, 10);
  ellipse(240, 220, 10, 10);

  
  fill(50, 0, 0, 180);
  ellipse(245, 275, 5, 5); 

  fill(150, 100, 100, 150);
  ellipse(200, 290, 15, 10); 

  //입 
  fill(255, 100, 100, 180); 
  arc(200, 320, 60, 40, 0, PI);

}