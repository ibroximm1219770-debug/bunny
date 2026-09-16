import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FolderGit2, ExternalLink, Github, X, Sparkles, Layers } from 'lucide-react';
import type { PortfolioData, ProjectItem } from '../types';

interface ProjectsSectionProps {
  portfolio: PortfolioData;
}

export default function ProjectsSection({ portfolio }: ProjectsSectionProps) {
  const [activeModal, setActiveModal] = useState<ProjectItem | null>(null);

  // ESC key listener for modal accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModal(null);
      }
    };
    if (activeModal) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModal]);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-3 mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono-tech text-white/50 tracking-widest uppercase">
          04 // ARCHIVE
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display">
          MY PROJECTS
        </h2>
        <div className="w-12 h-[1px] bg-white/30 mx-auto" />
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolio.projects.map((project: ProjectItem, index: number) => {
          const isPlaceholder = project.description === 'Add project later';

          return (
            <motion.div
              key={project.id || index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActiveModal(project)}
              className="group cursor-pointer rounded-2xl bg-neutral-950/80 border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden flex flex-col justify-between backdrop-blur-sm relative"
            >
              {/* Project Card Header Visual */}
              <div className="h-44 bg-gradient-to-br from-neutral-900 via-black to-neutral-950 p-6 flex flex-col justify-between relative border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
                
                <div className="flex items-center justify-between relative z-10">
                  <div className="p-2.5 rounded-xl bg-white/[0.06] border border-white/10 text-white/80 group-hover:text-white transition-colors">
                    <FolderGit2 className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono-tech text-white/30 tracking-widest">
                    PROJ_{String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white font-mono-tech tracking-wide group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  {project.tagline && (
                    <p className="text-xs text-white/50 font-mono-tech mt-0.5">
                      {project.tagline}
                    </p>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <p
                    className={`text-xs leading-relaxed font-sans ${
                      isPlaceholder ? 'text-white/40 italic font-mono-tech' : 'text-white/70'
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  {project.technology && project.technology.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.technology.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-[10px] font-mono-tech text-white/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Action Links */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono-tech">
                  <div className="flex items-center gap-3">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-white/70 hover:text-white transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source</span>
                      </a>
                    ) : (
                      <span className="text-white/30 flex items-center gap-1">
                        <Github className="w-3.5 h-3.5 opacity-40" />
                        <span>Coming Soon</span>
                      </span>
                    )}

                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-white/70 hover:text-white transition-colors ml-2"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    ) : (
                      <span className="text-white/30 flex items-center gap-1 ml-2">
                        <ExternalLink className="w-3.5 h-3.5 opacity-40" />
                        <span>Coming Soon</span>
                      </span>
                    )}
                  </div>

                  <span className="text-[11px] text-white/40 group-hover:text-white/70 transition-colors">
                    Details →
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Interactive Project Modal for full description */}
      <AnimatePresence>
        {activeModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-2xl bg-neutral-950 border border-white/20 p-6 shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModal(null)}
                aria-label="Close modal"
                className="absolute top-5 right-5 p-1.5 rounded-lg bg-white/[0.05] text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono-tech text-white/40 mb-2">
                <Layers className="w-3.5 h-3.5" />
                <span>PROJECT SPECIFICATION</span>
              </div>

              <h3 className="text-2xl font-bold text-white font-mono-tech">
                {activeModal.title}
              </h3>
              {activeModal.tagline && (
                <p className="text-xs text-white/60 font-mono-tech mt-1">
                  {activeModal.tagline}
                </p>
              )}

              <div className="my-6 p-4 rounded-xl bg-white/[0.02] border border-white/10">
                <p className="text-sm text-white/80 leading-relaxed font-sans">
                  {activeModal.description}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {activeModal.technology.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-md bg-white/[0.05] border border-white/10 text-xs font-mono-tech text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono-tech">
                  <div className="text-white/40">
                    Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/80 border border-white/10">ESC</kbd> to close
                  </div>

                  <div className="flex items-center gap-3">
                    {activeModal.githubUrl ? (
                      <a
                        href={activeModal.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-white text-black font-semibold tracking-wider uppercase hover:bg-neutral-200 transition-colors"
                      >
                        GitHub
                      </a>
                    ) : (
                      <span className="text-white/40">GitHub: Coming Soon</span>
                    )}

                    {activeModal.demoUrl ? (
                      <a
                        href={activeModal.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-white/[0.08] border border-white/20 text-white hover:bg-white/15 transition-colors"
                      >
                        Live Demo
                      </a>
                    ) : (
                      <span className="text-white/40">Demo: Coming Soon</span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
