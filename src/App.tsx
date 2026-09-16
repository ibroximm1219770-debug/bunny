import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import portfolioData from './data/portfolio.js';
import type { PortfolioData } from './types';
import EntryGate from './components/EntryGate';
import BackgroundSnake from './components/BackgroundSnake';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import InterestsSection from './components/InterestsSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import GitHubSection from './components/GitHubSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const portfolio = portfolioData as unknown as PortfolioData;

  const handleToggleSound = () => {
    setSoundEnabled((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-black text-white relative selection:bg-white/20 selection:text-white overflow-x-hidden">
      {/* Subtle Desktop Custom Cursor */}
      <CustomCursor />

      {/* Special Background Snake Effect (Spawns every 15-30 seconds) */}
      <BackgroundSnake soundEnabled={soundEnabled} />

      {/* First Entry Gate (Initial Black Screen -> 'Hosh, nega kirdingiz?' -> Unlock) */}
      {!isUnlocked && (
        <EntryGate onUnlock={() => setIsUnlocked(true)} />
      )}

      {/* Main Portfolio Content */}
      <AnimatePresence>
        {isUnlocked && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            {/* Sticky Cyber Navbar */}
            <Navbar
              soundEnabled={soundEnabled}
              onToggleSound={handleToggleSound}
            />

            {/* Main Content Sections */}
            <main>
              {/* Hero Section */}
              <Hero portfolio={portfolio} />

              {/* About Me & Personal Info */}
              <AboutSection portfolio={portfolio} />

              {/* Interests Section */}
              <InterestsSection portfolio={portfolio} />

              {/* Skills Section */}
              <SkillsSection portfolio={portfolio} />

              {/* Projects Archive */}
              <ProjectsSection portfolio={portfolio} />

              {/* GitHub Explorer */}
              <GitHubSection portfolio={portfolio} />

              {/* Contact & Direct Communication Links */}
              <ContactSection portfolio={portfolio} />
            </main>

            {/* Minimal Footer */}
            <Footer portfolio={portfolio} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
