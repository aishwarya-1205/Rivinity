import * as Lucide from 'lucide-react';
import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { motion } from 'framer-motion';

const PopulationScaleApps = () => {
    const sectionRef = useRef(null);
    const isVisible = useScrollReveal(sectionRef);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section ref={sectionRef} className="py-24 bg-transparent transition-colors duration-300">
            <div className="w-[95%] max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        Population-scale <br />
                        <span className="text-orange-500">Applications</span>
                    </h2>
                    <p className={`text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto transition-all duration-700 delay-100 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        Building products India can use. Conversational agents fluent in Indian languages. Platforms that run enterprise workflows from start to finish.
                    </p>
                </div>

                <motion.div
                    className="grid lg:grid-cols-2 gap-8"
                    variants={containerVariants as any}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Top Full Width Card - Bharat Agents */}
                    <motion.div
                        variants={cardVariants as any}
                        className="col-span-full group relative overflow-hidden rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 md:p-12 hover:shadow-[0_20px_50px_rgba(249,115,22,0.15)] transition-shadow duration-500 hover:border-orange-500/30 will-change-transform"
                        whileHover={{ scale: 1.01, y: -5 }}
                    >
                        <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                            <div className="order-2 md:order-1 flex justify-center">
                                {/* Animated Lotus Graphic (CSS Geometry) */}
                                <div className="relative w-48 h-48 flex items-center justify-center">
                                    {[...Array(8)].map((_, i) => (
                                        <div key={i} className="absolute w-16 h-32 bg-gradient-to-t from-orange-500/80 to-pink-500/80 rounded-full blur-sm transform origin-bottom animate-pulse-slow" style={{
                                            transform: `rotate(${i * 45}deg) translateY(-50%)`,
                                            animationDelay: `${i * 0.2}s`
                                        }}></div>
                                    ))}
                                    <div className="absolute w-12 h-12 bg-yellow-400 rounded-full blur-md animate-pulse"></div>
                                </div>
                            </div>
                            <div className="order-1 md:order-2 space-y-4">
                                <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform duration-300">
                                    <Lucide.Cpu size={24} />
                                </div>
                                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Bharat Agents</h3>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                    Autonomous AI agents that understand context, take actions, and complete complex workflows in Indian languages.
                                </p>
                                <div className="flex gap-4 pt-2">
                                    <a href="#" className="flex items-center gap-1 text-sm font-bold text-slate-900 dark:text-white hover:text-orange-500 transition-colors group-hover:translate-x-1 duration-300">
                                        Bharat Agents <Lucide.ArrowRight size={14} />
                                    </a>
                                    <a href="#" className="flex items-center gap-1 text-sm font-bold text-slate-900 dark:text-white hover:text-orange-500 transition-colors group-hover:translate-x-1 duration-300 delay-75">
                                        Studio <Lucide.ArrowRight size={14} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bottom Left - Bharat Speech */}
                    <motion.div
                        variants={cardVariants as any}
                        className="group relative overflow-hidden rounded-[2rem] bg-slate-900 border border-slate-800 p-8 min-h-[300px] flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] transition-shadow duration-500 hover:border-blue-500/30 will-change-transform"
                        whileHover={{ scale: 1.02, y: -5 }}
                    >
                        {/* Audio Visualization Background */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity">
                            <div className="flex items-center gap-1 h-32">
                                {[...Array(20)].map((_, i) => (
                                    <div key={i} className="w-2 bg-blue-500 rounded-full animate-wave" style={{
                                        height: `${Math.random() * 100}%`,
                                        animationDuration: `${0.5 + Math.random() * 0.5}s`
                                    }}></div>
                                ))}
                            </div>
                        </div>

                        <div className="relative z-10 mt-auto">
                            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Lucide.Mic size={20} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Bharat Speech</h3>
                            <p className="text-slate-300 text-sm mb-4">Text-to-speech and speech-to-text in 10 Indian languages. Natural, human-like voices.</p>
                            <a href="#" className="flex items-center gap-1 text-sm font-bold text-white hover:text-blue-400 transition-colors group-hover:translate-x-1 duration-300">
                                Explore Speech <Lucide.ArrowRight size={14} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Bottom Right - Bharat Translate */}
                    <motion.div
                        variants={cardVariants as any}
                        className="group relative overflow-hidden rounded-[2rem] bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-8 min-h-[300px] flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)] transition-shadow duration-500 hover:border-purple-500/30 will-change-transform"
                        whileHover={{ scale: 1.02, y: -5 }}
                    >
                        {/* Network Background */}
                        <div className="absolute inset-0 opacity-10 dark:opacity-20 group-hover:scale-110 transition-transform duration-700">
                            <svg className="w-full h-full" viewBox="0 0 100 100">
                                <path d="M10,50 Q50,10 90,50 T90,90" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-purple-500" />
                                <path d="M10,50 Q50,90 90,50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-purple-500" />
                                {/* Dots */}
                                <circle cx="10" cy="50" r="2" className="text-purple-500 fill-current animate-pulse" />
                                <circle cx="90" cy="50" r="2" className="text-purple-500 fill-current animate-pulse delay-100" />
                                <circle cx="50" cy="50" r="2" className="text-purple-500 fill-current animate-pulse delay-200" />
                            </svg>
                        </div>

                        <div className="relative z-10 mt-auto">
                            <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Lucide.Globe size={20} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Bharat Translate</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Neural machine translation preserving context and cultural nuance across Indian languages.</p>
                            <a href="#" className="flex items-center gap-1 text-sm font-bold text-slate-900 dark:text-white hover:text-purple-500 transition-colors group-hover:translate-x-1 duration-300">
                                Explore Translate <Lucide.ArrowRight size={14} />
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
export default PopulationScaleApps;
