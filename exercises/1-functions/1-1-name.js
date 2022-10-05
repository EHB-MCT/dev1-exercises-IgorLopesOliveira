"use strict";
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawName();
function drawName() {

    context.lineWidth =7.5;
    context.strokeStyle = 'yellow';
    context.beginPath();
    context.moveTo(50,300);
    context.lineTo(50,50);
    context.stroke();

    context.lineWidth =7.5;
    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(70,300);
    context.lineTo(70,50);
    context.stroke();

    context.lineWidth =7.5;
    context.strokeStyle = 'green';
    context.beginPath();
    context.moveTo(70,50);
    context.lineTo(140,50);
    context.stroke();

    context.lineWidth =7.5;
    context.strokeStyle = 'yellow';
    context.beginPath();
    context.moveTo(70,300);
    context.lineTo(140,300);
    context.stroke();

    context.lineWidth =7.5;
    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(140,300);
    context.lineTo(140,200);
    context.stroke();

    context.lineWidth =7.5;
    context.strokeStyle = 'green';
    context.beginPath();
    context.moveTo(140,200);
    context.lineTo(105,200);
    context.stroke();

    context.lineWidth =7.5;
    context.strokeStyle = 'yellow';
    context.beginPath();
    context.moveTo(160,300);
    context.lineTo(160,50);
    context.stroke();

    context.lineWidth =7.5;
    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(160,50);
    context.lineTo(230,50);
    context.stroke();

    context.lineWidth =7.5;
    context.strokeStyle = 'green';
    context.beginPath();
    context.moveTo(160,300);
    context.lineTo(230,300);
    context.stroke();

    context.lineWidth =7.5;
    context.strokeStyle = 'yellow';
    context.beginPath();
    context.moveTo(230,300);
    context.lineTo(230,50);
    context.stroke();

    context.lineWidth =7.5;
    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(250,300);
    context.lineTo(250,50);
    context.stroke();

    context.lineWidth =7.5;
    context.strokeStyle = 'green';
    context.beginPath();
    context.moveTo(250,50);
    context.lineTo(320,50);
    context.stroke();

    context.lineWidth =7.5;
    context.strokeStyle = 'yellow';
    context.beginPath();
    context.moveTo(320,50);
    context.lineTo(320,120);
    context.stroke();

    context.lineWidth =7.5;
    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(320,120);
    context.lineTo(250,120);
    context.stroke();

    context.lineWidth =7.5;
    context.strokeStyle = 'green';
    context.beginPath();
    context.moveTo(250,120);
    context.lineTo(320,300);
    context.stroke();


}