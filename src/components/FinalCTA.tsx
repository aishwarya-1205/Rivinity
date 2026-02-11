
import { useRef } from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';
import { ArrowRight, Sparkles } from 'lucide-react';

const NeuralSphere = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 dark:opacity-30">
            <svg className="w-[800px] h-[800px]" viewBox="0 0 100 100">
                {/* Rotating Rings */}
                {[...Array(6)].map((_, i) => (
                    <motion.ellipse
                        key={i}
                        cx="50"
                        cy="50"
                        rx="45"
                        ry={15 + i * 5}
                        fill="none"
                        stroke="url(#sphere-gradient)"
                        strokeWidth="0.2"
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 20 + i * 5,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * -2
                        }}
                        style={{ transformOrigin: 'center' }}
                    />
                ))}
                {/* Cross Axis Rings */}
                {[...Array(6)].map((_, i) => (
                    <motion.ellipse
                        key={`cross-${i}`}
                        cx="50"
                        cy="50"
                        rx={15 + i * 5}
                        ry="45"
                        fill="none"
                        stroke="url(#sphere-gradient)"
                        strokeWidth="0.2"
                        animate={{ rotate: -360 }}
                        transition={{
                            duration: 25 + i * 5,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * -2
                        }}
                        style={{ transformOrigin: 'center' }}
                    />
                ))}
                <defs>
                    <linearGradient id="sphere-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                        <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
                        <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

const FinalCTA = () => {
    const sectionRef = useRef(null);




    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const wordVariants = {
        hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
    };

    return (
        <section ref={sectionRef} className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-slate-950 py-20">

            {/* Backgrounds */}
            <NeuralSphere />

            <div className="relative z-10 container mx-auto px-6 text-center">

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                >
                    {/* Badge */}
                    <motion.div variants={wordVariants} className="mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/5 dark:bg-white/10 border border-slate-200 dark:border-white/20 backdrop-blur-md">
                            <Sparkles size={14} className="text-blue-500 animate-pulse" />
                            <span className="text-xs font-semibold text-slate-600 dark:text-slate-200 tracking-wider uppercase">Limitless Potential</span>
                        </div>
                    </motion.div>

                    {/* Headline - Word by Word */}
                    <h2 className="text-6xl md:text-9xl font-display font-bold text-slate-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                            {["Start", "Your", "Evolution"].map((word, i) => (
                                <motion.span key={i} variants={wordVariants} className={i === 2 ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-violet-600 to-pink-500" : ""}>
                                    {word}
                                </motion.span>
                            ))}
                        </div>
                    </h2>

                    <motion.p variants={wordVariants} className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-16 leading-relaxed">
                        Join the architects redefining intelligence. <br />
                        Your infinite canvas awaits.
                    </motion.p>

                    {/* Magnetic Glow Button */}
                    <motion.div variants={wordVariants}>
                        <Magnetic strength={0.4} radius={250}>
                            <button className="group relative w-64 h-20 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-display font-bold text-xl overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-[0_0_80px_-20px_rgba(59,130,246,0.5)]">
                                {/* Gradient Border via inset box-shadow or extra div? Using extra bg div */}
                                <div className="absolute inset-0 p-[2px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50 group-hover:opacity-100 transition-opacity">
                                    <div className="absolute inset-0 bg-slate-900 dark:bg-white rounded-full h-full w-full" />
                                </div>

                                {/* Content */}
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    Start Building
                                    <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                                </span>

                                {/* Internal Glow */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            </button>
                        </Magnetic>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default FinalCTA;
