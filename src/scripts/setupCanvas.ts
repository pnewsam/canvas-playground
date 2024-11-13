export const setupCanvas = (): HTMLCanvasElement | undefined => {
  const canvas = document.querySelector("canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  // Set the canvas's internal resolution to match the CSS dimensions
  const { width, height } = canvas.getBoundingClientRect();
  const scale = window.devicePixelRatio || 1;

  canvas.width = width * scale;
  canvas.height = height * scale;

  // Scale the drawing context so coordinates match the device pixel ratio
  if (ctx) ctx.scale(scale, scale);

  return canvas;
};
