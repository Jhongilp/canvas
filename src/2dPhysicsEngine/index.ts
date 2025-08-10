import { PIXELS_PER_METER } from "./physics/constants";
import { Particle } from "./physics/particle";
import { Vec2 } from "./physics/vec2";

export const setup2dPhysicsEngine = (canvas: HTMLCanvasElement) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext("2d")!;

  const particle = new Particle(100, 50, 5);

  let timePreviousFrame = performance.now();
  const update = () => {
    const deltaTime = (performance.now() - timePreviousFrame) / 1000;
    timePreviousFrame = performance.now();

    particle.acceleration = new Vec2(1, 9.8 * PIXELS_PER_METER); // gravity
    particle.acceleration.scale(deltaTime);
    particle.velocity.add(particle.acceleration);
    particle.position.add(particle.velocity);
    // console.log("acc", particle.acceleration);
    // console.log("vel", particle.velocity);

    if (particle.position.y > canvas.height) {
      particle.position.y = canvas.height;
      particle.velocity.y *= -0.8; // bounce
    } else if (particle.position.y < 0) {
      particle.position.y = 0;
      particle.velocity.y *= -0.8; // bounce
    }

    if (particle.position.x > canvas.width) {
      particle.position.x = canvas.width;
      particle.velocity.x *= -0.8; // bounce
    } else if (particle.position.x < 0) {
      particle.position.x = 0;
      particle.velocity.x *= -0.8; // bounce
    }

    // ctx.clearRect(-OFFSET.x, -OFFSET.y, canvas.width, canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
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
