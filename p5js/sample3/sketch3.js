/*********************************************
  1. mouse:
		- 마우스 위치에 따라 눈동자가 시선을 이동함
		- 마우스 버튼을 클릭하고 있으면
		  * 배경색이 변함
		  * 머리카락 색이 붉게 변하고 길이가 훨씬 짧아짐
		  * 입의 모양이 바뀜
	2. keyboard:
		- 키보드 방향키(좌/우)를 누르면 옷의 색상이 변경됨
***********************************************/

let eyeX = 0; 
let eyeY = 0; 
let shirtColor = '#333399'; 

function setup() {
  createCanvas(400, 600);
  noStroke();
}

function draw() {
  let backColor, hairColor;

  // 마우스를 클릭하면
  if (mouseIsPressed) {
    backColor = color('#E5E5FF'); 
    hairColor = color('#660000'); 
  } else {
    backColor = color(250, 230, 240);
    hairColor = color(0, 0, 0, 180); 
  }

  background(backColor); 

  eyeX = map(mouseX, 0, width, -5, 5);
  eyeY = map(mouseY, 0, height, -5, 5);

  // 1.뒷머리카락
  fill(hairColor);
  beginShape();
  if (mouseIsPressed) {
    vertex(80, 420); 
    bezierVertex(60, 350, 100, 200, 200, 150);
    bezierVertex(300, 200, 340, 350, 320, 420); 
  } else {
    vertex(50, 530);
    bezierVertex(30, 350, 100, 200, 200, 150);
    bezierVertex(300, 200, 370, 350, 350, 530);
  }
  endShape(CLOSE);

  // 2.목
  fill(250, 220, 180);
  rect(170, 350, 60, 80);

  // 3.옷(수정)
  fill(shirtColor);
  rect(90, 430, 220, 200, 30);
  
  fill(0, 0, 0, 40); 
  rect(115, 430, 25, 170); 
  rect(260, 430, 25, 170); 

  fill(255, 255, 255, 150);
  ellipse(200, 500, 12, 12);
  ellipse(200, 530, 12, 12);
  ellipse(200, 560, 12, 12);

  fill(250, 220, 180);
  triangle(170, 430, 200, 470, 230, 430);
  
 

  // 4.얼굴
  fill(250, 220, 180);
  ellipse(200, 250, 220, 270);

  // 5.앞머리
  fill(hairColor);
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

  // 6.귀
  fill(250, 220, 180, 200);
  ellipse(85, 250, 30, 50);
  ellipse(315, 250, 30, 50);
  fill('#FFFF80');
  ellipse(85, 270, 10, 10);
  ellipse(315, 270, 10, 10);

  // 7.눈
  fill(255, 255, 255, 200);
  ellipse(155, 230, 50, 60);
  ellipse(245, 230, 50, 60);
  
  fill(0, 0, 0, 200);
  ellipse(155 + eyeX, 230 + eyeY, 30, 40);
  ellipse(245 + eyeX, 230 + eyeY, 30, 40);
  
  fill(255, 255, 255, 180);
  ellipse(150 + eyeX, 220 + eyeY, 10, 10);
  ellipse(240 + eyeX, 220 + eyeY, 10, 10);

  // 8. 코, 점
  fill(50, 0, 0, 180);
  ellipse(245, 275, 5, 5);
  fill(150, 100, 100, 150);
  ellipse(200, 290, 15, 10);

  // 9.입 
  if (mouseIsPressed) {
    fill(255, 100, 100, 200);
    ellipse(200, 330, 40, 40); 
  } else {
    fill(255, 100, 100, 180);
    arc(200, 320, 60, 40, 0, PI);
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    shirtColor = '#333399'; 
  } else if (keyCode === RIGHT_ARROW) {
    shirtColor = '#FFD1DC'; 
  }
   if (key === 's') {
    saveGif('mySketch', 10);
  }
}