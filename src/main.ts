import { setupCanvas } from "./scripts/setupCanvas";
import initializers from "./scripts/initializers";
import "../style.css";

document.addEventListener("DOMContentLoaded", async () => {
  const canvas = setupCanvas();
  if (canvas) {
    initializers.addMouseListeners(canvas);
    initializers.addResizeListeners(canvas);
  }
});
