import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useInView } from "framer-motion";
import Robot3D from "./Robot3D";
import Magnetic from "./Magnetic";
import gsap from "gsap";
import { ArrowRight, Terminal } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const Hero = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const [displayText, setDisplayText] = useState("");
  const fullText = "AI Operating System";
  const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+<>/[]{}|";

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 }); // Trigger when 30% visible

  useEffect(() => {
    if (!isInView) return;

    // Scramble Text Logic
    let iteration = 0;
    let interval: ReturnType<typeof setInterval>;

    const startScramble = () => {
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

        iteration += 1 / 3; // Controls speed of reveal
      }, 45);
    };

    // Delay start slightly
    setTimeout(startScramble, 200);

    // GSAP Entrance Animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      subheadRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 1.5 },
    ).fromTo(
      buttonsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.5",
    );

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-300 py-20 lg:py-0"
    >
      {/* 3D Robot - Local to Hero Section */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <ambientLight intensity={theme === "dark" ? 2 : 2.5} />
          <directionalLight position={[5, 10, 5]} intensity={4} />
          <pointLight position={[-5, 5, 5]} intensity={2} color="#3b82f6" />
          <Robot3D />
        </Canvas>
      </div>

      <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
        <div className="text-left flex flex-col gap-6 items-start z-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 animate-fade-in-up will-change-transform">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-xs font-medium text-slate-600 dark:text-slate-300 tracking-wide uppercase">
              Rivinity v2.0 Live
            </span>
          </div>

          {/* Main Headline with Scramble Effect */}
          <h1
            ref={headlineRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold tracking-tighter text-slate-900 dark:text-white font-mono leading-snug min-h-[1.2em]"
          >
            {displayText}
            <span className="animate-pulse text-blue-500">_</span>
          </h1>

          {/* Subheading */}
          <p
            ref={subheadRef}
            className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed opacity-0"
          >
            Orchestrate your entire workflow with one intelligent platform. Not
            just a chatbot, but a complete neural network for your business.
          </p>

          {/* Buttons with Magnetic Effect */}
          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-5 justify-start items-center opacity-0 pt-4"
          >
            <Magnetic strength={0.3} radius={200}>
              <button className="group relative px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium overflow-hidden transition-all hover:shadow-[0_0_50px_-10px_rgba(59,130,246,0.7)] hover:scale-105 active:scale-95">
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
              <button className="holographic-hover px-8 py-4 rounded-full bg-white/5 dark:bg-slate-900/40 text-slate-900 dark:text-white border border-slate-200/50 dark:border-white/10 font-medium backdrop-blur-md transition-all flex items-center gap-2 hover:bg-white/10 dark:hover:bg-white/10 hover:border-blue-500/30 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]">
                <Terminal size={18} className="text-blue-500" />{" "}
                <span className="tracking-wide">Explore Tools</span>
              </button>
            </Magnetic>
          </div>
        </div>
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
