import { motion } from 'motion/react';
import { User, Activity, MapPin, Calendar, GraduationCap, School, BookOpen } from 'lucide-react';
import type { PortfolioData } from '../types';

interface AboutSectionProps {
  portfolio: PortfolioData;
}

export default function AboutSection({ portfolio }: AboutSectionProps) {
  const personalDetails = [
    {
      label: 'Name',
      value: portfolio.name,
      icon: User,
    },
    {
      label: 'Nickname',
      value: portfolio.nickname,
      icon: User,
    },
    {
      label: 'Status',
      value: portfolio.status || 'Not working',
      icon: Activity,
    },
    {
      label: 'Location',
      value: portfolio.location || 'Uzbekistan',
      icon: MapPin,
    },
    {
      label: 'Age',
      value: portfolio.age ? portfolio.age : 'Add later',
      icon: Calendar,
    },
    {
      label: 'Education',
      value: portfolio.education.course ? portfolio.education.course : 'Add later',
      icon: GraduationCap,
    },
    {
      label: 'School / University',
      value: portfolio.education.school || portfolio.education.university ? (portfolio.education.school || portfolio.education.university) : 'Add later',
      icon: School,
    },
    {
      label: 'Field',
      value: portfolio.education.field ? portfolio.education.field : 'Add later',
      icon: BookOpen,
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-3 mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono-tech text-white/50 tracking-widest uppercase">
          01 // OVERVIEW
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display">
          ABOUT ME
        </h2>
        <div className="w-12 h-[1px] bg-white/30 mx-auto" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Concise Statement & Status Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-5 space-y-6"
        >
          {/* Statement card */}
          <div className="p-8 rounded-2xl bg-neutral-950/80 border border-white/10 relative overflow-hidden backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] rounded-full filter blur-2xl pointer-events-none" />
            <h3 className="text-xs font-mono-tech tracking-[0.25em] text-white/40 uppercase mb-4">
              PROFILE STATEMENT
            </h3>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed font-sans font-light">
              &ldquo;Hello, I'm <span className="text-white font-medium">{portfolio.name}</span>, also known as <span className="text-white font-medium">{portfolio.nickname}</span>. I am interested in technology, programming, artificial intelligence, robotics and creative digital projects.&rdquo;
            </p>
          </div>

          {/* CURRENT STATUS CARD */}
          <div className="p-6 rounded-2xl bg-neutral-950/80 border border-white/10 relative">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono-tech tracking-[0.2em] text-white/40 uppercase">
                CURRENT STATUS
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-[11px] font-mono-tech text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                Available for Projects
              </span>
            </div>
            <div className="text-2xl font-bold text-white font-mono-tech">
              {portfolio.status}
            </div>
            <p className="text-xs text-white/40 font-mono-tech mt-2">
              Focusing on skill expansion, hardware building, and independent technical creation.
            </p>
          </div>
        </motion.div>

        {/* Right Column: PERSONAL INFORMATION GRID */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7"
        >
          <div className="p-8 rounded-2xl bg-neutral-950/80 border border-white/10 backdrop-blur-sm">
            <h3 className="text-xs font-mono-tech tracking-[0.25em] text-white/40 uppercase mb-6 flex items-center justify-between">
              <span>PERSONAL INFORMATION</span>
              <span className="text-[10px] text-white/30">ID: {portfolio.nickname.toUpperCase()}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalDetails.map((item) => {
                const IconComponent = item.icon;
                const isPlaceholder = item.value === 'Add later';

                return (
                  <div
                    key={item.label}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <IconComponent className="w-3.5 h-3.5 text-white/40" />
                      <span className="text-xs font-mono-tech text-white/40 tracking-wider">
                        {item.label}
                      </span>
                    </div>
                    <div
                      className={`text-sm font-medium tracking-wide ${
                        isPlaceholder ? 'text-white/35 font-mono-tech italic' : 'text-white'
                      }`}
                    >
                      {item.value}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
