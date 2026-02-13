import { Fingerprint, LockKeyhole, HardDrive, ServerCog, ShieldCheck, Shield } from 'lucide-react';
import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { GradientText } from './ui/GradientText';

const SovereignCloud = () => {
    const sectionRef = useRef(null);
    const isVisible = useScrollReveal(sectionRef);

    return (
        <section ref={sectionRef} className="py-24 bg-transparent transition-colors duration-300 relative overflow-hidden">
            {/* Background Map Graphic (Abstract India Outline) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none overflow-hidden">
                <svg className="w-full h-full text-slate-900 dark:text-white transform scale-150 animate-pulse-slow" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                    <path d="M50,10 C60,10 70,20 70,30 C70,40 60,50 50,60 C40,50 30,40 30,30 C30,20 40,10 50,10 Z" fill="url(#grid-pattern)" className="animate-float" />
                    {/* Decorative lines mimicking connectivity */}
                    <path d="M0,50 Q25,40 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="0.2" className="opacity-50" />
                    <path d="M0,60 Q25,70 50,60 T100,60" fill="none" stroke="currentColor" strokeWidth="0.2" className="opacity-30" />
                </svg>
            </div>

            <div className="w-[95%] max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* Visual Side */}
                    <div className={`lg:w-1/2 relative transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                        <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0">
                            {/* Central Shield */}
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <div className="w-48 h-56 bg-gradient-to-br from-blue-600/90 to-violet-700/90 backdrop-blur-xl rounded-3xl shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform duration-500 animate-float border border-white/20">
                                    <div className="relative">
                                        <Shield size={90} className="text-white drop-shadow-lg opacity-20 absolute inset-0 scale-110 blur-sm" />
                                        <Fingerprint size={80} className="text-white drop-shadow-lg relative z-10" />
                                        {/* Scanning Line */}
                                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white/20 to-transparent animate-scan overflow-hidden rounded-3xl pointer-events-none"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Orbiting Elements */}
                            <div className="absolute inset-0 animate-spin-slow">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20 transform hover:scale-110 transition-transform">
                                    <LockKeyhole size={24} className="text-blue-400" />
                                </div>
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20 transform hover:scale-110 transition-transform">
                                    <HardDrive size={24} className="text-violet-400" />
                                </div>
                                <div className="absolute top-1/2 right-0 translate-x-6 -translate-y-1/2 bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20 transform hover:scale-110 transition-transform">
                                    <ServerCog size={24} className="text-cyan-400" />
                                </div>
                            </div>

                            {/* Ripple Effect */}
                            <div className="absolute inset-0 border-2 border-blue-500/20 rounded-full animate-ping-slow"></div>
                            <div className="absolute inset-4 border-2 border-blue-500/10 rounded-full animate-ping-slower"></div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className={`lg:w-1/2 space-y-8 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/10 backdrop-blur-md text-blue-600 dark:text-blue-300 text-sm font-bold tracking-wide uppercase border border-blue-200/20 shadow-sm">
                            <ShieldCheck size={14} className="animate-pulse" />
                            <span>100% Data Sovereignty</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white leading-tight">
                            Your Data Stays <br />
                            <GradientText colors={["#3b82f6", "#8b5cf6", "#3b82f6"]} className="drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                                Within India's Borders.
                            </GradientText>
                        </h2>

                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            BharatAI is architected from the ground up to comply with India's DPDP Act. We ensure that all training data, inference logs, and model weights reside on secure Indian servers.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                { title: "Local Inference", desc: "No API calls to foreign servers.", icon: ServerCog },
                                { title: "Govt Compliant", desc: "Ready for public sector deployment.", icon: ShieldCheck },
                                { title: "MeitY Empanelled", desc: "Certified cloud infrastructure.", icon: HardDrive },
                                { title: "Military Grade", desc: "AES-256 encryption at rest.", icon: LockKeyhole }
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="group relative flex gap-4 p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                                >
                                    {/* Glass sheen effect */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                                    {/* Active Border Glow */}
                                    <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-500/30 transition-colors duration-300"></div>

                                    <div className="w-1 h-full bg-gradient-to-b from-blue-500 to-violet-500 rounded-full opacity-70 group-hover:opacity-100 transition-opacity"></div>

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-2 mb-1">
                                            <item.icon size={16} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                                            <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-200 transition-colors">{item.title}</h4>
                                        </div>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 group-hover:text-slate-300 transition-colors">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SovereignCloud;
