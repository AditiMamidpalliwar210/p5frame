
function preload(){

}

function setup(){
    canvas=createCanvas(500,500)
video=createCapture(VIDEO);
video.hide()
color=""
}

function draw()
{
stroke("pink");
fill("black");
rect(0,0,500,500);
stroke("pink");
fill("gold");
rect(25,25,450,450);
image(video,50,50,400,400);
tint(color);

}
 function pickcolor(){
color=document.getElementById("pickcolor").value;

 }

 function take_snapshot(){
    save("pick.png")
 }