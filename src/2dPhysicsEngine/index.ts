import { PIXELS_PER_METER } from "./physics/constants";
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

  const particle = new Particle(100, 50, 5);
  
  let timePreviousFrame = performance.now();
  const update = () => {
    const deltaTime = (performance.now() - timePreviousFrame) / 1000;
    timePreviousFrame = performance.now();

    particle.acceleration = new Vec2(0, 9.8 * PIXELS_PER_METER); // gravity
    particle.acceleration.scale(deltaTime);
    particle.velocity.add(particle.acceleration);
    particle.position.add(particle.velocity);

    ctx.clearRect(-OFFSET.x, -OFFSET.y, canvas.width, canvas.height);
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
