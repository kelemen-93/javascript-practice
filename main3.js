var canvas = document.getElementById('myCanvasThree');
var context = canvas.getContext('2d');

context.beginPath();
context.moveTo(0, 300);
context.lineTo(450, 0);
context.strokeStyle = 'red';
context.stroke();