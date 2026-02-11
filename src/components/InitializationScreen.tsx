import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface InitializationScreenProps {
    onComplete?: () => void;
}

const InitializationScreen = ({ onComplete }: InitializationScreenProps) => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const timeline = [
            { time: 500, step: 1 },  // Incoming signal...
            { time: 1500, step: 2 }, // Establishing link...
            { time: 2500, step: 3 }, // Core activity increases
            { time: 3500, step: 4 }, // System Online
            { time: 5500, step: 5 }, // Start Exit
        ];

        const timeouts = timeline.map(({ time, step }) =>
            setTimeout(() => setStep(step), time)
        );

        // Final completion callback after the exit animation
        const finishTimer = setTimeout(() => {
            if (onComplete) onComplete();
        }, 6000);

        // Lock Body Scroll
        document.body.style.overflow = 'hidden';

        return () => {
            timeouts.forEach(clearTimeout);
            clearTimeout(finishTimer);
            // Unlock Body Scroll
            document.body.style.overflow = 'unset';
        };
    }, [onComplete]);

    // Exit transition variants
    const containerVariants = {
        exit: {
            scale: 1.05,
            opacity: 0,
            transition: {
                duration: 0.8,
                ease: "easeInOut" as const
            }
        }
    };

    return (
        <AnimatePresence>
            <motion.section
                className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-slate-950 overflow-hidden"
                exit="exit"
                variants={containerVariants}
            >
                {/* 1. Background Intelligence Layer */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    {/* Radial Glow */}
                    <div className="absolute inset-0 bg-radial-[circle_800px_at_50%_50%_#3b82f610_0%_transparent_100%] dark:bg-radial-[circle_800px_at_50%_50%_#3b82f605_0%_transparent_100%]" />

                    {/* Floating Particles */}
                    <div className="absolute inset-0 overflow-hidden">
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
                                initial={{
                                    x: Math.random() * window.innerWidth,
                                    y: Math.random() * window.innerHeight,
                                    scale: 0
                                }}
                                animate={{
                                    y: [null, Math.random() * -100],
                                    opacity: [0, 0.5, 0],
                                    scale: [0, 1.5, 0]
                                }}
                                transition={{
                                    duration: 3 + Math.random() * 2,
                                    repeat: Infinity,
                                    delay: Math.random() * 2
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Main Content Container */}
                <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-md">

                    {/* 4. AI Core Micro Visualization */}
                    <div className="relative w-24 h-24 mb-12 flex items-center justify-center">
                        {step >= 1 && (
                            <>
                                {/* Option A: Soft Glowing Sphere + Rings */}
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{
                                        scale: step >= 3 ? 1.5 : 1,
                                        opacity: 1
                                    }}
                                    transition={{ duration: 1 }}
                                    className="absolute inset-0 rounded-full bg-blue-500/10 blur-xl"
                                />
                                <motion.div
                                    className="absolute w-16 h-16 border border-blue-400/30 rounded-full"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                />
                                <motion.div
                                    className="absolute w-12 h-12 border border-violet-400/30 rounded-full"
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                                />
                                <motion.div
                                    className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                                    animate={{
                                        scale: step >= 4 ? [1, 1.5, 1] : [1, 1.2, 1],
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </>
                        )}
                    </div>

                    {/* 2 & 3. Boot Text Sequence */}
                    <div className="h-24 flex flex-col items-center gap-2 font-mono text-sm tracking-wide">
                        {/* Line 1 */}
                        {step >= 1 && step < 4 && (
                            <TypewriterLine text="Incoming signal detected..." delay={0} />
                        )}

                        {/* Line 2 */}
                        {step >= 2 && step < 4 && (
                            <TypewriterLine text="Establishing neural link..." delay={0.2} color="text-blue-500" />
                        )}

                        {/* "System Online" Moment */}
                        {step >= 4 && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                className="flex flex-col items-center gap-2"
                            >
                                <span className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white tracking-[0.2em] uppercase">
                                    System Online
                                </span>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent w-full"
                                />
                            </motion.div>
                        )}
                    </div>
                </div>

                {/* White Overlay for Transition */}
                {step >= 5 && (
                    <motion.div
                        className="absolute inset-0 bg-white z-[60]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    />
                )}
            </motion.section>
        </AnimatePresence>
    );
};

const TypewriterLine = ({ text, delay, color = "text-slate-500 dark:text-slate-400" }: { text: string, delay: number, color?: string }) => {
    // A simple typewriter simulation using per-character animation
    const characters = text.split("");

    return (
        <div className={`flex items-center gap-2 ${color}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50 animate-pulse" />
            <motion.div className="flex">
                {characters.map((char, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: delay + index * 0.03 }}
                    >
                        {char}
                    </motion.span>
                ))}
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="ml-1 w-1.5 h-4 bg-blue-500"
                />
            </motion.div>
        </div>
    );
};

export default InitializationScreen;
