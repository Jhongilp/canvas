export class Vec2 {
  constructor(public x: number, public y: number) {
    this.x = x;
    this.y = y;
  }

  add(other: Vec2) {
    this.x += other.x;
    this.y += other.y;
  }

  subtract(other: Vec2): Vec2 {
    return new Vec2(this.x - other.x, this.y - other.y);
  }

  scale(scalar: number) {
    this.x *= scalar;
    this.y *= scalar;
  }

  rotate(angle: number): Vec2 {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return new Vec2(this.x * cos - this.y * sin, this.x * sin + this.y * cos);
  }

  magnitude(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  magnitudeSquared(): number {
    return this.x * this.x + this.y * this.y;
  }

  normalize(): Vec2 {
    const mag = this.magnitude();
    if (mag > 0) {
      this.x /= mag;
      this.y /= mag;
    }
    return this;
  }

  unitVector(): Vec2 {
    const mag = this.magnitude();
    if (mag > 0) {
      return new Vec2(this.x / mag, this.y / mag);
    }
    return new Vec2(0, 0);
  }

  normal(): Vec2 {
    return new Vec2(this.y, -this.x).normalize();
  }

  dot(other: Vec2): number {
    return this.x * other.x + this.y * other.y;
  }

  cross(other: Vec2): number {
    return this.x * other.y - this.y * other.x; 
  }
}
