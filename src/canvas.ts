// import { setupGame1 } from "./game1/game1"
// import { setupDrawApp } from "./ml_draw"
import { setupCartesianPlane } from "./trigo";

export function setupCanvas() {
  const canvas = document.querySelector<HTMLCanvasElement>("#canvas")!;

  // setupDrawApp(canvas);
  setupCartesianPlane(canvas);
}
