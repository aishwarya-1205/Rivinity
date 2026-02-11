
import { Star } from 'lucide-react';
import { GradientBlob } from './BackgroundElements';

const Trust = () => {
    return (
        <section className="py-20 bg-transparent border-b border-slate-100 dark:border-slate-800 relative overflow-hidden transition-colors duration-300">
            <GradientBlob color="bg-yellow-500" position="bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-10" />

            <div className="container mx-auto px-6 text-center relative z-10">
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-8">Trusted by forward-thinking teams</p>

                <div className="flex flex-wrap justify-center gap-12 mb-16 px-4">
                    {["ACME Corp", "GlobalBank", "Nebula.ai", "Vertex", "Horizon"].map((company, i) => (
                        <span
                            key={i}
                            className="text-2xl font-bold text-slate-400 dark:text-slate-600 cursor-default transition-all duration-300 hover:text-slate-800 dark:hover:text-slate-200 hover:scale-105"
                        >
                            {company}
                        </span>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-10 relative border border-white dark:border-slate-700 shadow-xl shadow-slate-200/50 dark:shadow-none hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                    <div className="flex gap-1 justify-center mb-6 text-yellow-400">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="currentColor" size={20} className="drop-shadow-sm" />)}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-display font-medium text-slate-900 dark:text-white leading-relaxed mb-6">
                        "Rivinity isn't just a tool; it's a force multiplier. We've automated 70% of our manual workflows in just two weeks."
                    </h3>
                    <div>
                        <div className="font-bold text-slate-900 dark:text-white">Sarah Chen</div>
                        <div className="text-slate-500 dark:text-slate-400 text-sm">CTO at Vertex Design</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trust;
