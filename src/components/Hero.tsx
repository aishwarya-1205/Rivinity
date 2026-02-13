import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useInView, motion } from "framer-motion";
import Robot3D from "./Robot3D";
import Magnetic from "./Magnetic";
import { ArrowRight, Terminal } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { FlickeringGrid } from "./ui/FlickeringGrid";
import { ShinyText } from "./ui/ShinyText"; // Import ShinyText
import { GradientText } from "./ui/GradientText";

const Hero = () => {
  const { theme } = useTheme();

  const [displayText, setDisplayText] = useState("");

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 }); // Trigger when 30% visible

  useEffect(() => {
    if (!isInView) return;

    // Typing Logic - Optimized
    const fullText = "AI Operating System";
    const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let iteration = 0;
    let interval: ReturnType<typeof setInterval>;

    const startScramble = () => {
      // Mobile optimization: Show text immediately, no animation
      if (window.innerWidth < 640) {
        setDisplayText(fullText);
        return;
      }

      interval = setInterval(() => {
        setDisplayText(() =>
          fullText
            .split("")
            .map((_, index) => {
              if (index < iteration) {
                return fullText[index];
              }
              return possibleChars[
                Math.floor(Math.random() * possibleChars.length)
              ];
            })
            .join(""),
        );

        if (iteration >= fullText.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 45);
    };

    setTimeout(startScramble, 200);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-300 py-20 lg:py-0 px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto"
    >
      {/* Background: Flickering Grid (The Void Filler) */}
      <div className="absolute inset-0 z-0">
        <FlickeringGrid
          squareSize={3}
          gridGap={8}
          color="#3b82f6"
          maxOpacity={0.15}
          flickerChance={0.1}
          className="absolute inset-0 w-full h-full [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"
        />
      </div>

      {/* 3D Robot - Local to Hero Section */}
      <div className="absolute pt-10 inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={2}>
          <ambientLight intensity={theme === "dark" ? 2 : 2.5} />
          <directionalLight position={[5, 10, 5]} intensity={4} />
          <pointLight position={[-5, 5, 5]} intensity={2} color="#3b82f6" />

          <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <Robot3D />
          </Float>
        </Canvas>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
              }
            }
          }}
          className="text-left flex flex-col gap-5 items-start z-20 pt-20 lg:pt-12"
        >
          {/* Badge */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 animate-fade-in-up will-change-transform"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <GradientText colors={["#3b82f6", "#8b5cf6", "#3b82f6"]} animationSpeed={5} className="text-xs font-medium tracking-wide uppercase">
              Rivinity v2.0 Live
            </GradientText>
          </motion.div>

          {/* Main Headline - Animated */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl font-display font-bold tracking-tighter text-slate-900 dark:text-white font-mono leading-tight mb-4 min-h-[1.2em]"
          >
            {/* Mobile Layout: Forced Line Break */}
            <span className="sm:hidden">
              AI Operating <br /> System
            </span>

            {/* Desktop Layout: Animated Text */}
            <span className="hidden sm:inline">
              {displayText}
            </span>

            <span className="animate-pulse text-blue-500" aria-hidden="true">_</span>
          </motion.h1>

          {/* Subheading - Enhanced with ShinyText */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 fill-mode-forwards"
          >
            <ShinyText
              text="Orchestrate your entire workflow with one intelligent platform. Not just a chatbot, but a complete neural network for your business."
              disabled={false}
              speed={4}
              className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed"
            />
          </motion.div>

          {/* Buttons with Magnetic Effect */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="w-full flex flex-col sm:flex-row gap-5 justify-center sm:justify-start items-center pt-4 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-500 fill-mode-forwards"
          >
            <Magnetic strength={0.3} radius={200}>
              <button className="max-w-xs w-full mx-auto sm:mx-0 group relative px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium overflow-hidden transition-all hover:shadow-[0_0_50px_-10px_rgba(59,130,246,0.7)] hover:scale-105 active:scale-95">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-20 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
                <span className="relative flex items-center gap-2 font-bold tracking-wide">
                  Join Waiting List{" "}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </button>
            </Magnetic>

            <Magnetic strength={0.3} radius={200}>
              <button className="max-w-xs w-full mx-auto sm:mx-0 holographic-hover px-8 py-4 rounded-full bg-white/5 dark:bg-slate-900/40 text-slate-900 dark:text-white border border-slate-200/50 dark:border-white/10 font-medium backdrop-blur-md transition-all flex items-center justify-center gap-2 hover:bg-white/10 dark:hover:bg-white/10 hover:border-blue-500/30 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]">
                <Terminal size={18} className="text-blue-500" />{" "}
                <span className="tracking-wide">Explore Tools</span>
              </button>
            </Magnetic>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400">
        <div className="w-5 h-8 border-2 border-slate-300 dark:border-slate-700 rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-slate-300 dark:bg-slate-700 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
