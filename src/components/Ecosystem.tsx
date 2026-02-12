import { Network, Users, GraduationCap, Building2 } from 'lucide-react';
import { useRef, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import IntelligenceMesh from './IntelligenceMesh';

const Ecosystem = () => {
    const sectionRef = useRef(null);
    const isVisible = useScrollReveal(sectionRef);
    const [hoveredNode, setHoveredNode] = useState<number | null>(null);

    return (
        <section ref={sectionRef} className="py-24 bg-transparent transition-colors duration-300">
            <div className="w-[95%] max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16">

                    {/* Visual Side - Network Graph */}
                    <div className={`lg:w-1/2 w-full relative h-[400px] bg-white dark:bg-slate-800 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden flex items-center justify-center transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>

                        {/* Interactive Intelligence Mesh Background */}
                        <IntelligenceMesh />

                        {/* Abstract Nodes */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            {/* Center Node */}
                            <div className={`relative z-10 w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center shadow-xl transition-all duration-500 ${hoveredNode !== null ? 'shadow-blue-500/50 scale-110' : 'animate-pulse-slow'}`}>
                                <span className="font-bold text-white">BharatAI</span>
                                {/* Glow connections to hovered node */}
                                {hoveredNode !== null && (
                                    <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-white"></div>
                                )}
                            </div>

                            {/* Orbiting Nodes */}
                            {[
                                { icon: GraduationCap, color: "bg-orange-500", label: "IITs", pos: "top-10 left-10" },
                                { icon: Building2, color: "bg-green-500", label: "Govt", pos: "bottom-10 right-10" },
                                { icon: Users, color: "bg-purple-500", label: "Devs", pos: "top-10 right-10" },
                                { icon: Network, color: "bg-pink-500", label: "Startups", pos: "bottom-10 left-10" }
                            ].map((node, idx) => (
                                <div
                                    key={idx}
                                    onMouseEnter={() => setHoveredNode(idx)}
                                    onMouseLeave={() => setHoveredNode(null)}
                                    className={`absolute w-16 h-16 ${node.color} rounded-full flex flex-col items-center justify-center shadow-lg transform transition-all duration-300 cursor-pointer pointer-events-auto hover:scale-125 z-20 ${hoveredNode === idx ? 'ring-4 ring-white/30 dark:ring-white/10' : 'animate-float'}`}
                                    style={{
                                        top: node.pos.includes('top') ? '20%' : 'auto',
                                        bottom: node.pos.includes('bottom') ? '20%' : 'auto',
                                        left: node.pos.includes('left') ? '20%' : 'auto',
                                        right: node.pos.includes('right') ? '20%' : 'auto',
                                        animationDelay: `${idx * 1}s`
                                    }}
                                >
                                    <node.icon size={20} className="text-white" />
                                    <span className="text-[10px] font-bold text-white mt-1">{node.label}</span>

                                    {/* Connection Line to Center (only on hover) */}
                                    <div className={`absolute left-1/2 top-1/2 w-[200px] h-[2px] bg-gradient-to-r from-transparent via-current to-transparent -z-10 origin-left transition-opacity duration-300 ${hoveredNode === idx ? 'opacity-100' : 'opacity-0'}`}
                                        style={{
                                            transform: `rotate(${idx === 0 ? '45deg' : idx === 1 ? '225deg' : idx === 2 ? '135deg' : '-45deg'}) translateX(-100px)`, // Rough approximation, better to use SVG but this is quick visual fix for "connecting glow"
                                            color: 'white'
                                        }}
                                    ></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className={`lg:w-1/2 space-y-6 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white">
                            Powered by <br />
                            <span className="text-blue-600 dark:text-blue-400">Collaboration.</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            BharatAI is not just a platform; it's a movement. We are building India's AI future in partnership with leading academic institutions, government bodies, and a vibrant open-source community.
                        </p>

                        <ul className="space-y-4 pt-4">
                            {[
                                "Strategic partnership with IIT Madras & IIT Bombay.",
                                "Empanelled with Digital India Bhashini.",
                                "Open-source models available on HuggingFace.",
                                "Community of 50,000+ Indian developers."
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ecosystem;
