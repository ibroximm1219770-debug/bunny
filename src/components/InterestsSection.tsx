import { motion } from 'motion/react';
import { Bot, Cpu, Smartphone, Brain, Sparkles, Binary } from 'lucide-react';
import type { PortfolioData } from '../types';

interface InterestsSectionProps {
  portfolio: PortfolioData;
}

export default function InterestsSection({ portfolio }: InterestsSectionProps) {
  // Map icons and descriptions strictly to the allowed interests
  const interestMeta: Record<string, { icon: typeof Bot; sub: string }> = {
    ROBOTICS: {
      icon: Bot,
      sub: 'Kinematics, actuator circuits, and autonomous sensor algorithms',
    },
    ROBO: {
      icon: Binary,
      sub: 'Mechanical frameworks, motor drivers, and automated control',
    },
    'APP INVENTOR': {
      icon: Smartphone,
      sub: 'Rapid mobile prototyping and block architecture development',
    },
    ARDUINO: {
      icon: Cpu,
      sub: 'Microcontroller programming, firmware logic, and I/O hardware',
    },
    AI: {
      icon: Brain,
      sub: 'Machine learning fundamentals, intelligent automation, and algorithms',
    },
    'GOOGLE AI STUDIO': {
      icon: Sparkles,
      sub: 'Gemini developer workflows, multimodal prompting, and API testing',
    },
  };

  const allowedInterests = portfolio.interests || [
    'ROBOTICS',
    'ROBO',
    'APP INVENTOR',
    'ARDUINO',
    'AI',
    'GOOGLE AI STUDIO',
  ];

  return (
    <section id="interests" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-3 mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono-tech text-white/50 tracking-widest uppercase">
          02 // PASSION
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display">
          MY INTERESTS
        </h2>
        <div className="w-12 h-[1px] bg-white/30 mx-auto" />
      </motion.div>

      {/* Grid of Interests */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allowedInterests.map((interest, index) => {
          const meta = interestMeta[interest] || {
            icon: Cpu,
            sub: 'Specialized technological domain',
          };
          const IconComponent = meta.icon;

          return (
            <motion.div
              key={interest}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group p-6 rounded-2xl bg-neutral-950/80 border border-white/10 hover:border-white/30 transition-all duration-300 relative overflow-hidden backdrop-blur-sm"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10 text-white group-hover:scale-105 transition-transform duration-300">
                  <IconComponent className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono-tech text-white/30 tracking-widest">
                  #{String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="text-lg font-bold tracking-wider text-white font-mono-tech mb-2 group-hover:text-white transition-colors">
                {interest}
              </h3>
              <p className="text-xs text-white/50 leading-relaxed font-sans">
                {meta.sub}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
