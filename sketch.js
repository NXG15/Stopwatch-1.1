var seconds = 00;
var minutes = 00;

//Hold extra 0
var displaySeconds = 0;
var displayMinutes = 0;

//status of the timer
var status = "running";

function setup() {
  createCanvas(800,400);
  
  //start button
  start = createButton("Start");
  start.size(45,20);
  start.position(270,250);
  

  //end button
  end = createButton("End");
  end.size(45,20);
  end.position(370,250);
  end.mousePressed(stop);

  //reset button
  reset = createButton("Reset");
  reset.size(45,20);
  reset.position(470,250);
  reset.mousePressed(redo);
}

function draw() {
  background(59,178,166);

  //display time
  stopWatch();
  
  fill("white");
  textSize(60);
  textFont('Georgia');
  text(displayMinutes + " : " + displaySeconds,300,180); 
  
}

function stopWatch(){
  
  if(status == "running"){
  frameRate(1);
  seconds += 1;

  //minutes
  if(seconds/60 == 1){
    seconds =0;
    minutes += 1;
  }

  //adding an extra 0 to seconds
  if(seconds<10){
    displaySeconds = "0" + seconds.toString();
  }

  else{
    displaySeconds = seconds;
  }

  //adding an extra 0 to minutes
  if(minutes<10){
    displayMinutes = "0" + minutes.toString();
  }

  else{
    displayMinutes = minutes;
  }
}
  
}

//stop the timer
function stop(){
  status = "stopped";

  if(status == "stopped"){
    seconds = seconds;
    minutes = minutes;
  }
}

//restart the timer
function redo(){
  status = "redo";

  if(status == "redo"){
    seconds = 00;
    minutes = 00;
    displaySeconds = seconds;
    displayMinutes = minutes;
  }
}

