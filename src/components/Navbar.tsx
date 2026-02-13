
import { useState } from 'react';
import { Menu, X, Sparkles, LogIn, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { GradientText } from './ui/GradientText';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();

    const navLinks = ['Platform', 'Capabilities', 'Developers', 'Learn', 'Research', 'About'];

    return (
        <div className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-[85rem]`}>

            {/* The Capsule */}
            <div className="relative group">

                {/* Animated Border Glow (The "Scanner") - Enhanced */}
                <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent blur-md transition-opacity duration-700 animate-border-flow" />

                {/* Steady Glow for Glass Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent dark:from-white/5 pointer-events-none" />

                {/* Main Glass Body */}
                <nav className="relative flex items-center justify-between gap-4 px-4 md:px-6 py-3 md:py-4 rounded-full bg-white/40 dark:bg-slate-950/40 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-xl shadow-black/5 dark:shadow-black/20 transition-all duration-300">

                    {/* LOGO SECTION */}
                    <div className="flex items-center gap-4 pr-6 border-r border-slate-200/50 dark:border-white/5 mr-2">

                        {/* Gradient Logo "R" - Slightly larger */}
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-[0_0_20px_rgba(79,70,229,0.4)]">
                            R
                        </div>

                        {/* Text & Status */}
                        <div className="flex flex-col">
                            <GradientText className="font-display font-bold text-xl leading-none">
                                RIVINITY
                            </GradientText>
                        </div>
                    </div>

                    {/* 2. CENTER LINKS (Platform | Capabilities | Developers | Learn | Research | About) */}
                    <div className="hidden xl:flex items-center justify-center flex-1 gap-2">
                        {navLinks.map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="relative px-5 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all rounded-full hover:bg-white/50 dark:hover:bg-white/5 group/link overflow-hidden whitespace-nowrap"
                            >
                                <span className="relative z-10">{item}</span>
                                {/* Hover "Scan" effect inside link */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 dark:via-white/10 to-transparent -translate-x-full group-hover/link:animate-shimmer" />
                            </a>
                        ))}
                    </div>

                    {/* 3. ACTIONS (Theme Toggle | Login) */}
                    <div className="flex items-center gap-3 pl-4 border-l border-slate-200/50 dark:border-white/5 ml-2">

                        {/* Theme Toggle (Mini) */}
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="hidden md:flex w-9 h-9 items-center justify-center rounded-full bg-slate-100/50 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors backdrop-blur-sm"
                        >
                            {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
                        </button>

                        {/* Login Button (CTA) */}
                        <button className="hidden sm:flex group/btn relative px-6 py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold tracking-wide overflow-hidden transition-all hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] active:scale-95 items-center gap-2">
                            <span className="relative z-10 flex items-center gap-2">
                                Login <LogIn size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                            </span>
                            {/* Shine Effect */}
                            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/30 dark:to-black/10 opacity-40 group-hover/btn:animate-shine" />
                        </button>

                        {/* Mobile Menu Toggle - High Contrast */}
                        <button
                            className="xl:hidden p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle Menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                </nav>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 right-0 mt-4 p-4 rounded-3xl bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-2xl flex flex-col gap-2 animate-in slide-in-from-top-4">
                        {navLinks.map((item) => (
                            <a key={item} href="#" className="flex items-center justify-between px-6 py-4 rounded-2xl bg-white/40 dark:bg-white/5 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-white/80 dark:hover:bg-white/10 transition-colors text-base font-medium">
                                {item}
                                <Sparkles size={16} className="text-blue-500/50" />
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
