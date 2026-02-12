import { useState, useEffect, useRef } from 'react';
import * as Lucide from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const InteractiveDemo = () => {
    const sectionRef = useRef(null);
    const isVisible = useScrollReveal(sectionRef);

    // Demo State Machine
    const [demoState, setDemoState] = useState<'idle' | 'typing_query' | 'processing' | 'streaming_response' | 'complete'>('idle');
    const [displayedQuery, setDisplayedQuery] = useState("");
    const [displayedResponse, setDisplayedResponse] = useState("");

    const demoQuery = "Analyze sentiment for 'BharatGen' launch.";
    const demoResponse = "Sentiment is overwhelmingly positive (92%). Key drivers: Data Sovereignty and Multilingual Support.";

    // Auto-Run Demo Logic
    useEffect(() => {
        if (!isVisible) return;

        let timeouts: ReturnType<typeof setTimeout>[] = [];

        const runDemo = () => {
            // Reset
            setDemoState('idle');
            setDisplayedQuery("");
            setDisplayedResponse("");

            // Step 1: Type Query
            timeouts.push(setTimeout(() => {
                setDemoState('typing_query');
                let i = 0;
                const typeQuery = setInterval(() => {
                    setDisplayedQuery(demoQuery.slice(0, i + 1));
                    i++;
                    if (i === demoQuery.length) clearInterval(typeQuery);
                }, 50);
            }, 1000));

            // Step 2: Processing
            timeouts.push(setTimeout(() => {
                setDemoState('processing');
            }, 3500)); // Allow time for typing

            // Step 3: Response
            timeouts.push(setTimeout(() => {
                setDemoState('streaming_response');
                let i = 0;
                const typeResponse = setInterval(() => {
                    setDisplayedResponse(demoResponse.slice(0, i + 1));
                    i++;
                    if (i === demoResponse.length) {
                        clearInterval(typeResponse);
                        setDemoState('complete');
                    }
                }, 30);
            }, 5500)); // 2s processing

            // Loop
            timeouts.push(setTimeout(() => {
                runDemo();
            }, 12000));
        };

        runDemo();

        return () => timeouts.forEach(clearTimeout);
    }, [isVisible]);

    return (
        <section ref={sectionRef} className="py-24 bg-transparent relative overflow-hidden">
            <div className="w-[95%] max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        See Intelligence <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Come Alive.</span>
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">

                    {/* LEFT PANEL: Reactive Visualization & Content (Smaller: lg:w-1/3) */}
                    <div className={`lg:w-1/3 w-full space-y-8 sticky top-24 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                        {/* Visual Container - Smaller */}
                        <div className="relative h-[300px] w-full bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden flex items-center justify-center shadow-2xl">
                            {/* Grid Background */}
                            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `radial-gradient(#4f46e5 1px, transparent 1px)`, backgroundSize: '20px 20px' }}></div>

                            {/* Central Core Node */}
                            <div className={`relative z-10 transition-all duration-500 ${demoState === 'processing' ? 'scale-110' : 'scale-100'}`}>
                                <div className={`w-20 h-20 rounded-full flex items-center justify-center border-2 backdrop-blur-sm transition-all duration-500
                                    ${demoState === 'processing' ? 'border-orange-500 bg-orange-500/10 shadow-[0_0_30px_rgba(249,115,22,0.3)]' :
                                        demoState === 'streaming_response' ? 'border-green-500 bg-green-500/10 shadow-[0_0_30px_rgba(34,197,94,0.3)]' :
                                            'border-blue-500 bg-blue-500/10 shadow-[0_0_30px_rgba(59,130,246,0.3)]'
                                    }`}>
                                    <Lucide.Zap size={28} className={`transition-colors duration-500 ${demoState === 'processing' ? 'text-orange-500 animate-pulse' :
                                        demoState === 'streaming_response' ? 'text-green-500' :
                                            'text-blue-500'
                                        }`} />
                                </div>
                                {/* Ripples */}
                                <div className={`absolute inset-0 rounded-full border border-current opacity-30 animate-ping-slow ${demoState === 'processing' ? 'text-orange-500' :
                                    demoState === 'streaming_response' ? 'text-green-500' : 'text-blue-500'
                                    }`}></div>
                            </div>

                            {/* Orbiting Satellite Nodes */}
                            {[Lucide.Cpu, Lucide.Database, Lucide.Network, Lucide.Sparkles].map((Icon, i) => (
                                <div key={i} className="absolute inset-0 flex items-center justify-center animate-spin-slow"
                                    style={{
                                        animationDuration: demoState === 'processing' ? '3s' : demoState === 'streaming_response' ? '0s' : '15s',
                                        animationDirection: i % 2 === 0 ? 'normal' : 'reverse'
                                    }}>
                                    <div className={`absolute w-10 h-10 rounded-xl flex items-center justify-center border bg-slate-900 transition-all duration-500
                                        ${demoState === 'processing' ? 'border-orange-500 text-orange-500 scale-110' :
                                            demoState === 'streaming_response' ? 'border-green-500 text-green-500' :
                                                'border-slate-700 text-slate-400'
                                        }`}
                                        style={{
                                            transform: `rotate(${i * 90}deg) translate(${demoState === 'streaming_response' ? '60px' : '100px'}) rotate(-${i * 90}deg)`
                                        }}>
                                        <Icon size={18} />
                                    </div>

                                    {/* Connection Lines (visible only when responding) */}
                                    <div className={`absolute w-1/2 h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent transition-opacity duration-500 origin-center
                                        ${demoState === 'streaming_response' ? 'opacity-50' : 'opacity-0'}`}
                                        style={{ transform: `rotate(${i * 90}deg) translateX(25%) scaleX(${demoState === 'streaming_response' ? 1 : 0})` }}>
                                    </div>
                                </div>
                            ))}

                            {/* Data Streams (Processing) */}
                            {demoState === 'processing' && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    {[...Array(6)].map((_, i) => (
                                        <div key={i} className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-scan-fast"
                                            style={{
                                                top: `${20 + i * 12}%`,
                                                animationDelay: `${i * 0.1}s`
                                            }}></div>
                                    ))}
                                </div>
                            )}

                        </div>

                        {/* Content Below Visual */}
                        <div className="space-y-4 px-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold tracking-widest uppercase border border-blue-200 dark:border-blue-800">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                <span>Live Neural Engine</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Processing Flow</h3>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                                Watch how Rivinity deconstructs queries. The core logic engine <span className="text-orange-500 font-bold">(Processing)</span> identifies intent, retrieves context from the 2T+ token Data Sagar, and streams a structured response <span className="text-green-500 font-bold">(Final Output)</span> instantly.
                            </p>

                            <div className="flex gap-2 text-xs font-mono text-slate-500 pt-2">
                                <div className="flex items-center gap-1">
                                    <div className={`w-2 h-2 rounded-full ${demoState === 'processing' ? 'bg-orange-500 animate-pulse' : 'bg-slate-700'}`}></div>
                                    <span>Thinking</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className={`w-2 h-2 rounded-full ${demoState === 'streaming_response' ? 'bg-green-500 animate-pulse' : 'bg-slate-700'}`}></div>
                                    <span>Responding</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT PANEL: Chat Interface (Larger: lg:w-2/3) */}
                    <div className={`lg:w-2/3 w-full flex flex-col transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                        <div className="flex-1 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xl flex flex-col overflow-hidden relative group h-[600px]">
                            {/* Window Bar */}
                            <div className="px-5 py-4 bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700 flex items-center gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                                <span className="ml-3 text-xs font-mono text-slate-400 tracking-wider">Rivinity Pilot Console</span>
                            </div>

                            {/* Messages Area */}
                            <div className="flex-1 p-8 space-y-8 overflow-y-auto custom-scrollbar">
                                {/* Intro Message */}
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/20">
                                        <Lucide.Bot size={20} />
                                    </div>
                                    <div className="bg-slate-100 dark:bg-slate-800 rounded-3xl rounded-tl-none px-6 py-4 text-slate-600 dark:text-slate-300 shadow-sm border border-slate-200 dark:border-slate-700/50 text-base leading-relaxed max-w-[80%]">
                                        Hello! I'm ready to assist with complex tasks. Analyzing 22+ Indian languages and enterprise workflows.
                                    </div>
                                </div>

                                {/* Dynamic User Query */}
                                {(demoState !== 'idle' || displayedQuery) && (
                                    <div className="flex items-end gap-4 flex-row-reverse animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-300 shrink-0 shadow-inner">
                                            <Lucide.User size={20} />
                                        </div>
                                        <div className="bg-blue-600 text-white rounded-3xl rounded-tr-none px-6 py-4 shadow-lg shadow-blue-600/20 text-base leading-relaxed max-w-[80%]">
                                            {displayedQuery}
                                            {demoState === 'typing_query' && <span className="animate-pulse ml-1 opacity-70">|</span>}
                                        </div>
                                    </div>
                                )}

                                {/* Processing Indicator */}
                                {demoState === 'processing' && (
                                    <div className="flex items-center gap-3 text-sm text-slate-400 animate-pulse ml-14 bg-slate-50 dark:bg-slate-900/50 px-4 py-2 rounded-full w-fit border border-slate-100 dark:border-slate-800">
                                        <Lucide.Loader2 size={16} className="animate-spin text-blue-500" />
                                        Computing optimal response path...
                                    </div>
                                )}

                                {/* Dynamic AI Response */}
                                {(demoState === 'streaming_response' || demoState === 'complete') && (
                                    <div className="flex items-start gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white shrink-0 animate-pulse shadow-lg shadow-blue-500/20">
                                            <Lucide.Bot size={20} />
                                        </div>
                                        <div className="bg-white dark:bg-slate-800 rounded-3xl rounded-tl-none px-6 py-5 text-slate-700 dark:text-slate-200 shadow-md border border-blue-100 dark:border-slate-700 text-base leading-relaxed max-w-[85%] relative group">
                                            {displayedResponse}
                                            {demoState === 'streaming_response' && <span className="animate-pulse ml-1 opacity-70">|</span>}

                                            {demoState === 'complete' && (
                                                <div className="absolute -bottom-6 left-4 flex gap-3 text-[10px] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <span className="flex items-center gap-1"><Lucide.Zap size={10} className="text-yellow-500" /> 0.4s exec</span>
                                                    <span className="flex items-center gap-1"><Lucide.Database size={10} className="text-blue-500" /> 2 Sources</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Input Bar */}
                            <div className="p-5 border-t border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-900/90 backdrop-blur-md">
                                <div className="h-12 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center px-5 justify-between shadow-sm transition-shadow hover:shadow-md cursor-not-allowed opacity-80">
                                    <span className="text-sm text-slate-400 font-medium">Type a message...</span>
                                    <div className="p-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg">
                                        <Lucide.Send size={16} className="text-slate-400 dark:text-slate-500" />
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

export default InteractiveDemo;
