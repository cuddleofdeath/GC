

//BIG TODO: Fix the project so it's actually responsize to window size. It needs to resize when someone resizes it.
// let fxrand;;
let wW = window.innerWidth;
let wH = window.innerHeight;


let dtps;
let dtpr2;

const dtps1 = [
  ["#98f5e1", "#fbf8cc", "#90dbf4", "#fde4cf", "Mineral", "blue"],
  ["#00f5d4", "#fee440", "#00bbf9", "#f15bb5", "Emerald", "red"], ["#ffccd5", "#fff0f3", "#ff4d6d", "#a4133c", "Tesla", "black"],
]


function setup() {
  
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL, 200, 300, 350);
  noLoop();
  rectMode(CENTER);
 
 
 
  background('#AD8AE5');
 

}

function draw() {



  water();

  
  push();
  monster();
  pop();

  circground4();
  circground3();
  circground2();
  circground1();

 
}

let clrs = [
  ['#ffcfd2', '#fde4cf', 'grey', 'green', 'blue'], ['red', 'grey', 'green', 'brown', 'pink']
]


let Col1 = clrs[0];
let Col2 = clrs[1];
let Col3 = clrs[2];
let Col4 = clrs[3];


//console.log(rclrs);
function monster() {
 
  
  let mtnwmax = windowWidth/3;
  let mtnwmin = windowWidth/-100; //was 2.5 before
  let mtnhmax = windowHeight/8;
  let mtnhmin = windowHeight/2;
  let mtnw = random(mtnwmin, mtnwmax);
  let mtnh = random(mtnhmin, mtnhmax);
  

  let wh = windowHeight;
  let ww = windowWidth;

  translate(windowWidth/2, windowHeight/2);

  
  noStroke();
  fill('#fde4cf');
  rotate(6.33);
  let eli1 =  ellipse(mtnw-90, mtnh/1.8, ww*.6, mtnh*2.32);
 

  let eli2 = ellipse(mtnw-95, mtnh/1.7, ww*.4, mtnh*2.23)
  fill('pink');
  let eli3 = ellipse(mtnw-95, mtnh/1.7, ww*.4, mtnh*1.23);




  //eyeball things??
  fill('white');
  ellipse(mtnw-250, mtnh*0.221, ww*.15, mtnh*.23);
  fill('black');
  ellipse(mtnw-250, mtnh*0.221, ww*.075, mtnh*.11);

  fill('white');
  ellipse(mtnw+50, mtnh*0.221, ww*.15, mtnh*.23);
  fill('black');
  ellipse(mtnw+50, mtnh*0.221, ww*.075, mtnh*.11);
  

  fill('black');
  ellipse(mtnw-100, mtnh/2.5, ww*0.35, mtnh*.11);

}



function circground1()
{
  push();
  translate(windowWidth/2, windowHeight);
  noFill();

  strokeWeight(27);
  stroke('#f1c0e8');
  ellipse(0, 0, windowWidth, windowHeight/2.17);
  pop();
}

function circground2() {
  push();
  translate(windowWidth/2, windowHeight);
  noFill();

  strokeWeight(27);
  stroke('#ffcfd2');
  ellipse(0, 0, windowWidth/1.04, windowHeight/2.37);
  pop();
}

function circground3() {
  push();
  translate(windowWidth/2, windowHeight);
  noFill();

  strokeWeight(107);
  stroke('#fde4cf');
  ellipse(0, 0, windowWidth/1.12, windowHeight/2.97);
  pop();
}

function circground4() {
  push();
  translate(windowWidth/2, windowHeight);
  fill('#fbf8cc');
  ellipse(0, 0, windowWidth/1.12, windowHeight/3);
  pop();
}


function ground() {
  push();
  noStroke();
  translate(windowWidth/2, windowHeight);
  fill('beige');
  rect(0, 0, windowWidth, windowHeight/2);
  pop();
}

function water() {
  push();
  noStroke();
  translate(windowWidth/2, windowHeight/1.7); //note: changing the windowHeight to a larger number  will make the top part of the water go up.
  fill('#cfbaf0');
  ellipse(0, 150, windowWidth+100, windowHeight/0.7);
  pop();
}
