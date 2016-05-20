/**
 * Created by Robin on 20/05/2016.
 */
//let's do some interesting javascript stuff in here.
var canvas;
var context;
var width;
var height;

//initialisation
this.initialise = function(){
    //let's grab the canvas
    canvas = document.getElementById("canvas1");
    context = canvas.getContext('2d');
    width = canvas.width;
    height = canvas.height;
    fitToContainer(canvas);

    //let's fill in the canvas so we can see it easily
    context.fillStyle="#FF0000";
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function fitToContainer(canvas){
    canvas.style.width = '100%';
    canvas.style.height = '100%';

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
}


$(document).ready(function(){
    initialise();
    console.log("Width of canvas is: " + width);
    console.log("Height of canvas is: " + height);
});