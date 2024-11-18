export const setupGame1 = (canvas: HTMLCanvasElement) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext("2d")!;

  const x = canvas.width / 2;
  const y = canvas.height / 2;
  const player = new Player(x, y, 20, "blue");
  player.draw(ctx);

  const xP = canvas.width / 2;
  const yP = canvas.height / 2;
  const projectile = new Projectile(xP, yP, 5, "red", { x: 1, y: 1 });
  const projectiles: Projectile[] = [projectile];
  const enemies: Enemy[] = [];

  window.addEventListener("click", (event) => {
    const xCoord = event.clientX - canvas.width / 2;
    const yCoord = event.clientY - canvas.height / 2;
    const angle = Math.atan2(yCoord, xCoord);
    console.log(angle);
    const velocity = {
      x: Math.cos(angle),
      y: Math.sin(angle),
    };

    const projectile = new Projectile(x, y, 5, "red", velocity);
    projectiles.push(projectile);
  });

  const animate = () => {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    player.draw(ctx);
    projectiles.forEach((projectile) => {
      projectile.update(ctx);
    });
    enemies.forEach((enemy) => {
      enemy.update(ctx);
    });
  };

  const spawnEnemies = () => {
    window.setInterval(() => {
      const radius = Math.random() * (30 - 4) + 4;
      let x;
      let y;
      if (Math.random() < 0.5) {
        x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius;
        y = Math.random() * canvas.height;
      } else {
        x = Math.random() * canvas.width;
        y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius;
      }

      const color = "green";
      const xCoord = canvas.width / 2 - x;
      const yCoord = canvas.height / 2 - y;
      const angle = Math.atan2(yCoord, xCoord);
      const velocity = {
        x: Math.cos(angle),
        y: Math.sin(angle),
      };
      enemies.push(new Enemy(x, y, radius, color, velocity));
    }, 1000);
  };
  // spawnEnemies();
  // animate();
};

class Player {
  x: number;
  y: number;
  radius: number;
  color: string;

  constructor(x: number, y: number, radius: number, color: string) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

class Projectile {
  x: number;
  y: number;
  radius: number;
  color: string;
  velocity: {
    x: number;
    y: number;
  };

  constructor(
    x: number,
    y: number,
    radius: number,
    color: string,
    velocity: { x: number; y: number }
  ) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update(ctx: CanvasRenderingContext2D) {
    this.draw(ctx);
    this.x = this.x + this.velocity.x;
    this.y = this.y + this.velocity.y;
  }
}

class Enemy {
  x: number;
  y: number;
  radius: number;
  color: string;
  velocity: {
    x: number;
    y: number;
  };

  constructor(
    x: number,
    y: number,
    radius: number,
    color: string,
    velocity: { x: number; y: number }
  ) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update(ctx: CanvasRenderingContext2D) {
    this.draw(ctx);
    this.x = this.x + this.velocity.x;
    this.y = this.y + this.velocity.y;
  }
}
