import { useEffect, useRef } from "react";
export function Orbit({ paused, label }: { paused: boolean; label: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current!;
    const context = canvas.getContext("2d");
    if (!context) return;
    const ctx = context;
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    let width = 1,
      height = 1,
      frame = 0,
      previous = 0,
      visible = true;
    function draw(time: number) {
      ctx.clearRect(0, 0, width, height);
      const scale = Math.min(width / 5.3, height / 4.45);
      const angle = time * 0.045;
      const cx = Math.cos(1.02),
        sx = Math.sin(1.02),
        cy = Math.cos(angle),
        sy = Math.sin(angle);
      const cz = Math.cos(-0.42),
        sz = Math.sin(-0.42);
      const lineCount = width < 500 ? 48 : 76;
      const segments = 190;
      for (let j = 0; j < lineCount; j++) {
        const v = (j / lineCount) * Math.PI * 2;
        const green = j % 12 < 3;
        ctx.lineWidth = green ? 1 : 0.65;
        ctx.strokeStyle = green
          ? `rgba(193,247,125,${0.32 + Math.sin(v) * 0.14})`
          : `rgba(203,218,209,${0.27 + Math.sin(v) * 0.16})`;
        ctx.beginPath();
        for (let i = 0; i <= segments; i++) {
          const u = (i / segments) * Math.PI * 2;
          const twist = v + u * 3;
          const radius =
            1.52 + (0.5 + 0.08 * Math.sin(u * 3)) * Math.cos(twist);
          const x = radius * Math.cos(u),
            y = radius * Math.sin(u),
            z = 0.53 * Math.sin(twist);
          const x1 = x * cy + z * sy,
            z1 = -x * sy + z * cy;
          const y1 = y * cx - z1 * sx,
            z2 = y * sx + z1 * cx;
          const x2 = x1 * cz - y1 * sz,
            y2 = x1 * sz + y1 * cz;
          const perspective = 5.6 / (5.6 - z2);
          const px = width * 0.5 + x2 * scale * perspective;
          const py = height * 0.52 + y2 * scale * perspective;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
      }
      for (let i = 0; i < 44; i++) {
        const x = ((((Math.sin(i * 127.1) * 43758.5453) % 1) + 1) % 1) * width;
        const y = ((((Math.sin(i * 311.7) * 94758.5453) % 1) + 1) % 1) * height;
        ctx.fillStyle =
          i % 3 === 0 ? "rgba(194,245,130,.65)" : "rgba(209,221,215,.3)";
        ctx.fillRect(x, y, i % 3 === 0 ? 2 : 1, i % 3 === 0 ? 2 : 1);
      }
    }
    function tick(time: number) {
      frame = requestAnimationFrame(tick);
      if (time - previous < 33) return;
      previous = time;
      draw(time / 1000);
    }
    function sync() {
      cancelAnimationFrame(frame);
      if (paused || motion.matches || !visible || document.hidden) return;
      frame = requestAnimationFrame(tick);
    }
    const resize = new ResizeObserver(() => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(devicePixelRatio, 1.75);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(8);
    });
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    resize.observe(canvas);
    intersection.observe(canvas);
    motion.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    sync();
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      intersection.disconnect();
      motion.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, [paused]);
  return (
    <canvas className="orbit-canvas" ref={ref} role="img" aria-label={label} />
  );
}
