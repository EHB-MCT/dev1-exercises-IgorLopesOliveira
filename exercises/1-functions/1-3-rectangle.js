"use strict";

alert("Test oefening 3");

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawRectangles();
function drawRectangles() {

    context.lineWidth =1;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(50,50);
    context.lineTo(150,50);
    context.stroke();

    context.lineWidth =1;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(50,50);
    context.lineTo(50,150);
    context.stroke();


    context.lineWidth =1;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(50,150);
    context.lineTo(100,150);
    context.stroke();

    context.lineWidth =1;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(150,50);
    context.lineTo(150,100);
    context.stroke();


    context.lineWidth =1;
    context.strokeStyle = 'red';
    context.beginPath();
    context.rect(100,100,100,100);
    context.stroke();
    context.fillStyle ="black"
    context.fill();

    context.lineWidth =1;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(250,250);
    context.lineTo(250,150);
    context.stroke();


    context.lineWidth =1;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(250,250);
    context.lineTo(150,250);
    context.stroke();

    context.lineWidth =1;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(150,250);
    context.lineTo(150,200);
    context.stroke();

    context.lineWidth =1;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(250,150);
    context.lineTo(200,150);
    context.stroke();

    context.lineWidth =1;
    context.strokeStyle = 'red';
    context.beginPath();
    context.rect(240,50,10,10);
    context.stroke();
    context.fillStyle ="black"
    context.fill();

    context.lineWidth =1;
    context.strokeStyle = 'red';
    context.beginPath();
    context.rect(50,240,10,10);
    context.stroke();
    context.fillStyle ="black"
    context.fill();

    context.lineWidth =1;
    context.strokeStyle = 'red';
    context.beginPath();
    context.rect(200,60,40,40);
    context.stroke();

    context.lineWidth =1;
    context.strokeStyle = 'red';
    context.beginPath();
    context.rect(60,200,40,40);
    context.stroke();





    

    
    
    
}