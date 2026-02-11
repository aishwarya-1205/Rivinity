import { useEffect, useRef } from 'react';

const IntelligenceMesh = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = container.offsetWidth;
        let height = container.offsetHeight;

        const resize = () => {
            width = container.offsetWidth;
            height = container.offsetHeight;
            canvas.width = width;
            canvas.height = height;
        };

        resize();
        window.addEventListener('resize', resize);

        // Particle System
        const particles: Particle[] = [];
        const particleCount = 40;
        const connectionDistance = 100;
        const mouseDistance = 150;

        const mouse = { x: -1000, y: -1000 };

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            baseX: number;
            baseY: number;
            opacity: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.baseX = this.x;
                this.baseY = this.y;
                // Random subtle movement
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.opacity = Math.random() * 0.5 + 0.2;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges (softly)
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;

                // Mouse Magnetism
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouseDistance) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (mouseDistance - distance) / mouseDistance;

                    // Repel slightly to create "bubble" or Attract? User said "repel or attract"
                    // Let's Attract to feel like "Intelligence gathering"
                    const direction = 1; // 1 = attract, -1 = repel
                    const forceStrength = 3;

                    this.vx += forceDirectionX * force * forceStrength * direction * 0.05;
                    this.vy += forceDirectionY * force * forceStrength * direction * 0.05;
                } else {
                    // Return to natural drift if far
                    // Friction to calm down 'excited' particles
                    this.vx *= 0.99;
                    this.vy *= 0.99;

                    // Keep min speed
                    if (Math.abs(this.vx) < 0.1) this.vx = (Math.random() - 0.5) * 0.5;
                    if (Math.abs(this.vy) < 0.1) this.vy = (Math.random() - 0.5) * 0.5;
                }
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`; // Blue-500
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);

            particles.forEach((particle, i) => {
                particle.update();
                particle.draw();

                // Connect to particles
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(139, 92, 246, ${0.15 - distance / connectionDistance * 0.1})`; // Violet tint
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }

                // Connect to mouse
                const dx = mouse.x - particle.x;
                const dy = mouse.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouseDistance) {
                    ctx.beginPath();
                    // Stronger connection near mouse
                    ctx.strokeStyle = `rgba(59, 130, 246, ${0.3 - distance / mouseDistance * 0.2})`;
                    ctx.lineWidth = 1;
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            });

            requestAnimationFrame(animate);
        };

        animate();

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        }

        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('resize', resize);
            container.removeEventListener('mousemove', handleMouseMove);
            container.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 z-0">
            <canvas ref={canvasRef} className="block w-full h-full" />
        </div>
    );
};

export default IntelligenceMesh;
