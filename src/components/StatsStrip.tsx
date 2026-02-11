import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const StatsStrip = () => {
    const sectionRef = useRef(null);
    const isVisible = useScrollReveal(sectionRef);

    const stats = [
        { value: "22+", label: "Indian Languages" },
        { value: "100B+", label: "Tokens Trained" },
        { value: "50K+", label: "Developers" },
        { value: "10M+", label: "Queries Served" }
    ];

    return (
        <section ref={sectionRef} className="py-12 border-y border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, idx) => (
                        <div key={idx} className={`text-center space-y-1 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: `${idx * 100}ms` }}>
                            <h3 className="text-3xl md:text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                                {stat.value}
                            </h3>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsStrip;
