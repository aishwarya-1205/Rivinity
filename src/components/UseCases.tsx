import { Scale, HeartPulse, Landmark, ShoppingBag } from 'lucide-react';
import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const UseCases = () => {
    const sectionRef = useRef(null);
    const isVisible = useScrollReveal(sectionRef);

    const cases = [
        {
            icon: Scale,
            title: "Legal & Judiciary",
            desc: "Automating case summarization and legal research in Indian context.",
            color: "text-blue-600",
            bg: "bg-blue-50 dark:bg-blue-900/20",
            border: "hover:border-blue-500"
        },
        {
            icon: HeartPulse,
            title: "Healthcare & Ayurveda",
            desc: "Bridging modern medicine with traditional Ayurvedic knowledge bases.",
            color: "text-green-600",
            bg: "bg-green-50 dark:bg-green-900/20",
            border: "hover:border-green-500"
        },
        {
            icon: Landmark,
            title: "Governance",
            desc: "Citizen grievance redressal bots in local dialects for municipalities.",
            color: "text-orange-600",
            bg: "bg-orange-50 dark:bg-orange-900/20",
            border: "hover:border-orange-500"
        },
        {
            icon: ShoppingBag,
            title: "E-Commerce",
            desc: "Vernacular voice-search for accessing rural markets.",
            color: "text-purple-600",
            bg: "bg-purple-50 dark:bg-purple-900/20",
            border: "hover:border-purple-500"
        }
    ];

    return (
        <section ref={sectionRef} className="py-24 bg-transparent transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className={`text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        Solving Real <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Indian Problems.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cases.map((item, idx) => (
                        <div key={idx} className={`group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${item.border} transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{ transitionDelay: `${idx * 150}ms` }}>
                            <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <item.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCases;
