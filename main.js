var cx ;
var cy ;
var lx  = 0 ;
var ly  = 0;
var ME ;
var widthOL = 5 ;
var Radius = 3;
var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var gradient = ctx.createLinearGradient(50,20,30,0);
gradient.addColorStop(0,"red");
gradient.addColorStop(1,"white");
var colour = "black";
canvas.addEventListener("mousedown",my_MouseDown);
function my_MouseDown(e){
    colour = document.getElementById("Colour-Name").value;
    widthOL = document.getElementById("Width").value ;
    radius = document.getElementById("Radius").value;
    ME =    "MouseDown";
}
canvas.addEventListener("mouseUp",my_MouseUp);
function my_MouseUp(e){
    colour = document.getElementById("Colour-Name").value;
    widthOL = document.getElementById("Width").value ;
    radius = document.getElementById("Radius").value;
    ME =    "MouseUp";
}
canvas.addEventListener("mouseleave",my_MouseLeave);
function my_MouseLeave(e){
    colour = document.getElementById("Colour-Name").value;
    widthOL = document.getElementById("Width").value ;
    radius = document.getElementById("Radius").value;
    ME =    "MouseLeave";
}
canvas.addEventListener("mousemove",my_MouseMove);
function my_MouseMove(e){
    cx = e.clientX - canvas.offsetLeft ;
    cy = e.clientY - canvas.offsetTop ;
    if(ME == "MouseDown"){
        colour = document.getElementById("Colour-Name").value;
        radius = document.getElementById("Radius").value;
        widthOL = document.getElementById("Width").value ;
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = widthOL;
        ctx.fillStyle = gradient;
        ctx.arc(cx,cy,widthOL,0,360);
        ctx.stroke();
    }
    lx = cx ;
    ly = cy ;
}
function Clear(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

