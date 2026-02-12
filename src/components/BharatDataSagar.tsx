import { FileStack, ScanEye, AudioLines, Database, Globe } from "lucide-react";
import { useRef } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { motion } from "framer-motion";

const BharatDataSagar = () => {
  const sectionRef = useRef(null);
  const isVisible = useScrollReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-32 bg-transparent transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background Data Stream Effect */}
      <div className="absolute inset-0 opacity-[0.08] dark:opacity-[0.15] pointer-events-none overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
        >
          <path
            d="M -100 400 C 200 400 300 200 600 200 S 900 600 1200 600 S 1600 400 1800 400"
            fill="none"
            stroke="url(#gradient-stream)"
            strokeWidth="2"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="1000"
              to="0"
              dur="20s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="d"
              values="M -100 400 C 200 450 300 250 600 250 S 900 650 1200 650 S 1600 400 1800 400;
                                    M -100 400 C 200 350 300 150 600 150 S 900 550 1200 550 S 1600 400 1800 400;
                                    M -100 400 C 200 450 300 250 600 250 S 900 650 1200 650 S 1600 400 1800 400"
              dur="10s"
              repeatCount="indefinite"
            />
          </path>
          <path
            d="M -100 600 C 200 600 400 400 700 400 S 1000 200 1300 200 S 1700 600 1900 600"
            fill="none"
            stroke="url(#gradient-stream-2)"
            strokeWidth="1.5"
            strokeDasharray="20 10"
            opacity="0.6"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="1000"
              dur="25s"
              repeatCount="indefinite"
            />
          </path>
          <defs>
            <linearGradient
              id="gradient-stream"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="gradient-stream-2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="w-[95%] max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Text Content */}
          <div
            className={`lg:w-1/2 text-left transition-all duration-1000 transform ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-bold tracking-wide uppercase border border-blue-200 dark:border-blue-800 mb-6 backdrop-blur-sm">
              <Database size={14} className="animate-pulse" />
              <span className="font-mono">AIKosh Infrastructure</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Bharat <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
                Data Sagar
                <motion.div
                  className="absolute bottom-1 left-0 h-[6px] bg-cyan-400 rounded-full opacity-60"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                />
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg mb-8">
              The world's largest repository of Indian language data. We are
              digitizing India's heritage—creating an ocean of intelligence for
              the AI age.
            </p>

            <div className="flex flex-wrap gap-3">
              {["text", "audio", "video", "image", "geo"].map((type, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                  }}
                  className="px-4 py-2 rounded-lg bg-slate-100/50 dark:bg-slate-800/50 backdrop-blur-sm text-slate-600 dark:text-slate-300 text-sm font-mono border border-slate-200 dark:border-slate-700 cursor-default select-none transition-colors"
                >
                  /datasets/{type}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Visual - The "Interaction Core" */}
          <div
            className={`lg:w-1/2 relative h-[500px] w-full flex items-center justify-center lg:justify-end lg:-mr-24 transition-all duration-1000 delay-300 transform ${isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}
          >
            <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center mx-auto">
              {/* Central Core */}
              <div className="absolute w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-full blur-[40px] sm:blur-[60px] opacity-40 animate-pulse-slow"></div>
              <div className="relative z-20 w-32 h-32 sm:w-40 sm:h-40 bg-white/10 dark:bg-slate-900/40 backdrop-blur-xl rounded-full border border-blue-500/30 flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.2)]">
                <Globe
                  className="w-12 h-12 sm:w-16 sm:h-16 text-blue-500 opacity-80"
                  strokeWidth={1}
                />
                <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-ping-slow"></div>
              </div>

              {/* Orbiting Container - Horizontal 2D Ellipse via Translation */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Orbital Ring Visual - Ellipse shape */}
                <div className="absolute w-[300px] h-[120px] sm:w-[450px] sm:h-[180px] rounded-full border border-blue-500/10 dark:border-white/5"></div>

                {/* Badges positioned via Framer Motion Values */}
                <OrbitingBadges />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Extracted sub-component for motion value logic to keep main component clean
const OrbitingBadges = () => {
  // Removed isHovering prop
  // Static positioning - no animation loop needed
  const badges = [
    { icon: AudioLines, label: "Speech", color: "bg-blue-500", deg: 0 },
    { icon: ScanEye, label: "Vision", color: "bg-violet-500", deg: 120 },
    { icon: FileStack, label: "Text", color: "bg-cyan-500", deg: 240 },
  ];

  // Calculate responsive radii
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  const rx = isMobile ? 150 : 225;
  const ry = isMobile ? 60 : 90;

  return (
    <>
      {badges.map((card, idx) => {
        // Calculate position relative to center
        // Ellipse: Rx = 225, Ry = 90 (matches w-450 h-180)
        const radianOffset = (card.deg * Math.PI) / 180;

        // Static calculation
        const x = Math.cos(radianOffset) * rx;
        const y = Math.sin(radianOffset) * ry;

        return (
          <motion.div
            key={idx}
            className="absolute pointer-events-auto"
            initial={{ x, y, opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
            style={{ x, y }}
          >
            <div className="group relative p-2 sm:p-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl flex items-center gap-2 sm:gap-3 transition-all duration-300 hover:scale-110 hover:shadow-blue-500/30 hover:border-blue-500/50 cursor-pointer min-w-[130px] sm:min-w-[160px] -translate-x-1/2 -translate-y-1/2">
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${card.color} flex items-center justify-center text-white shadow-lg group-hover:animate-pulse`}
              >
                <card.icon size={isMobile ? 16 : 20} />
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                  {card.label}
                </p>
                <p className="text-[9px] sm:text-[10px] text-slate-500 font-mono">
                  1.2 PB Live
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

export default BharatDataSagar;
