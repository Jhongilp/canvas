import { Particle } from "./physics/particle";
import { Vec2 } from "./physics/vec2";

export const setup2dPhysicsEngine = (canvas: HTMLCanvasElement) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext("2d")!;

  const OFFSET = {
    x: canvas.width / 2,
    y: canvas.height / 2,
  };
  ctx.translate(OFFSET.x, OFFSET.y);

  // const particles: Particle[] = [];
  // for (let i = 0; i < 100; i++) {
  //   particles.push(new Particle(Math.random() * 800 - 400, Math.random() * 600 - 300, 1));
  // }
  const particle = new Particle(
    Math.random() * 800 - 400,
    Math.random() * 600 - 300,
    1
  );

  const velocity = new Vec2(2, -1);

  const update = () => {
    ctx.clearRect(-OFFSET.x, -OFFSET.y, canvas.width, canvas.height);
    particle.position.add(velocity);

    ctx.beginPath();
    ctx.arc(
      particle.position.x,
      particle.position.y,
      particle.mass,
      0,
      Math.PI * 2
    );
    ctx.fill();
    requestAnimationFrame(update);
  };
  update();
};
