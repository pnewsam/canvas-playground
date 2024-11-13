function initializers() {
  let offsetX = 0;
  let offsetY = 0;
  let isMouseDown = false;

  const handleMouseDown =
    (ctx: CanvasRenderingContext2D) => (e: MouseEvent) => {
      isMouseDown = true;
      ctx.strokeStyle = "black";
      ctx.lineWidth = 2;
      ctx.beginPath();
      const x = e.clientX;
      const y = e.clientY;
      ctx.moveTo(x - offsetX, y - offsetY);
    };

  const handleMouseMove =
    (ctx: CanvasRenderingContext2D) => (e: MouseEvent) => {
      if (!isMouseDown) {
        return;
      }
      const x = e.clientX;
      const y = e.clientY;
      ctx.lineTo(x - offsetX, y - offsetY);
      ctx.stroke();
    };

  const handleMouseUp = (ctx: CanvasRenderingContext2D) => (e: MouseEvent) => {
    isMouseDown = false;
    ctx.closePath();
  };

  const addMouseListeners = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext("2d");
    if (ctx) {
      canvas.addEventListener("mousedown", handleMouseDown(ctx));
      canvas.addEventListener("mousemove", handleMouseMove(ctx));
      canvas.addEventListener("mouseup", handleMouseUp(ctx));
    }
  };

  const resetCanvasOffsets = (canvas: HTMLCanvasElement) => {
    const { x, y } = canvas.getBoundingClientRect();
    offsetX = x;
    offsetY = y;
  };

  const addResizeListeners = (canvas: HTMLCanvasElement) => {
    resetCanvasOffsets(canvas);
    const handleResize = () => {
      resetCanvasOffsets(canvas);
    };
    window.addEventListener("resize", handleResize);
  };

  return {
    resetCanvasOffsets,
    addMouseListeners,
    addResizeListeners,
  };
}

export default initializers();
