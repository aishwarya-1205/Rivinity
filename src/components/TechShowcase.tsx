
import * as Lucide from 'lucide-react';
import { TrueFocus } from './ui/TrueFocus';

const TechShowcase = () => {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden">

            <div className="w-[90%] max-w-[90rem] mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">

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

                        <div className="mb-10">
                            <TrueFocus
                                items={[
                                    { title: "Typed SDKs", description: "Full TypeScript support with auto-generated types for your custom workflows." },
                                    { title: "Workflow as Code", description: "Define complex multi-agent chains using simple, declarative syntax." },
                                    { title: "Real-time Events", description: "Subscribe to system-wide events with microsecond latency." }
                                ]}
                            />
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <div className="px-3 sm:px-4 py-2 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 border border-slate-700 font-mono text-[10px] sm:text-sm flex items-center gap-2 sm:gap-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer overflow-x-auto whitespace-nowrap max-w-full">
                                <span className="text-green-400 dark:text-green-600 font-bold">$</span> npm install @rivinity/sdk
                                <Lucide.Copy size={14} className="opacity-50 hover:opacity-100 transition-opacity shrink-0" />
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
                            <div className="p-4 sm:p-6 overflow-x-auto custom-scrollbar">
                                <div className="flex font-mono text-[10px] sm:text-xs md:text-[13px] leading-relaxed text-slate-300">
                                    <div className="flex flex-col text-slate-700 select-none pr-3 sm:pr-4 text-right border-r border-slate-800 mr-3 sm:mr-4">
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
