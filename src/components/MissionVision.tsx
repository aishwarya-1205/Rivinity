import { useRef, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { MoveRight } from 'lucide-react';
import NeuralNetworkVisualization from './ui/NeuralNetworkVisualization';

const MissionVision = () => {
    const sectionRef = useRef(null);
    const isVisible = useScrollReveal(sectionRef);
    const [isFocused, setIsFocused] = useState(false);

    return (
        <section ref={sectionRef} className="py-24 bg-transparent transition-colors duration-300 relative overflow-hidden">
            <div className="w-[95%] max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Content */}
                    <div
                        className={`lg:w-1/2 space-y-8 transition-all duration-500 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'} ${isFocused ? 'blur-sm opacity-50' : 'opacity-100'}`}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-bold tracking-wide uppercase border border-blue-200 dark:border-blue-800">
                            <span>Our Mission</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white leading-tight">
                            Bridging the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500 drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]">Digital Divide.</span>
                        </h2>

                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            AI is the great equalizer. Our mission is to ensure that the benefits of Artificial Intelligence reach every Indian, regardless of their language, location, or literacy level. We are building the infrastructure for a truly inclusive digital future.
                        </p>

                        <div
                            className="pt-4"
                            onMouseEnter={() => setIsFocused(true)}
                            onMouseLeave={() => setIsFocused(false)}
                        >
                            <button className="group relative inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold transition-all hover:scale-105 z-20">
                                <span>Read Our Manifesto</span>
                                <MoveRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Visual - Neural Network Visualization */}
                    <div className={`lg:w-1/2 relative min-h-[400px] flex items-center justify-center lg:justify-end lg:-mr-1 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                        <div className={`relative w-full max-w-md transition-all duration-500 ${isFocused ? 'scale-95 opacity-80 blur-[2px]' : 'scale-100 opacity-100'}`}>
                            <NeuralNetworkVisualization />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;
