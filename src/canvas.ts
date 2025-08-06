// import { setupGame1 } from "./game1/game1"
// import { setupDrawApp } from "./ml_draw"
// import { setupCartesianPlane } from "./trigo";
import { setup2dPhysicsEngine } from "./2dPhysicsEngine/index";

export function setupCanvas() {
  const canvas = document.querySelector<HTMLCanvasElement>("#canvas")!;

  // setupDrawApp(canvas);
  setup2dPhysicsEngine(canvas);
}
