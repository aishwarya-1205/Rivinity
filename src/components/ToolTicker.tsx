import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ToolCard from './ToolCard';
import { GradientBlob } from './BackgroundElements';
import {
    MessageSquare, Zap, FileText, PenTool, Code, BarChart,
    Image as ImageIcon, Share2, Globe, Cpu, Bug, Mic, Workflow, Quote
} from 'lucide-react';

const tools = [
    { icon: MessageSquare, title: "AI Chat", description: "Advanced conversational intelligence with context retention.", color: "#3b82f6", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80" },
    { icon: Zap, title: "Extreme Mode", description: "Uncapped performance for complex reasoning tasks.", color: "#8b5cf6", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80" },
    { icon: FileText, title: "PDF Chat", description: "Instantly analyze and query long documents.", color: "#ec4899", image: "https://images.unsplash.com/photo-1565514020176-db79238b6d37?w=800&q=80" },
    { icon: PenTool, title: "Content Creation", description: "Generate SEO-optimized articles and marketing copy.", color: "#06b6d4", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80" },
    { icon: Code, title: "AI Coder", description: "Build full-stack applications from simple prompts.", color: "#10b981", image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80" },
    { icon: BarChart, title: "Data Analysis", description: "Visualize trends and extract insights from raw data.", color: "#f59e0b", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" },
    { icon: ImageIcon, title: "Image Enhancer", description: "Upscale and restore images with neural networks.", color: "#ef4444", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80" },
    { icon: Share2, title: "Automation", description: "Connect apps and automate workflows like N8N.", color: "#6366f1", image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&q=80" },
    { icon: Globe, title: "BrowserOS", description: "A secure, AI-managed browsing environment.", color: "#8b5cf6", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80" },
    { icon: Cpu, title: "Course Platform", description: "Generate interactive curriculums instantly.", color: "#ec4899", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80" },
    { icon: Bug, title: "Code Debugger", description: "Identify and fix bugs in any language automatically.", color: "#ef4444", image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80" },
    { icon: Mic, title: "Voice & Speech", description: "Human-like TTS and accurate transcription.", color: "#3b82f6", image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80" },
    { icon: Workflow, title: "Workflow Creator", description: "Visual drag-and-drop AI agent builder.", color: "#10b981", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80" },
    { icon: Quote, title: "Citation Gen", description: "Auto-generate academic citations and references.", color: "#f59e0b", image: "https://images.unsplash.com/photo-1565514020176-db79238b6d37?w=800&q=80" },
];

const ToolTicker = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const tickerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ticker = tickerRef.current;
        if (!ticker) return;


        const duration = 60; // seconds for one full loop

        // Duplicate content for seamless loop is handled by rendering the list twice below
        // But logically, we animate the 'x' percent.

        // We need to ensure the seamless loop. 
        // Best way: Clone the children.

        const ctx = gsap.context(() => {
            gsap.to(ticker, {
                x: "-50%", // Move half the width (since we duplicated the list)
                duration: duration,
                ease: "linear",
                repeat: -1,
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className="py-20 bg-transparent overflow-hidden relative transition-colors duration-300">
            <GradientBlob color="bg-pink-500" position="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />

            <div className="container mx-auto px-6 mb-10 text-center relative z-10">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white mb-4">
                    Powering <span className="text-gradient">Next-Gen Workflows</span>
                </h2>
                <p className="text-slate-500 dark:text-slate-400">Everything you need in one unified ecosystem.</p>
            </div>

            <div ref={containerRef} className="w-full overflow-hidden mask-fade-sides relative z-10">
                <div ref={tickerRef} className="flex w-max hover:pause-animation will-change-transform">
                    {/* First Set */}
                    {tools.map((tool, index) => (
                        <ToolCard key={`t1-${index}`} {...tool} />
                    ))}
                    {/* Duplicate Set for Loop */}
                    {tools.map((tool, index) => (
                        <ToolCard key={`t2-${index}`} {...tool} />
                    ))}
                </div>
            </div>

            {/* Fade masks for edges */}
            <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent pointer-events-none z-20" />
            <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent pointer-events-none z-20" />
        </section>
    );
};

export default ToolTicker;
