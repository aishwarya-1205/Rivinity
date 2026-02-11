
import * as Lucide from 'lucide-react';

const TechShowcase = () => {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden">

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left: Content */}
                    <div className="lg:w-1/2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold tracking-widest uppercase mb-8 backdrop-blur-sm">
                            <Lucide.Terminal size={12} />
                            <span>Developer First</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight text-slate-900 dark:text-white">
                            Build with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Code</span>.<br />
                            Scale with <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400">Intelligence</span>.
                        </h2>

                        <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 leading-relaxed max-w-xl">
                            Direct access to the neural substrate. Define workflows as code, hook into events, and let the OS handle the orchestration.
                        </p>

                        <div className="space-y-6 mb-10">
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-blue-500/30 transition-colors group backdrop-blur-sm">
                                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:text-blue-500 transition-colors">
                                    <Lucide.Code2 size={20} />
                                </div>
                                <div>
                                    <h4 className="text-slate-900 dark:text-white font-bold mb-1">Typed SDKs</h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Full TypeScript support with auto-generated types for your custom workflows.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-violet-500/30 transition-colors group backdrop-blur-sm">
                                <div className="p-2 rounded-lg bg-violet-500/10 text-violet-600 dark:text-violet-400 group-hover:text-violet-300 transition-colors">
                                    <Lucide.Workflow size={20} />
                                </div>
                                <div>
                                    <h4 className="text-slate-900 dark:text-white font-bold mb-1">Workflow as Code</h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Define complex multi-agent chains using simple, declarative syntax.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="px-4 py-2 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 border border-slate-700 font-mono text-sm flex items-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer">
                                <span className="text-green-400 dark:text-green-600 font-bold">$</span> npm install @rivinity/sdk
                                <Lucide.Copy size={14} className="opacity-50 hover:opacity-100 transition-opacity" />
                            </div>
                        </div>
                    </div>

                    {/* Right: Static Code Visual */}
                    <div className="lg:w-1/2 w-full">
                        <div className="relative rounded-2xl bg-[#0f172a] border border-slate-800 shadow-2xl overflow-hidden">

                            {/* Window Header */}
                            <div className="flex items-center justify-between px-4 py-3 bg-slate-900/50 border-b border-white/5">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-black/40 border border-white/5 text-[10px] font-mono text-slate-400">
                                    <Lucide.Cpu size={10} className="text-blue-400" />
                                    workflow.config.ts
                                </div>
                            </div>

                            {/* Code Content */}
                            <div className="p-6 overflow-x-auto custom-scrollbar">
                                <div className="flex font-mono text-xs md:text-[13px] leading-relaxed text-slate-300">
                                    <div className="flex flex-col text-slate-700 select-none pr-4 text-right border-r border-slate-800 mr-4">
                                        {Array.from({ length: 16 }).map((_, i) => <span key={i}>{i + 1}</span>)}
                                    </div>
                                    <div className="flex-1 whitespace-pre">
                                        <div>
                                            <span className="text-violet-400">import</span> <span className="text-yellow-100">{`{ Agent, Workflow }`}</span> <span className="text-violet-400">from</span> <span className="text-green-400">'@rivinity/sdk'</span>;
                                            <br /><br />
                                            <span className="text-slate-500">// Initialize autonomous agent</span>
                                            <br />
                                            <span className="text-violet-400">const</span> <span className="text-blue-400">agent</span> = <span className="text-violet-400">new</span> <span className="text-yellow-400">Agent</span>({`{`}
                                            <br />&nbsp;&nbsp;role: <span className="text-green-400">'Auditor'</span>,
                                            <br />&nbsp;&nbsp;model: <span className="text-green-400">'rivinity-1.0'</span>,
                                            <br />&nbsp;&nbsp;capabilities: [<span className="text-green-400">'ocr'</span>, <span className="text-green-400">'quickbooks'</span>]
                                            <br />{`}`});
                                            <br /><br />
                                            <span className="text-slate-500">// Define workflow chain</span>
                                            <br />
                                            <span className="text-violet-400">const</span> <span className="text-blue-400">chain</span> = <span className="text-violet-400">new</span> <span className="text-yellow-400">Workflow</span>(<span className="text-green-400">'invoice-processing'</span>)
                                            <br />&nbsp;&nbsp;.<span className="text-blue-300">trigger</span>(<span className="text-green-400">'email.attachment'</span>)
                                            <br />&nbsp;&nbsp;.<span className="text-blue-300">step</span>(<span className="text-green-400">'extract'</span>, <span className="text-violet-400">async</span> (ctx) {`=>`} <span className="text-blue-400">agent</span>.<span className="text-yellow-400">extract</span>(ctx.file))
                                            <br />&nbsp;&nbsp;.<span className="text-blue-300">step</span>(<span className="text-green-400">'process'</span>, <span className="text-violet-400">async</span> (data) {`=>`} {`{`}
                                            <br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-violet-400">await</span> <span className="text-blue-400">agent</span>.<span className="text-yellow-400">approve</span>(data);
                                            <br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-violet-400">await</span> <span className="text-blue-400">agent</span>.<span className="text-yellow-400">sync</span>(data);
                                            <br />&nbsp;&nbsp;{`}`});
                                            <br /><br />
                                            <span className="text-violet-400">await</span> <span className="text-blue-400">chain</span>.<span className="text-yellow-400">deploy</span>();
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TechShowcase;

// Add this to index.css if not present
/*
.transform-style-3d {
  transform-style: preserve-3d;
}
.perspective-2000 {
  perspective: 2000px;
}
.translate-z-0 { transform: translateZ(0px); }
.translate-z-10 { transform: translateZ(20px); }
.translate-z-20 { transform: translateZ(40px); }
.translate-z-30 { transform: translateZ(60px); }
.translate-z-40 { transform: translateZ(80px); }
.rotate-y-12 { transform: rotateY(12deg); }
.rotate-x-6 { transform: rotateX(6deg); }
*/
