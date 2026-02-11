
const Footer = () => {
    return (
        <footer className="bg-white/50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 backdrop-blur-md relative z-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 via-violet-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/20">
                                R
                            </div>
                            <span className="font-display font-bold text-xl text-slate-900 dark:text-white">
                                Rivinity
                            </span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
                            The next-generation AI operating system for high-performance teams.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">Product</h4>
                        <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
                            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-block hover:translate-x-1 duration-200">Features</a></li>
                            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-block hover:translate-x-1 duration-200">Integrations</a></li>
                            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-block hover:translate-x-1 duration-200">Pricing</a></li>
                            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-block hover:translate-x-1 duration-200">Changelog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">Company</h4>
                        <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
                            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-block hover:translate-x-1 duration-200">About</a></li>
                            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-block hover:translate-x-1 duration-200">Careers</a></li>
                            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-block hover:translate-x-1 duration-200">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-400 text-xs">
                        © {new Date().getFullYear()} Rivinity Inc. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 text-xs transition-colors">Privacy Policy</a>
                        <a href="#" className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 text-xs transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
