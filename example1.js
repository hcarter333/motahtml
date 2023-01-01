// JavaScript source code
var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');

context.font = '38pt Courier';
context.fillStyle = 'green';
context.strokeStyle = 'red';

context.fillText('diana sam', canvas.width/2 - 150,
                                 canvas.height/2 + 15);

context.strokeText('ded Canvas', canvas.width/2 - 150,
                                   canvas.height/2 + 15 );

