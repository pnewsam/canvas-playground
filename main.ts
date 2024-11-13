import "./style.css";

let isMouseDown = false;

const handleMouseDown =
  (ctx: CanvasRenderingContext2D, { offsetX, offsetY }) =>
  (e: MouseEvent) => {
    isMouseDown = true;
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.beginPath();
    const x = e.clientX;
    const y = e.clientY;
    ctx.moveTo(x - offsetX, y - offsetY);
  };

const handleMouseMove =
  (ctx: CanvasRenderingContext2D, { offsetX, offsetY }) =>
  (e: MouseEvent) => {
    if (!isMouseDown) {
      return;
    }
    const x = e.clientX;
    const y = e.clientY;
    ctx.lineTo(x - offsetX, y - offsetY);
    ctx.stroke();
  };

const handleMouseUp =
  (ctx: CanvasRenderingContext2D, { offsetX, offsetY }) =>
  (e: MouseEvent) => {
    isMouseDown = false;
    ctx.closePath();
  };

const setupCanvas = () => {
  const canvas = document.querySelector("canvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");

    // Set the canvas's internal resolution to match the CSS dimensions
    const { width, height } = canvas.getBoundingClientRect();
    const scale = window.devicePixelRatio || 1;

    canvas.width = width * scale;
    canvas.height = height * scale;

    // Scale the drawing context so coordinates match the device pixel ratio
    if (ctx) {
      ctx.scale(scale, scale);
    }
  }
};

const addMouseListeners = () => {
  const canvas = document.querySelector("canvas");
  if (canvas !== null) {
    const { x, y } = canvas.getBoundingClientRect();
    console.log({ x, y });
    const ctx = canvas.getContext("2d");
    if (ctx) {
      canvas.addEventListener(
        "mousedown",
        handleMouseDown(ctx, { offsetX: x, offsetY: y })
      );
      canvas.addEventListener(
        "mousemove",
        handleMouseMove(ctx, { offsetX: x, offsetY: y })
      );
      canvas.addEventListener(
        "mouseup",
        handleMouseUp(ctx, { offsetX: x, offsetY: y })
      );
    }
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  const canvas = document.querySelector("canvas");
  if (canvas) {
    setupCanvas();
    addMouseListeners();
  }
});
