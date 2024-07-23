import { createRoot } from 'react-dom/client';

export async function canvasToSrc(
  CanvasComponent: React.ReactElement,
): Promise<string> {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);

  return new Promise((resolve) => {
    root.render(CanvasComponent);

    const checkCanvas = () => {
      const canvas = container.querySelector('canvas');
      if (canvas) {
        const src = canvas.toDataURL();
        root.unmount();
        document.body.removeChild(container);
        resolve(src);
      } else {
        requestAnimationFrame(checkCanvas);
      }
    };

    requestAnimationFrame(checkCanvas);
  });
}
