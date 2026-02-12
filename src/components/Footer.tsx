import { Facebook, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-transparent py-12 relative z-10">
            <div className="w-[90%] max-w-[90rem] mx-auto px-6 lg:px-8">

                {/* Main Footer Container - Rounded & Darker */}
                <div className="bg-slate-100 dark:bg-black rounded-[3rem] p-10 md:p-16 mb-8 border border-slate-200 dark:border-slate-800">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

                        {/* Column 1: Brand */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20">
                                    R
                                </div>
                                <span className="font-display font-bold text-2xl text-slate-900 dark:text-white tracking-tight">
                                    Rivinity
                                </span>
                            </div>

                            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 font-medium">
                                <span>Owned by</span>
                                <span className="flex items-center gap-1 text-slate-900 dark:text-white font-bold">
                                    <span className="w-4 h-4 bg-orange-500 rounded-sm inline-block"></span>
                                    BharatTech
                                </span>
                            </div>

                            <div className="pt-4">
                                <p className="text-sm font-bold text-slate-900 dark:text-white mb-1">Support Inquiries:</p>
                                <a href="mailto:support@rivinity.ai" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2">
                                    <span className="text-lg">✉</span> support@rivinity.ai
                                </a>
                            </div>
                        </div>

                        {/* Column 2: About */}
                        <div>
                            <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-6">About</h4>
                            <ul className="space-y-4 text-slate-500 dark:text-slate-400">
                                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Our Story</a></li>
                                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Team</a></li>
                                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Research</a></li>
                            </ul>
                        </div>

                        {/* Column 3: Other Links */}
                        <div>
                            <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-6">Other Links</h4>
                            <ul className="space-y-4 text-slate-500 dark:text-slate-400">
                                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Documentation</a></li>
                                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">API Status</a></li>
                                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Security</a></li>
                                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms & Conditions</a></li>
                            </ul>
                        </div>

                        {/* Column 4: Get in touch */}
                        <div>
                            <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Get in touch</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">We don't send spam so don't worry.</p>

                            <div className="space-y-4">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full px-5 py-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-blue-500 transition-colors"
                                />
                                <button className="w-full px-5 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:opacity-90 transition-opacity flex items-center justify-between group">
                                    <span>Signup Now</span>
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>

                            <div className="flex gap-4 mt-8">
                                <a href="#" className="text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><Facebook size={20} /></a>
                                <a href="#" className="text-slate-900 dark:text-white hover:text-pink-600 dark:hover:text-pink-400 transition-colors"><Instagram size={20} /></a>
                                <a href="#" className="text-slate-900 dark:text-white hover:text-black dark:hover:text-slate-300 transition-colors"><span className="font-bold text-lg leading-none">𝕏</span></a>
                                <a href="#" className="text-slate-900 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition-colors"><Youtube size={20} /></a>
                                <a href="#" className="text-slate-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500 transition-colors"><Linkedin size={20} /></a>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Copyright Section */}
                <div className="text-center text-slate-500 dark:text-slate-400 text-sm font-medium">
                    © {new Date().getFullYear()} BharatTech Technoecosystem Pvt. Ltd. All Rights Reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;
