var answers = [
    "Simon says click red !", 
    "Simon says click green !",
    "Simon says click 1 !", 
    "Simon says click 2 !", 
    "Click green",
    "Click red", 
    "Click 1", 
    "Click 2"
];

var score = 0;
var total = document.getElementById("score");
var statement  = document.getElementById("instruct");
var randomStatement = answers[Math.floor(Math.random() * answers.length)];



function refresh(){
    randomStatement = answers[Math.floor(Math.random() * answers.length)];
    statement.innerHTML = randomStatement;
}

function pressTrick(){
if(randomStatement === "Click green" || randomStatement === "Click red" || randomStatement === "Click 1" || randomStatement === "Click 2"){
    score++;
    total.style.color = "green";
    total.innerHTML = "Total score: " + score;
    setTimeout(refresh,900);
} else {
    total.style.color = "red";
    score--;
    total.innerHTML = "Total score: " + score;
    setTimeout(refresh,900);
  
}
}

function pressRed(){
    if(randomStatement === "Simon says click red !" || randomStatement === "Simon says click 2 !"){
    score++;
    total.style.color = "green";
    total.innerHTML = "Total score: " + score;
    setTimeout(refresh,900);    
}  else {
   total.style.color = "red";
   score--;
   total.innerHTML = "Total score: " + score;
   setTimeout(refresh,900);

   
}}


function pressGreen(){
    if(randomStatement === "Simon says click 1 !" || randomStatement === "Simon says click green !"){
    score++;
    total.style.color = "green";
    total.innerHTML = "Total score: " + score;
    setTimeout(refresh,900);
}   else {
    total.style.color = "red";
    score--;
    total.innerHTML = "Total score: " + score;
    setTimeout(refresh,900);

}}

function  start(){
    var i = 60;
    var count = setInterval(timer,1000);
    score = 0;
    total.innerHTML =  "Total score: " + score;
    total.style.color = "white";
    refresh();
    


function timer() {
    var display = document.getElementById("timer");
    var finished = document.getElementById("heading");
   

    if(i < 1){
   clearInterval(count);
   finished.innerHTML = "Game Over! Your final Score is : " + score;
   display.style.color = "red";
   display.style.fontWeight = "bold";
   document.body.style.backgroundColor = "black";

} else if(i <= 10) {
    i--;
   display.style.color = " red";
   display.style.fontWeight = "bold";
   display.innerHTML =  i + " Seconds Left";
} else  {
    i--;
    display.style.color = "green";
    display.style.fontWeight = "bold";
    display.innerHTML =  i + " Seconds Left";  
}}}
