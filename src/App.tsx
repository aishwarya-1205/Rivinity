import { Suspense, lazy, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider, useTheme } from './hooks/useTheme';
import Hero from './components/Hero';
import AIPresenceLayer from './components/AIPresenceLayer';
import { ScrollReveal } from './components/ui/ScrollReveal';

import InitializationScreen from './components/InitializationScreen';

// Lazy load heavy components
const ToolTicker = lazy(() => import('./components/ToolTicker'));
const StatsStrip = lazy(() => import('./components/StatsStrip')); // New
const MissionVision = lazy(() => import('./components/MissionVision')); // New
const SovereignCloud = lazy(() => import('./components/SovereignCloud'));
const BharatDataSagar = lazy(() => import('./components/BharatDataSagar')); // New
const IndianLLM = lazy(() => import('./components/IndianLLM'));
const PopulationScaleApps = lazy(() => import('./components/PopulationScaleApps')); // Replaces UseCases
const Ecosystem = lazy(() => import('./components/Ecosystem'));
const InteractiveDemo = lazy(() => import('./components/InteractiveDemo'));
const TechShowcase = lazy(() => import('./components/TechShowcase'));
const OSArchitecture = lazy(() => import('./components/OSArchitecture'));
const FutureInfrastructure = lazy(() => import('./components/FutureInfrastructure'));
const FinalCTA = lazy(() => import('./components/FinalCTA'));

const LoadingFallback = () => (
  <div className="w-full h-40 flex items-center justify-center text-slate-400 animate-pulse">
    Loading...
  </div>
);

function App() {
  const { theme } = useTheme();
  const [isBooted, setIsBooted] = useState(false);

  return (
    <ThemeProvider defaultTheme="light" storageKey="rivinity-theme">
      <AIPresenceLayer />

      <div className={`min-h-screen bg-transparent transition-colors duration-300 ${theme}`}>
        <AnimatePresence mode="wait">
          {!isBooted && (
            <InitializationScreen onComplete={() => setIsBooted(true)} />
          )}
        </AnimatePresence>

        {isBooted && <Navbar />}

        <main className="relative overflow-hidden">

          {/* Main Content Animation */}
          <AnimatePresence>
            {isBooted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {/* specific Z-index fix for robot interaction */}
                <div className="relative z-10">
                  <Hero />
                </div>

                <Suspense fallback={<LoadingFallback />}>
                  <ScrollReveal direction="up" delay={0.1}>
                    <StatsStrip />
                  </ScrollReveal>

                  <ScrollReveal width="100%" direction="up">
                    <MissionVision />
                  </ScrollReveal>

                  <ScrollReveal width="100%" direction="up">
                    <SovereignCloud />
                  </ScrollReveal>

                  <ScrollReveal width="100%" direction="up">
                    <BharatDataSagar />
                  </ScrollReveal>

                  <ScrollReveal width="100%" direction="up">
                    <IndianLLM />
                  </ScrollReveal>

                  <ScrollReveal width="100%" direction="up">
                    <PopulationScaleApps />
                  </ScrollReveal>

                  <ScrollReveal width="100%" direction="up">
                    <Ecosystem />
                  </ScrollReveal>

                  <ScrollReveal width="100%" direction="up" delay={0.2}>
                    <ToolTicker />
                  </ScrollReveal>

                  <ScrollReveal width="100%" direction="up">
                    <InteractiveDemo />
                  </ScrollReveal>

                  <ScrollReveal width="100%" direction="up">
                    <OSArchitecture />
                  </ScrollReveal>

                  <ScrollReveal width="100%" direction="up">
                    <TechShowcase />
                  </ScrollReveal>

                  <ScrollReveal width="100%" direction="up">
                    <FutureInfrastructure />
                  </ScrollReveal>

                  <ScrollReveal width="100%" direction="up">
                    <FinalCTA />
                  </ScrollReveal>
                </Suspense>
              </motion.div>
            )}
          </AnimatePresence>

        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
