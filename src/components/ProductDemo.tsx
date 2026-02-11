import React, { useState, useEffect, useRef } from 'react';
import { Shield, Activity, Search, Command, Bot, Zap, BarChart3, Lock, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ProcessingGraph from './ProcessingGraph';

const ProductDemo = () => {
    const sectionRef = useRef(null);
    const isVisible = useScrollReveal(sectionRef);
    const [typingText, setTypingText] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [startTyping, setStartTyping] = useState(false);

    // Trigger typing only when visible
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => setStartTyping(true), 1500); // Wait for reveal animation
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    const fullText = "Analyzing market trends... Optimizing workflow parameters... Generating strategic report...";

    useEffect(() => {
        if (!startTyping) return;

        let index = 0;
        let animationFrameId: number;
        let lastUpdate = 0;
        const speed = 50;

        const animate = (timestamp: number) => {
            if (timestamp - lastUpdate > speed) {
                setTypingText(fullText.slice(0, index));
                index++;
                if (index > fullText.length) {
                    // Stop or restart? Let's just stop for a clean demo feel
                    // index = 0; 
                } else {
                    lastUpdate = timestamp;
                    requestAnimationFrame(animate);
                }
            } else {
                requestAnimationFrame(animate);
            }
        };

        animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, [startTyping]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;
        setInputValue('');
    };

    return (
        <section ref={sectionRef} className="py-24 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary-blue/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        See Intelligence <span className="text-gradient">Come Alive</span>
                    </h2>
                    <p className={`text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-all duration-700 delay-100 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        Experience the power of a fully integrated neural network. Visualize, analyze, and execute complex tasks from a single glassmorphic interface.
                    </p>
                </div>

                {/* Main Dashboard Interface */}
                <div className={`relative w-full max-w-5xl mx-auto aspect-video md:aspect-[16/9] lg:aspect-[21/9] rounded-2xl border border-slate-300/50 dark:border-white/20 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md shadow-[0_0_40px_-5px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col md:flex-row group transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>

                    {/* Sidebar */}
                    <div className="hidden md:flex flex-col w-20 border-r border-slate-200/20 dark:border-white/5 bg-white/20 dark:bg-slate-900/40 py-6 items-center gap-6">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white mb-4 shadow-lg shadow-blue-500/20">
                            <Bot size={20} />
                        </div>
                        {[Activity, Search, Command, BarChart3, Shield, Lock].map((Icon, i) => (
                            <div key={i} className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ${i === 2 ? 'bg-white/10 dark:bg-white/10 text-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
                                <Icon size={20} />
                            </div>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 flex flex-col min-h-0">
                        {/* Header */}
                        <div className="h-16 border-b border-slate-200/20 dark:border-white/5 flex items-center justify-between px-6 bg-white/10 dark:bg-slate-900/20">
                            <div className="flex items-center gap-4">
                                <span className="text-sm font-mono text-slate-400">STATUS:</span>
                                <span className="flex items-center gap-2 text-green-400 text-xs font-bold font-mono tracking-wider bg-green-500/10 px-2 py-1 rounded-full border border-green-500/20">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                    SYSTEM ONLINE
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="text-xs text-slate-500 font-mono">CPU: 12%</div>
                                <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500 w-[12%] rounded-full" />
                                </div>
                            </div>
                        </div>

                        {/* Workspace */}
                        <div className="flex-1 p-6 lg:p-10 relative overflow-hidden flex flex-col justify-end">
                            {/* Floating Holographic Elements */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.5 }}
                                className="absolute top-10 right-10 p-4 rounded-xl border border-white/10 bg-slate-900/60 backdrop-blur-md w-64 hidden lg:block"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs text-slate-400 font-bold">TOKENS / SEC</span>
                                    <Zap size={14} className="text-yellow-400" />
                                </div>
                                <div className="text-2xl font-mono font-bold text-white mb-1">4,291</div>
                                <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                                    <div className="h-full bg-yellow-400 w-[75%] animate-pulse-slow" />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.7 }}
                                className="absolute top-40 left-12 p-4 rounded-xl border border-white/10 bg-slate-900/60 backdrop-blur-md w-48 hidden lg:block"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <Shield size={14} className="text-green-400" />
                                    <span className="text-xs text-slate-400 font-bold">SECURITY</span>
                                </div>
                                <div className="text-xs text-green-400 font-mono">ENCRYPTION ACTIVE</div>
                            </motion.div>


                            {/* Central Visualization (Processing Graph) */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none">
                                <ProcessingGraph />
                            </div>

                            {/* Chat Interface Simulation */}
                            <div className="space-y-4 max-w-2xl relative z-10">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.8 }}
                                    className="flex gap-4 items-start"
                                >
                                    <div className="w-8 h-8 rounded-full bg-slate-700 flex-shrink-0" />
                                    <div className="p-4 rounded-2xl rounded-tl-none bg-slate-800/50 border border-white/5 text-slate-300 text-sm">
                                        Initiate sequence scheduling for Q3 product launch. Prioritize high-impact channels.
                                    </div>
                                </motion.div>

                                <AnimatePresence>
                                    {isVisible && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 1.2 }}
                                            className="flex gap-4 items-start"
                                        >
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20">
                                                <Bot size={16} className="text-white" />
                                            </div>
                                            <div className="p-4 rounded-2xl rounded-tl-none bg-blue-600/10 border border-blue-500/20 text-blue-100 text-sm shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)] backdrop-blur-sm">
                                                <span className="font-mono">{typingText}</span>
                                                <span className="inline-block w-1.5 h-4 bg-blue-400 ml-1 animate-pulse align-middle" />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="h-20 border-t border-slate-200/20 dark:border-white/5 bg-white/5 px-6 flex items-center">
                            <form onSubmit={handleSubmit} className="w-full relative flex items-center">
                                <div className="absolute left-4 text-slate-500 font-mono animate-pulse">$</div>
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Enter command or prompt..."
                                    className="w-full h-12 bg-slate-900/50 rounded-xl border border-white/10 pl-10 pr-12 text-slate-300 text-sm font-mono focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all placeholder:text-slate-600 backdrop-blur-sm"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim()}
                                    className={`absolute right-2 p-2 rounded-lg transition-all duration-300 ${inputValue.trim()
                                        ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)] translate-x-0 opacity-100'
                                        : 'bg-transparent text-slate-600 translate-x-2 opacity-0 pointer-events-none'
                                        }`}
                                >
                                    <ArrowUp size={18} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDemo;
