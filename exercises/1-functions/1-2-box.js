"use strict";

alert("Test oefening 2");

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

coloredBox();
function coloredBox() {

    context.lineWidth =7.5;
    context.strokeStyle = 'black';
    context.beginPath();
    context.moveTo(50,300);
    context.lineTo(50,50);
    context.stroke();

    context.lineWidth =7.5;
    context.strokeStyle = 'black';
    context.beginPath();
    context.moveTo(50,50);
    context.lineTo(300,50);
    context.stroke();

    context.lineWidth =7.5;
    context.strokeStyle = 'black';
    context.beginPath();
    context.moveTo(300,50);
    context.lineTo(300,300);
    context.stroke();

    context.lineWidth =7.5;
    context.strokeStyle = 'black';
    context.beginPath();
    context.moveTo(300,300);
    context.lineTo(50,300);
    context.stroke();

    context.lineWidth =7.5;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(50,50);
    context.lineTo(300,300);
    context.stroke();

    context.lineWidth =7.5;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(300,50);
    context.lineTo(50,300);
    context.stroke();

    

}