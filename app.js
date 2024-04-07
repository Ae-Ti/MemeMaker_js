const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth=2;
const colors = [
    "#00a8ff","#9c88ff","#fbc531","#4cd137","#e84118","#273c75","#353b48",
    "#7f8fa6","#f5f6fa"
]


function onClick(event){
    ctx.moveTo(0,0);
    const color = colors[Math.floor(Math.random()*colors.length)];
    ctx.strokeStyle = color;
    ctx.lineTo(event.offsetX,event.offsetY);
    ctx.stroke();
    ctx.beginPath();
}
canvas.addEventListener("mousemove",onClick);