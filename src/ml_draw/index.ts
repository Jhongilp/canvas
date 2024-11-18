export const setupDrawApp = (canvas: HTMLCanvasElement) => {
  canvas.width = 600;
  canvas.height = 600;
  const ctx = canvas.getContext("2d")!;

  const draw = () => {
    ctx.clearRect(0, 0, 20, 20);
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 100, 100);
    requestAnimationFrame(draw);
  };
  
  draw();
  
  type Sample = {
    x: number;
    y: number;
  };
  
  const samples: Sample[] = [];
  
  document.addEventListener("mousemove", (e) => {
    const x = e.clientX - canvas.offsetLeft;
    const y = e.clientY - canvas.offsetTop;
    // console.log(x, y);
    samples.push({ x, y });
  
    ctx.fillStyle = "black";
    ctx.fillRect(x, y, 1, 1);
    
  });
  
  document.addEventListener("mouseup", () => {
    console.log("samples", samples);
  });
  document.addEventListener("mousedown", () => {
    // console.log("samples", samples);
  });
}
