import { motion } from 'motion/react';
import { Github, ExternalLink, Terminal, GitBranch } from 'lucide-react';
import type { PortfolioData } from '../types';

interface GitHubSectionProps {
  portfolio: PortfolioData;
}

export default function GitHubSection({ portfolio }: GitHubSectionProps) {
  const githubUrl = portfolio.github
    ? portfolio.github.startsWith('http')
      ? portfolio.github
      : `https://github.com/${portfolio.github}`
    : '';

  return (
    <section id="github" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="p-8 sm:p-12 rounded-3xl bg-neutral-950/80 border border-white/10 relative overflow-hidden backdrop-blur-sm text-center"
      >
        {/* Subtle decorative code grid in background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <div className="relative z-10 max-w-xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 p-3 rounded-2xl bg-white/[0.05] border border-white/10 text-white">
            <Github className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
              GITHUB
            </h2>
            <p className="text-sm sm:text-base text-white/70 font-mono-tech">
              &ldquo;Explore my code and projects.&rdquo;
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            {githubUrl ? (
              <a
                id="github-view-btn"
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-black font-mono-tech text-xs tracking-[0.2em] font-semibold uppercase flex items-center justify-center gap-2 hover:bg-neutral-200 transition-all cursor-pointer active:scale-95"
              >
                <span>VIEW GITHUB</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <div className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.05] border border-white/10 text-white/50 font-mono-tech text-xs tracking-wider">
                <GitBranch className="w-4 h-4 text-white/40" />
                <span>GitHub Profile — Add username in portfolio.js</span>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
