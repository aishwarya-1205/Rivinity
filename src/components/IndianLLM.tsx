import { MessageCircleCode, AudioWaveform, FileJson, Mic } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';

const IndianLLM = () => {
    const sectionRef = useRef(null);
    const isVisible = useScrollReveal(sectionRef);

    const languages = [
        { name: "Hindi", script: "नमस्ते भारत" },
        { name: "Tamil", script: "வணக்கம் இந்தியா" },
        { name: "Telugu", script: "నమస్తే ఇండియా" },
        { name: "Bengali", script: "নমস্কার ভারত" },
        { name: "Gujarati", script: "નમસ્તે ભારત" },
        { name: "Kannada", script: "ನಮಸ್ಕಾರ ಭಾರತ" },
        { name: "Malayalam", script: "നമസ്കാരം ഇന്ത്യ" },
        { name: "Marathi", script: "नमस्ते भारत" },
        { name: "Punjabi", script: "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ" },
        { name: "Odia", script: "ନମସ୍କାର ଭାରତ" }
    ];

    // Duplicating for infinite marquee
    const marqueeLanguages = [...languages, ...languages];

    return (
        <section ref={sectionRef} className="py-24 bg-transparent transition-colors duration-300 relative overflow-hidden">

            {/* Background Sliding Text - "The Voice of India" */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none flex flex-col justify-center space-y-12 select-none overflow-hidden">
                <motion.div
                    className="flex gap-8 whitespace-nowrap text-4xl sm:text-6xl font-bold font-display"
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                >
                    {marqueeLanguages.map((lang, i) => (
                        <span key={`l1-${i}`}>{lang.script}</span>
                    ))}
                </motion.div>
                <motion.div
                    className="flex gap-8 whitespace-nowrap text-4xl sm:text-6xl font-bold font-display"
                    animate={{ x: [-1000, 0] }}
                    transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
                >
                    {marqueeLanguages.reverse().map((lang, i) => (
                        <span key={`l2-${i}`}>{lang.script}</span>
                    ))}
                </motion.div>
            </div>


            <div className="w-[95%] max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto relative">

                    {/* Animated Waveform behind Headline */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-32 opacity-20 pointer-events-none flex items-center justify-center gap-1">
                        {[...Array(40)].map((_, i) => (
                            <div
                                key={i}
                                className="w-1 bg-gradient-to-t from-blue-500 to-violet-500 rounded-full animate-wave-pulse"
                                style={{
                                    height: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 1}s`,
                                    animationDuration: `${0.8 + Math.random() * 0.5}s`
                                }}
                            ></div>
                        ))}
                    </div>

                    <h2 className={`text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} relative z-10`}>
                        Speaks Your Language. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-violet-500 to-pink-500 animate-shimmer">
                            Literally.
                        </span>
                    </h2>
                    <p className={`text-lg text-slate-600 dark:text-slate-300 transition-all duration-700 delay-100 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} relative z-10`}>
                        Trained on 2 trillion tokens of Indian language data. BharatAI understands the nuance, context, and dialects of 22+ official languages.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Feature Cards with Ripple Effect */}
                    {[
                        { icon: MessageCircleCode, title: "Multilingual Text", desc: "Generate content, emails, and reports in regional languages with native fluency." },
                        { icon: AudioWaveform, title: "Voice Interaction", desc: "Real-time speech-to-speech translation for breaking language barriers." },
                        { icon: FileJson, title: "Document Translation", desc: "Instant translation of legal and government documents preserving formatting." }
                    ].map((feature, idx) => (
                        <motion.div
                            key={idx}
                            className="group relative p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + (idx * 0.1) }}
                            whileHover={{ y: -5 }}
                        >
                            {/* Ripple Hover Effect */}
                            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl group-hover:animate-ping-slow"></div>
                            </div>

                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400">{feature.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Interactive Language Showcase */}
                <div className="mt-20 relative rounded-3xl overflow-hidden p-[1px] bg-gradient-to-r from-orange-400 via-white to-green-500 shadow-xl">
                    <div className="absolute inset-0 bg-white/20 blur-xl"></div>
                    <div className="relative bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 text-center overflow-hidden min-h-[300px] flex flex-col items-center justify-center">

                        <LanguageReadout languages={languages} />

                        <div className="flex justify-center gap-4 flex-wrap mt-8">
                            <button className="px-6 py-2 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-2 text-sm font-medium">
                                <Mic size={16} className="text-blue-500" />
                                Listen
                            </button>
                            <button className="px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors text-sm font-medium">
                                Try Real-time Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const LanguageReadout = ({ languages }: { languages: { name: string, script: string }[] }) => {
    const [index, setIndex] = useState(0);
    // Add "Hello" translations manually or just use a placeholder for now to match the "Tamil • Vanakkam • Hello" format
    // For simplicity, I'll map a few common ones or just cycle the script
    const meta = [
        { lang: "Hindi", trans: "Namaste", eng: "Hello" },
        { lang: "Tamil", trans: "Vanakkam", eng: "Hello" },
        { lang: "Telugu", trans: "Namaste", eng: "Hello" },
        { lang: "Bengali", trans: "Nomoshkar", eng: "Hello" },
        { lang: "Gujarati", trans: "Namaste", eng: "Hello" },
        { lang: "Kannada", trans: "Namaskara", eng: "Hello" },
        { lang: "Malayalam", trans: "Namaskaram", eng: "Hello" },
        { lang: "Marathi", trans: "Namaste", eng: "Hello" },
        { lang: "Punjabi", trans: "Sat Sri Akal", eng: "Hello" },
        { lang: "Odia", trans: "Namaskara", eng: "Hello" }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % languages.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [languages.length]);

    const currentLang = languages[index];
    const currentMeta = meta[index] || { lang: currentLang.name, trans: "...", eng: "Hello" };

    return (
        <div className="mb-0 h-40 flex flex-col items-center justify-center relative w-full">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-x-0"
                >
                    <div className="inline-block relative">
                        <h3 className="text-4xl sm:text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400 dark:from-slate-800 dark:to-slate-700 opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-sm select-none whitespace-nowrap">
                            {currentLang.script}
                        </h3>
                        <h3 className="text-3xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-pink-500 to-blue-600 animate-shimmer bg-[length:200%_auto] relative z-10 whitespace-nowrap">
                            {currentLang.script}
                        </h3>
                    </div>
                    <p className="mt-4 text-slate-500 dark:text-slate-400 font-mono text-sm tracking-widest uppercase">
                        {currentMeta.lang} • {currentMeta.trans} • {currentMeta.eng}
                    </p>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default IndianLLM;
