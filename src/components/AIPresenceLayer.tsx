import { useRef, useEffect, memo } from 'react';
import { useScroll, useSpring } from 'framer-motion';

const AIPresenceLayer = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();

    // Smooth evolution value (0 to 1)
    const evolutionSpring = useSpring(scrollYProgress, { stiffness: 50, damping: 20, restDelta: 0.001 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Configuration
        const config = {
            nodeCount: 40,
            connectionDistance: 150,
            cursorInfluenceRadius: 250,
            baseOpacity: 0.05,
            accentColor: { r: 59, g: 130, b: 246 }, // Blue-500
            coreBaseRadius: 30,
        };

        let width = 0;
        let height = 0;
        let animationFrameId: number;
        let time = 0;
        let evolutionStage = 0; // 0 to 1 derived from spring

        // State
        const mouse = { x: -1000, y: -1000 };
        const nodes: Node[] = [];

        // --- NODES (Background Field) ---
        class Node {
            x: number;
            y: number;
            vx: number;
            vy: number;
            radius: number;
            baseX: number;
            baseY: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.2;
                this.vy = (Math.random() - 0.5) * 0.2;
                this.radius = Math.random() * 1.5 + 0.5;
                this.baseX = this.x;
                this.baseY = this.y;
            }

            update(_time: number, coreX: number, coreY: number, stage: number) {
                this.baseX += this.vx;
                this.baseY += this.vy;

                // Wrap
                if (this.baseX < -50) this.baseX = width + 50;
                if (this.baseX > width + 50) this.baseX = -50;
                if (this.baseY < -50) this.baseY = height + 50;
                if (this.baseY > height + 50) this.baseY = -50;

                let targetX = this.baseX;
                let targetY = this.baseY;

                // Core Influence (Repel or Attract based on stage)
                const dxCore = targetX - coreX;
                const dyCore = targetY - coreY;
                const distCore = Math.sqrt(dxCore * dxCore + dyCore * dyCore);

                // Stage 3 (Network): Attract strongly
                if (stage > 0.7) {
                    if (distCore < 500) {
                        targetX -= dxCore * 0.02 * (stage);
                        targetY -= dyCore * 0.02 * (stage);
                    }
                }
                // Stage 1 (Shield): Repel slightly
                else if (stage > 0.2 && stage < 0.5) {
                    if (distCore < 200) {
                        targetX += dxCore * 0.01;
                        targetY += dyCore * 0.01;
                    }
                }

                // Mouse Interaction
                const dx = mouse.x - targetX;
                const dy = mouse.y - targetY;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < config.cursorInfluenceRadius) {
                    const force = (config.cursorInfluenceRadius - dist) / config.cursorInfluenceRadius;
                    targetX += dx * force * 0.15;
                    targetY += dy * force * 0.15;
                }

                this.x += (targetX - this.x) * 0.1;
                this.y += (targetY - this.y) * 0.1;

                this.draw(ctx!);
            }

            draw(ctx: CanvasRenderingContext2D) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${config.accentColor.r}, ${config.accentColor.g}, ${config.accentColor.b}, ${config.baseOpacity})`;
                ctx.fill();
            }
        }

        // --- CORE (The Evolving Entity) ---
        class AICore {
            x: number;
            y: number;

            constructor() {
                this.x = width / 2;
                this.y = height / 2;
            }

            update(currentEvolution: number) {
                // Parallax follow mouse slightly
                const targetX = (width / 2) + (mouse.x - width / 2) * 0.05;
                const targetY = (height / 2) + (mouse.y - height / 2) * 0.05;

                this.x += (targetX - this.x) * 0.05;
                this.y += (targetY - this.y) * 0.05;

                this.draw(ctx!, currentEvolution);
            }

            draw(ctx: CanvasRenderingContext2D, stage: number) {
                // Determine Visuals - pulse unused
                // const pulse = Math.sin(time * 0.005) * 0.1 + 1;

                // 1. SEED / INITIALIZATION (0.0 - 0.2)
                if (stage <= 0.3) {
                    const opacity = 1 - (stage / 0.3);
                    if (opacity > 0) {
                        // Scattered dots forming a circle
                        const dotCount = 12;
                        const spread = 200 * (1 - opacity) + config.coreBaseRadius; // Start wide, come close

                        for (let i = 0; i < dotCount; i++) {
                            const angle = (i / dotCount) * Math.PI * 2 + time * 0.0005;
                            const r = spread + Math.sin(time * 0.005 + i) * 10;
                            const px = this.x + Math.cos(angle) * r;
                            const py = this.y + Math.sin(angle) * r;

                            ctx.beginPath();
                            ctx.arc(px, py, 2, 0, Math.PI * 2);
                            ctx.fillStyle = `rgba(${config.accentColor.r}, ${config.accentColor.g}, ${config.accentColor.b}, ${opacity})`;
                            ctx.fill();
                        }
                    }
                }

                // 2. SHIELD / GEOMETRY (0.2 - 0.5)
                if (stage > 0.1 && stage < 0.6) {
                    const localStage = Math.min(1, Math.max(0, (stage - 0.1) / 0.4)); // 0 to 1
                    const sides = 6;
                    const radius = 50 * localStage + 20;
                    const rotation = time * 0.001;

                    ctx.beginPath();
                    for (let i = 0; i < sides; i++) {
                        const angle = (i / sides) * Math.PI * 2 + rotation;
                        const px = this.x + Math.cos(angle) * radius;
                        const py = this.y + Math.sin(angle) * radius;
                        if (i === 0) ctx.moveTo(px, py);
                        else ctx.lineTo(px, py);
                    }
                    ctx.closePath();
                    ctx.strokeStyle = `rgba(${config.accentColor.r}, ${config.accentColor.g}, ${config.accentColor.b}, ${0.2 * Math.sin(localStage * Math.PI)})`;
                    ctx.lineWidth = 2;
                    ctx.stroke();

                    // Inner connections
                    ctx.beginPath();
                    for (let i = 0; i < sides; i++) {
                        const angle = (i / sides) * Math.PI * 2 + rotation;
                        const px = this.x + Math.cos(angle) * radius;
                        const py = this.y + Math.sin(angle) * radius;
                        ctx.moveTo(this.x, this.y);
                        ctx.lineTo(px, py);
                    }
                    ctx.stroke();
                }

                // 3. NEURAL CLOUD (0.5 - 0.8)
                if (stage > 0.4 && stage < 0.9) {
                    const localStage = Math.min(1, Math.max(0, (stage - 0.4) / 0.4));
                    const particleCount = 12;
                    const radius = 80;

                    for (let i = 0; i < particleCount; i++) {
                        const angle = (i / particleCount) * Math.PI * 2 + (time * 0.002 * (i % 2 === 0 ? 1 : -1));
                        const r = radius * Math.sin(time * 0.001 + i) * localStage;
                        const px = this.x + Math.cos(angle) * r;
                        const py = this.y + Math.sin(angle) * r;

                        ctx.beginPath();
                        ctx.arc(px, py, 2, 0, Math.PI * 2);
                        ctx.fillStyle = `rgba(${config.accentColor.r}, ${config.accentColor.g}, ${config.accentColor.b}, ${0.5 * localStage})`;
                        ctx.fill();

                        // Connect to core
                        ctx.beginPath();
                        ctx.moveTo(this.x, this.y);
                        ctx.lineTo(px, py);
                        ctx.strokeStyle = `rgba(${config.accentColor.r}, ${config.accentColor.g}, ${config.accentColor.b}, ${0.1 * localStage})`;
                        ctx.stroke();
                    }
                }

                // 4. NETWORK / SINGULARITY (0.8 - 1.0)
                if (stage > 0.8) {
                    const localStage = (stage - 0.8) / 0.2; // 0 to 1

                    // Lines removed per user request

                    // Central bright spot
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, 10 + 40 * localStage, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255, 255, 255, ${0.1 * localStage})`;
                    ctx.fill();
                }
            }
        }

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;

            if (nodes.length === 0) {
                for (let i = 0; i < config.nodeCount; i++) nodes.push(new Node());
            }
        };

        const core = new AICore();

        const animate = () => {
            // Handle spring update manually for raf loop if needed, but we used the hook value in a listener usually. 
            // Ideally we get the current spring value. 
            // Since we are inside a hook, we can't easily get the spring value imperatively without a ref or change event.
            // BUT, useSpring returns a MotionValue. We can get() it.
            evolutionStage = evolutionSpring.get();
            time += 16;

            ctx.clearRect(0, 0, width, height);

            // Draw Core
            core.update(evolutionStage);

            // Draw Nodes
            nodes.forEach(node => node.update(time, core.x, core.y, evolutionStage));

            // Draw Connections - REMOVED per user request
            // for (let i = 0; i < nodes.length; i++) {
            //     for (let j = i + 1; j < nodes.length; j++) {
            //         const dx = nodes[i].x - nodes[j].x;
            //         const dy = nodes[i].y - nodes[j].y;
            //         const dist = Math.sqrt(dx * dx + dy * dy);

            //         if (dist < config.connectionDistance) {
            //             const opacity = (1 - dist / config.connectionDistance) * config.baseOpacity;
            //             ctx.beginPath();
            //             ctx.moveTo(nodes[i].x, nodes[i].y);
            //             ctx.lineTo(nodes[j].x, nodes[j].y);
            //             ctx.strokeStyle = `rgba(${config.accentColor.r}, ${config.accentColor.g}, ${config.accentColor.b}, ${opacity})`;
            //             ctx.lineWidth = 1;
            //             ctx.stroke();
            //         }
            //     }
            // }

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);

        resize();
        animationFrameId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div ref={containerRef} className="fixed inset-0 -z-10 pointer-events-none transition-colors duration-1000 bg-slate-50 dark:bg-slate-950">
            {/* Base Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_#f0f9ff_0%,_#ffffff_100%)] dark:bg-[radial-gradient(circle_at_50%_0%,_#1e293b_0%,_#0f172a_100%)] opacity-80" />

            <canvas ref={canvasRef} className="absolute inset-0 block" />

            {/* Noise Overlay - Removed for performance */}
            {/* <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('...')]"></div> */}
        </div>
    );
};

export default memo(AIPresenceLayer);
