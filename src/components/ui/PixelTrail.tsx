import { useEffect, useRef } from "react";

export const PixelTrail = ({
    gridSize = 40,
    trailSize = 0.1,
    color = "#3b82f6",
    className = ""
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const gridRef = useRef<any[]>([]);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            initGrid();
        };

        const initGrid = () => {
            gridRef.current = [];
            const cols = Math.ceil(canvas.width / gridSize);
            const rows = Math.ceil(canvas.height / gridSize);

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    gridRef.current.push({
                        x: i * gridSize,
                        y: j * gridSize,
                        alpha: 0
                    });
                }
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        };

        const animate = () => {
            if (!ctx) return;
            // Simplified visibility check: only run if canvas is in DOM and has dimensions
            if (canvas.width === 0 || canvas.height === 0) {
                requestAnimationFrame(animate);
                return;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const mouseX = mouseRef.current.x;
            const mouseY = mouseRef.current.y;
            const thresholdSq = Math.pow(150 * (trailSize * 10), 2);

            gridRef.current.forEach(pixel => {
                const dx = mouseX - (pixel.x + gridSize / 2);
                const dy = mouseY - (pixel.y + gridSize / 2);
                const distSq = dx * dx + dy * dy;

                // Activate if close to mouse
                if (distSq < thresholdSq) {
                    pixel.alpha = Math.min(pixel.alpha + 0.1, 1); // Fade in
                } else {
                    pixel.alpha = Math.max(pixel.alpha - 0.02, 0); // Fade out
                }

                if (pixel.alpha > 0) {
                    ctx.fillStyle = color;
                    ctx.globalAlpha = pixel.alpha * 0.5;
                    ctx.fillRect(pixel.x + 1, pixel.y + 1, gridSize - 2, gridSize - 2);
                }
            });

            requestAnimationFrame(animate);
        };

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouseMove); // Note: Global mouse move for smoother trail even if outside, or attach to container? Let's use window for "trail" feel, or canvas if contained. 
        // Attaching to window for better feel but checking bounds relative to canvas
        // Actually, let's attach to canvas's parent or window depending on use case. 
        // For specific background, window listener is okay if we adjust coordinates.
        // The previous implementation used getBoundingClientRect so window mouse coords are mapped correctly. 

        resize();
        animate();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [gridSize, color]);

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
        />
    );
};
