
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cpu, Zap, BarChart3, Database, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        icon: Cpu,
        title: "Neural Architecture",
        description: "Built on a proprietary transformer model designed for complex reasoning.",
        colSpan: "md:col-span-2 lg:col-span-2",
        bg: "bg-white",
        textColor: "text-slate-900",
        accent: "bg-blue-50 text-blue-600"
    },
    {
        icon: Zap,
        title: "50ms Latency",
        description: "Real-time execution for instant results.",
        colSpan: "md:col-span-1 lg:col-span-1",
        bg: "bg-white",
        textColor: "text-slate-900",
        accent: "bg-amber-50 text-amber-600"
    },
    {
        icon: BarChart3,
        title: "99.9% Uptime",
        description: "Enterprise-grade reliability you can trust.",
        colSpan: "md:col-span-1 lg:col-span-1",
        bg: "bg-slate-900", // Dark accent card
        textColor: "text-white",
        accent: "bg-white/10 text-white"
    },
    {
        icon: Database,
        title: "Unified Knowledge Base",
        description: "Connect your entire data warehouse securely. We handle the indexing, embedding, and retrieval automatically.",
        colSpan: "md:col-span-2 lg:col-span-2",
        bg: "bg-gradient-to-br from-slate-50 to-white",
        textColor: "text-slate-900",
        accent: "bg-violet-50 text-violet-600"
    },
];

const FeatureCard = ({ feature }: { feature: any }) => {
    return (
        <div className={`feature-card group relative p-8 rounded-3xl ${feature.colSpan} ${feature.bg} shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 ease-out overflow-hidden flex flex-col justify-between min-h-[280px]`}>

            {/* Hover Scaling Effect on Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Icon & Badge */}
            <div className="flex justify-between items-start relative z-10">
                <div className={`w-12 h-12 rounded-2xl ${feature.accent} flex items-center justify-center mb-6`}>
                    <feature.icon size={24} strokeWidth={2} />
                </div>
                {feature.bg === 'bg-slate-900' && (
                    <div className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white text-xs font-semibold tracking-wider">
                        SLA GUARANTEED
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="relative z-10 mt-auto">
                <h3 className={`text-2xl font-bold ${feature.textColor} mb-3 tracking-tight group-hover:translate-x-1 transition-transform duration-300`}>
                    {feature.title}
                </h3>
                <p className={`text-base leading-relaxed ${feature.textColor === 'text-white' ? 'text-slate-400' : 'text-slate-500'} max-w-md`}>
                    {feature.description}
                </p>
            </div>

            {/* Subtle Arrow Icon on Hover */}
            <div className={`absolute top-8 right-8 ${feature.textColor} opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300`}>
                <ArrowUpRight size={24} />
            </div>
        </div>
    );
};

const Features = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Simple, reliable fade-in for section
            gsap.fromTo(headerRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: "top 85%",
                    }
                }
            );

            // Stagger cards with explicit fromTo to ensure visibility
            gsap.fromTo(".feature-card",
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 md:py-32 bg-transparent relative">
            <div className="container mx-auto px-6 md:px-12 relative z-10">

                {/* Header Section */}
                <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-20">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-widest uppercase mb-6">
                        Why Rivinity
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
                        Power. Precision. <span className="text-blue-600">Performance.</span>
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 text-xl leading-relaxed">
                        We stripped away the complexity to give you an AI layer that just works.
                        No bloated configs, just pure intelligence.
                    </p>
                </div>

                {/* Clean Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {features.map((feature, idx) => (
                        <FeatureCard key={idx} feature={feature} />
                    ))}

                    {/* Decorative Image Card */}
                    <div className="feature-card group relative h-full min-h-[280px] rounded-3xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 md:col-span-1 lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                            alt="Abstract Art"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                        <div className="absolute bottom-0 left-0 p-8">
                            <h3 className="text-white text-xl font-bold">Designed for Scale</h3>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Features;
