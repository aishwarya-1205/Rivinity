import * as Lucide from "lucide-react";

const InfrastructureStrip = () => {
  return (
    <section className="py-8 bg-transparent relative overflow-hidden transition-colors duration-300">
      {/* Top/Bottom Borders with scanning effect */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-slate-200 dark:bg-slate-800">
        <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 animate-shimmer-fast"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-slate-200 dark:bg-slate-800">
        <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-50 animate-shimmer-fast animation-delay-500"></div>
      </div>

      {/* Subtle Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Tech Badge */}
          <div className="group flex items-center gap-4 px-5 py-2.5 rounded-full bg-slate-100/40 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-700/50 backdrop-blur-md hover:border-emerald-500/30 transition-all cursor-default">
            <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500/20 transition-colors">
              <Lucide.Shield size={16} />
              <div className="absolute inset-0 rounded-full border border-emerald-500/20 animate-ping-slow"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                Infrastructure Status
              </span>
              <span className="text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center gap-2">
                CLOSED & SOVEREIGN
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              </span>
            </div>
          </div>

          {/* Right: Main Headline */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2 text-slate-400 opacity-50">
              <span className="w-1 h-1 rounded-full bg-current"></span>
              <span className="w-1 h-1 rounded-full bg-current"></span>
              <span className="w-1 h-1 rounded-full bg-current"></span>
            </div>

            <h3 className="text-xl md:text-2xl font-display font-medium text-slate-900 dark:text-white tracking-tight">
              Designed for{" "}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 font-bold decoration-orange-500/30">
                India
              </span>
              .
              <span className="mx-2 text-slate-300 dark:text-slate-700 font-light">
                |
              </span>
              Scalable for the{" "}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 font-bold">
                World
              </span>
              .
            </h3>

            <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-slate-700">
              <Lucide.Globe
                size={20}
                className="hover:text-blue-500 transition-colors"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureStrip;
