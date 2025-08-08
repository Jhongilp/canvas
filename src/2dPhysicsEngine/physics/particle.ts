import { Vec2 } from "./vec2";

export class Particle {
  position: Vec2;
  velocity: Vec2;
  acceleration: Vec2;
  mass: number;
  force: Vec2;

  constructor(x: number, y: number, mass: number) {
    this.position = new Vec2(x, y);
    this.velocity = new Vec2(0, 0);
    this.acceleration = new Vec2(0, 0);
    this.mass = mass;
    this.force = new Vec2(0, 0);
  }
}