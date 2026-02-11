
import { Fingerprint, Cpu, Network, Zap, Lock, Layers, ArrowRight } from 'lucide-react';

const OSArchitecture = () => {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-bold tracking-widest uppercase mb-6">
                        <Layers size={12} />
                        <span>System Architecture</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
                        Rivinity as an <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">AI Operating System</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                        A unified neural substrate connecting your identity, data, and workflows into a single intelligent mesh.
                    </p>
                </div>

                {/* Architecture Diagram */}
                <div className="relative max-w-5xl mx-auto">

                    {/* Connection Lines (Background) */}
                    <div className="absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 hidden md:block">
                        <div className="w-full h-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
                        {/* Moving Pulse */}
                        <div className="absolute top-0 left-0 h-full w-20 bg-blue-500 blur-[2px] animate-shimmer-fast"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

                        {/* Node 1: Identity */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-blue-500/20 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 p-8 rounded-2xl flex flex-col items-center text-center hover:border-blue-500/50 transition-colors h-full">
                                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 mb-4 group-hover:text-blue-500 group-hover:bg-blue-500/10 transition-colors">
                                    <Fingerprint size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">One Login</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Unified identity verification across all tools and agents.</p>
                            </div>
                            {/* Arrow for mobile */}
                            <div className="md:hidden flex justify-center py-4 text-slate-300 dark:text-slate-700">
                                <ArrowRight size={20} className="transform rotate-90" />
                            </div>
                        </div>

                        {/* Node 2: Intelligence Layer (Main) */}
                        <div className="relative md:col-span-2 group">
                            <div className="absolute inset-0 bg-violet-500/20 blur-[60px] rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
                            <div className="relative h-full bg-gradient-to-br from-white/80 to-white/40 dark:from-slate-800/80 dark:to-slate-900/40 backdrop-blur-xl border border-violet-500/30 p-8 rounded-2xl flex flex-col items-center text-center shadow-xl shadow-violet-500/5">
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-violet-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg shadow-violet-500/20">
                                    Core Kernel
                                </div>
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-violet-500/20 animate-pulse-slow">
                                    <Cpu size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">One Intelligence Layer</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs">
                                    Shared context window and memory accessible by every specialized agent in the system.
                                </p>

                                <div className="mt-6 flex gap-2">
                                    <span className="w-2 h-2 rounded-full bg-red-400 animate-bounce delay-0"></span>
                                    <span className="w-2 h-2 rounded-full bg-yellow-400 animate-bounce delay-100"></span>
                                    <span className="w-2 h-2 rounded-full bg-green-400 animate-bounce delay-200"></span>
                                </div>
                            </div>
                            {/* Arrow for mobile */}
                            <div className="md:hidden flex justify-center py-4 text-slate-300 dark:text-slate-700">
                                <ArrowRight size={20} className="transform rotate-90" />
                            </div>
                        </div>

                        {/* Node 3: Infinite Use Cases */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-emerald-500/20 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 p-8 rounded-2xl flex flex-col items-center text-center hover:border-emerald-500/50 transition-colors h-full">
                                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 mb-4 group-hover:text-emerald-500 group-hover:bg-emerald-500/10 transition-colors">
                                    <Network size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Infinite Use Cases</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Automate Finance, Legal, HR, and Code workflows seamlessly.</p>
                            </div>
                        </div>
                    </div>

                    {/* Workflow Engine (Connecting Layer) */}
                    <div className="mt-8 relative">
                        <div className="relative bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                            <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 text-xs font-mono uppercase tracking-wider">
                                <Zap size={14} className="text-yellow-500" />
                                <span>Powered by One Workflow Engine</span>
                            </div>
                            <div className="hidden md:block h-4 w-px bg-slate-200 dark:bg-slate-700"></div>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                Orchestrating 1,000+ operations per second
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Tagline Bar */}
                <div className="mt-16 border-t border-slate-200 dark:border-slate-800 pt-8">
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                        <span className="flex items-center gap-2"><Lock size={14} /> One Login</span>
                        <span className="hidden md:block">|</span>
                        <span className="flex items-center gap-2"><Cpu size={14} /> One Intelligence Layer</span>
                        <span className="hidden md:block">|</span>
                        <span className="flex items-center gap-2"><Zap size={14} /> One Workflow Engine</span>
                        <span className="hidden md:block">|</span>
                        <span className="flex items-center gap-2"><Network size={14} /> Infinite Use Cases</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default OSArchitecture;
