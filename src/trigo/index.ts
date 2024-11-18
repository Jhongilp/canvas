type Point = { x: number; y: number };

const Drawer = (ctx: CanvasRenderingContext2D) => {
  return {
    drawPoint(loc: Point, size = 20, color = "black") {
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.arc(loc.x, loc.y, size / 2, 0, Math.PI * 2);
      ctx.fill();
    },
    drawText(text: string, loc: Point, color = "white") {
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = "bold 13px Courier";
      ctx.fillText(text, loc.x, loc.y);
    },
    drawCoordinateSystem(OFFSET: Point) {
      ctx.beginPath();
      ctx.moveTo(-OFFSET.x, 0);
      ctx.lineTo(ctx.canvas.width - OFFSET.x, 0);
      ctx.moveTo(0, -OFFSET.y);
      ctx.lineTo(0, ctx.canvas.height - OFFSET.y);
      ctx.setLineDash([4, 2]);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "gray";
      ctx.stroke();
      ctx.setLineDash([]);
    },
  };
};

export const setupCartesianPlane = (canvas: HTMLCanvasElement) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext("2d")!;

  const OFFSET = {
    x: canvas.width / 2,
    y: canvas.height / 2,
  };
  ctx.translate(OFFSET.x, OFFSET.y);

  const drawer = Drawer(ctx);

  drawer.drawCoordinateSystem(OFFSET);

  const A: Point = { x: 0, y: 0 };
  const B: Point = { x: 90, y: 120 };
  const C: Point = { x: B.x, y: 0 };

  document.onmousemove = (e) => {
    B.x = e.x - OFFSET.x;
    B.y = e.y - OFFSET.y;

    C.x = B.x;

    update();
  };

  const update = () => {
    ctx.clearRect(-OFFSET.x, -OFFSET.y, ctx.canvas.width, ctx.canvas.height);
    drawer.drawCoordinateSystem(OFFSET);
    drawer.drawPoint(A);
    drawer.drawText("A", A);
    drawer.drawPoint(B);
    drawer.drawText("B", B);
    drawer.drawPoint(C);
    drawer.drawText("C", C);
  };
};
