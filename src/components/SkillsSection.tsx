import { motion } from 'motion/react';
import { 
  Cpu, 
  Bot, 
  Smartphone, 
  Brain, 
  Sparkles, 
  Code2, 
  Globe, 
  LucideIcon 
} from 'lucide-react';
import type { PortfolioData, SkillItem } from '../types';

interface SkillsSectionProps {
  portfolio: PortfolioData;
}

const iconMap: Record<string, LucideIcon> = {
  Cpu,
  Bot,
  Smartphone,
  Brain,
  Sparkles,
  Code2,
  Globe,
};

export default function SkillsSection({ portfolio }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-3 mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono-tech text-white/50 tracking-widest uppercase">
          03 // CAPABILITIES
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display">
          SKILLS
        </h2>
        <div className="w-12 h-[1px] bg-white/30 mx-auto" />
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolio.skills.map((skill: SkillItem, index: number) => {
          const IconComponent = iconMap[skill.icon] || Code2;

          return (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="group p-6 rounded-2xl bg-neutral-950/80 border border-white/10 hover:border-white/30 transition-all duration-300 relative overflow-hidden backdrop-blur-sm"
            >
              <div className="flex items-center gap-3.5 mb-3">
                <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-5 h-5 text-white/90" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-mono-tech tracking-wide">
                    {skill.title}
                  </h3>
                  <span className="text-[10px] font-mono-tech text-white/30 tracking-widest uppercase">
                    TECHNICAL DISCIPLINE
                  </span>
                </div>
              </div>

              <p className="text-xs text-white/60 leading-relaxed font-sans mt-2">
                {skill.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
