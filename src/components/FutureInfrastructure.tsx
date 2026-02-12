
import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { ArrowRight, CheckCircle2, Fingerprint, Sparkles } from 'lucide-react';

const WarpStars = ({ count = 2000 }) => {
    const mesh = useRef<THREE.InstancedMesh>(null!);

    // Create particles
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const time = Math.random() * 100;
            const speed = Math.random() * 0.01 + 0.005;
            const x = Math.random() * 2000 - 1000;
            const y = Math.random() * 2000 - 1000;
            const z = Math.random() * 4000 - 2000;

            temp.push({ time, speed, x, y, z });
        }
        return temp;
    }, [count]);

    // Geometry
    const dummy = useMemo(() => new THREE.Object3D(), []);

    useFrame(() => {
        particles.forEach((particle, i) => {
            let { speed, x, y, z } = particle;

            // Move stars towards camera to simulate warp
            // We'll vary the speed based on mouse position or time if desired,
            // but for now constant warp speed looks best.
            z = z + speed * 1500; // Speed factor
            if (z > 1000) z = -3000; // Reset

            particle.z = z;

            dummy.position.set(x, y, z);

            // Rotate slightly for visual interest
            dummy.rotation.z += speed * 0.5;

            const scale = (z + 2000) / 2000; // Scale up as they get closer
            dummy.scale.set(scale, scale, scale);

            dummy.updateMatrix();
            mesh.current.setMatrixAt(i, dummy.matrix);
        });
        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
            <dodecahedronGeometry args={[0.5, 0]} />
            <meshBasicMaterial color="#60a5fa" transparent opacity={0.8} blending={THREE.AdditiveBlending} />
        </instancedMesh>
    );
};

// Holographic Tilt Card Component
const HolographicCard = () => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotate, setRotate] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        setRotate({ x: yPct * -20, y: xPct * 20 });
    };

    const handleMouseLeave = () => {
        setRotate({ x: 0, y: 0 });
    };

    return (
        <div
            className="perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div
                ref={cardRef}
                className="relative w-[340px] h-[480px] rounded-3xl transition-transform duration-100 ease-linear transform-style-3d cursor-pointer group"
                style={{
                    transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
                }}
            >
                {/* Card Background (Glass) */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">

                    {/* Holographic Sheen */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{ transform: `translateX(${rotate.y * 2}%) translateY(${rotate.x * 2}%)` }} />

                    {/* Content Layer */}
                    <div className="p-8 h-full flex flex-col justify-between relative z-10">

                        <div className="space-y-4">
                            <div className="flex justify-between items-start">
                                <Fingerprint size={40} className="text-white/20" />
                                <div className="px-3 py-1 rounded-full border border-white/10 text-[10px] font-mono text-white/50 tracking-widest uppercase">
                                    Founder Pass
                                </div>
                            </div>

                            <div>
                                <h3 className="text-3xl font-display font-bold text-white mb-1">RIVINITY</h3>
                                <p className="text-sm text-white/40 font-mono tracking-widest">OS ALPHA ACCESS</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="space-y-2">
                                <div className="flex items-center gap-3 text-sm text-slate-300">
                                    <CheckCircle2 size={16} className="text-blue-400" />
                                    <span>Early SDK Access</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-slate-300">
                                    <CheckCircle2 size={16} className="text-blue-400" />
                                    <span>Lifetime Priority Workflow</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-slate-300">
                                    <CheckCircle2 size={16} className="text-blue-400" />
                                    <span>Private Discord Community</span>
                                </div>
                            </div>

                            <button className="w-full py-3 bg-white text-slate-900 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all">
                                Claim Spot <ArrowRight size={16} />
                            </button>
                        </div>

                    </div>

                    {/* Bottom ID Bar */}
                    <div className="absolute bottom-6 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
                </div>

                {/* Floating Elements (Parallax) */}
                <div
                    className="absolute -top-6 -right-6 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl transform translate-z-20 transition-transform duration-200"
                    style={{ transform: `translateZ(40px) translateX(${rotate.y * -1.5}px) translateY(${rotate.x * -1.5}px)` }}
                ></div>
            </div>
        </div>
    );
};


const FutureInfrastructure = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">

            {/* 3D Background - Warp Speed Stars - Toned down for light mode */}
            <div className="absolute inset-0 z-0 opacity-30 dark:opacity-50">
                <Canvas camera={{ position: [0, 0, 5], fov: 60 }} gl={{ antialias: false, alpha: true }}>
                    {/* Reduced particle count for performance (was 4000) */}
                    <WarpStars count={1500} />
                    <ambientLight intensity={0.5} />
                </Canvas>
            </div>

            {/* Cinematic Overlay Gradient - Adjusted for transparency */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/80 dark:from-slate-900/80 dark:via-transparent dark:to-slate-900/80 z-0 pointer-events-none"></div>

            <div className="w-[90%] max-w-[90rem] mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">

                {/* Left: Text Content */}
                <div className="text-left space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 backdrop-blur-md shadow-sm">
                        <Sparkles size={14} className="text-yellow-500 dark:text-yellow-400 animate-pulse" />
                        <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Social Proof • Limited Access</span>
                    </div>



                    <h2 className="text-5xl md:text-7xl font-display font-bold text-slate-900 dark:text-white leading-tight">
                        The Future of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-400 dark:to-violet-400 animate-gradient">Infrastructure</span> <br />
                        Has Arrived.
                    </h2>

                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed mix-blend-multiply dark:mix-blend-normal">
                        Stop building in the past. Join the architecture revolution defined by intelligence, not configuration.
                    </p>

                    <div className="flex items-center gap-8 pt-4">
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-slate-900 dark:text-white">14,203+</span>
                            <span className="text-sm text-slate-500 font-medium uppercase tracking-wider">Architects Joined</span>
                        </div>
                        <div className="w-px h-12 bg-slate-200 dark:bg-white/10"></div>
                        <div className="flex items-center gap-3">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-950 bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs text-slate-900 dark:text-white overflow-hidden transition-transform duration-300 hover:scale-110 hover:z-10 shadow-sm">
                                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="avatar" className="w-full h-full" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: The Holographic Card */}
                <div className="flex justify-center lg:justify-end perspective-1000">
                    <HolographicCard />
                </div>

            </div>
        </section>
    );
};

export default FutureInfrastructure;
