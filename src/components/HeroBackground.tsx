import { motion } from 'framer-motion';

const HeroBackground = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            {/* Animated Gradient Orbs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 dark:opacity-20">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -top-40 -left-40 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-50 dark:opacity-20"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, -60, 0],
                        x: [0, -30, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-0 right-0 w-96 h-96 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-50 dark:opacity-20"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, 45, 0],
                        x: [0, 20, 0],
                        y: [0, -40, 0],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -bottom-40 left-20 w-96 h-96 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-3xl opacity-50 dark:opacity-20"
                />
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMGgwdjHguIDF2MThoLTF2LTgtaDF6bTEgMGgxZnYxOGgtMXptMTggMmgxdjE2aC0xem0xIDFoLTF2LTE2aDF6bGwxIDBoLTF6IiBmaWxsPSIjOTRhM2I4IiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-20 dark:opacity-10" />

            {/* Floating Particles Overlay */}
            <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full opacity-30">
                    <defs>
                        <radialGradient id="particle-gradient" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="currentColor" stopOpacity="1" className="text-slate-400 dark:text-slate-500" />
                            <stop offset="100%" stopColor="currentColor" stopOpacity="0" className="text-slate-400 dark:text-slate-500" />
                        </radialGradient>
                    </defs>
                    {[...Array(30)].map((_, i) => (
                        <circle
                            key={i}
                            r={Math.random() * 2 + 1}
                            fill="url(#particle-gradient)"
                            className="animate-float"
                            style={{
                                cx: `${Math.random() * 100}%`,
                                cy: `${Math.random() * 100}%`,
                                animationDuration: `${Math.random() * 15 + 10}s`,
                                animationDelay: `${Math.random() * 5}s`
                            }}
                        />
                    ))}
                </svg>
            </div>

            {/* Noise Texture */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`
                }}
            />
        </div>
    );
};

export default HeroBackground;
