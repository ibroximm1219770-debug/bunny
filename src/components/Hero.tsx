import { motion } from 'motion/react';
import { 
  Phone, 
  MessageSquare, 
  Send, 
  Instagram, 
  Gamepad2, 
  ExternalLink,
  ChevronDown,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import heroCharacterImg from '../assets/images/bunny_hero_character_1789559212608.jpg';
import type { PortfolioData } from '../types';

interface HeroProps {
  portfolio: PortfolioData;
}

export default function Hero({ portfolio }: HeroProps) {
  const cleanPhone = portfolio.contact.phone.replace(/[^0-9+]/g, '');
  const cleanWaNumber = portfolio.contact.whatsapp.replace(/[^0-9]/g, '');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const rotatingWords = portfolio.rotatingTags || [
    'ROBOTICS',
    'APP INVENTOR',
    'ARDUINO',
    'AI',
    'GOOGLE AI STUDIO',
    'CODE',
    'CREATE',
    'BUILD',
  ];

  // Circular SVG text path sentence
  const circleText = rotatingWords.join(' • ') + ' • ';

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black"
    >
      {/* Background Subtle Radial Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(120,120,120,0.1),rgba(0,0,0,1))]" />

      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* ======================================================== */}
        {/* MOBILE ORDER: CHARACTER FIRST (on lg: RIGHT SIDE col-span-6 or 7) */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 lg:order-2 lg:col-span-7 flex flex-col sm:flex-row items-center justify-center relative select-none"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-white/[0.03] filter blur-3xl pointer-events-none" />

          {/* Glowing Circular Ring Behind Character */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] md:w-[500px] md:h-[500px] rounded-full border border-white/15 glow-ring animate-pulse-glow pointer-events-none z-0">
            {/* Fine outer concentric halo line */}
            <div className="absolute inset-[-14px] rounded-full border border-white/[0.04]" />
            <div className="absolute inset-[-28px] rounded-full border border-dashed border-white/[0.02]" />
          </div>

          {/* Character Container */}
          <div className="relative z-10 w-[270px] sm:w-[320px] md:w-[370px] rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative group">
              <img
                src={heroCharacterImg}
                alt="Axmadjanov Ibroxim - bunny modern developer character"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover rounded-2xl transform transition-transform duration-700 group-hover:scale-105"
              />

              {/* Seamless Bottom Gradient Blend into Pure Black */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />

              {/* Prominent 'bunny' Label Badge */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white font-mono-tech tracking-[0.3em] text-xs uppercase font-bold shadow-lg">
                bunny
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* FUTURISTIC SMARTPHONE (Beside the character) */}
          {/* ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="relative z-20 mt-6 sm:mt-0 sm:-ml-12 md:-ml-16 w-[230px] sm:w-[250px] animate-float"
          >
            {/* Outer Phone Chassis */}
            <div className="p-3 rounded-[32px] bg-gradient-to-b from-neutral-800 via-neutral-900 to-black border border-white/20 glow-phone">
              
              {/* Top Speaker / Dynamic Island */}
              <div className="flex justify-center mb-2">
                <div className="w-16 h-3.5 bg-black rounded-full border border-white/10 flex items-center justify-end px-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                </div>
              </div>

              {/* Inside Phone Screen */}
              <div className="rounded-[24px] bg-black p-4 border border-white/10 flex flex-col items-center text-center relative overflow-hidden">
                
                {/* Cyber grid in phone display */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:14px_14px] pointer-events-none" />

                {/* Monogram BN */}
                <div className="relative w-11 h-11 rounded-xl bg-white/[0.08] border border-white/20 flex items-center justify-center font-display font-black text-white text-base tracking-wider mb-2.5">
                  BN
                </div>

                {/* Intro greetings */}
                <p className="relative text-[11px] font-mono-tech text-white/50 tracking-wider">
                  Hi, I'm
                </p>
                <h3 className="relative text-sm font-bold tracking-wider text-white font-sans mt-0.5">
                  Axmadjanov Ibroxim
                </h3>
                <p className="relative text-[10px] font-mono-tech tracking-[0.2em] text-white/60 mt-1 uppercase">
                  Developer • Creator
                </p>

                {/* Divider */}
                <div className="relative w-12 h-[1px] bg-white/15 my-3" />

                {/* Interactive Phone Buttons */}
                <div className="relative w-full space-y-2">
                  <button
                    id="phone-view-projects-btn"
                    onClick={() => scrollToSection('projects')}
                    className="w-full py-2 px-3 rounded-lg bg-white text-black text-[10px] font-mono-tech font-semibold tracking-wider uppercase hover:bg-neutral-200 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>VIEW PROJECTS</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>

                  <button
                    id="phone-contact-btn"
                    onClick={() => scrollToSection('contact')}
                    className="w-full py-2 px-3 rounded-lg bg-white/[0.06] border border-white/20 text-white text-[10px] font-mono-tech tracking-wider uppercase hover:bg-white/15 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>CONTACT ME</span>
                  </button>
                </div>

                {/* Phone Bottom indicator line */}
                <div className="relative w-16 h-1 bg-white/20 rounded-full mt-3.5" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ======================================================== */}
        {/* LEFT SIDE: DEVELOPER INFO & ROTATING CIRCULAR TEXT */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="order-2 lg:order-1 lg:col-span-5 flex flex-col justify-center space-y-7"
        >
          {/* Status Chip */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white/80" />
            </span>
            <span className="text-xs font-mono-tech uppercase tracking-[0.25em] text-white/50">
              {portfolio.status} • {portfolio.location}
            </span>
          </div>

          {/* Name & Rotating Text Container */}
          <div className="relative">
            
            {/* ROTATING CIRCULAR TEXT EFFECT AROUND DEVELOPER NAME */}
            <div className="relative">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight text-white uppercase font-display leading-[1.05]">
                {portfolio.name}
              </h1>

              <div className="flex items-center gap-3 mt-2">
                <span className="text-2xl sm:text-3xl font-extralight text-white/70 font-mono-tech tracking-widest">
                  {portfolio.nickname}
                </span>
                <span className="w-8 h-[1px] bg-white/30" />
              </div>
            </div>

            {/* Rotating Words Ribbon / Orbit Badge */}
            <div className="mt-4 pt-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/[0.03]">
                <Sparkles className="w-3.5 h-3.5 text-white/80 animate-spin" style={{ animationDuration: '8s' }} />
                <div className="overflow-hidden whitespace-nowrap text-xs font-mono-tech text-white/80 tracking-wider">
                  <span>{circleText}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tagline */}
          <div className="border-l-2 border-white/20 pl-4 py-1">
            <p className="text-sm font-mono-tech tracking-[0.3em] uppercase text-white/70 font-medium">
              &ldquo;DREAM • CODE • CREATE&rdquo;
            </p>
            <p className="text-xs text-white/40 font-mono-tech mt-1 tracking-wider">
              Robotics • Embedded Systems • Artificial Intelligence
            </p>
          </div>

          {/* Direct Functional Contact Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            {/* CALL BUTTON */}
            <a
              id="hero-call-btn"
              href={`tel:${cleanPhone}`}
              className="px-4 py-2.5 rounded-xl bg-white text-black font-mono-tech text-xs tracking-wider font-semibold uppercase flex items-center gap-2 hover:bg-neutral-200 transition-all active:scale-95"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>CALL</span>
            </a>

            {/* SMS BUTTON */}
            <a
              id="hero-sms-btn"
              href={`sms:${cleanPhone}`}
              className="px-4 py-2.5 rounded-xl bg-white/[0.08] border border-white/20 text-white font-mono-tech text-xs tracking-wider uppercase flex items-center gap-2 hover:bg-white/15 transition-all active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>SEND SMS</span>
            </a>

            {/* WHATSAPP BUTTON */}
            <a
              id="hero-wa-btn"
              href={`https://wa.me/${cleanWaNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-white/[0.08] border border-white/20 text-white font-mono-tech text-xs tracking-wider uppercase flex items-center gap-2 hover:bg-white/15 transition-all active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
              <span>WHATSAPP</span>
            </a>
          </div>

          {/* Social Icons Bar */}
          <div className="pt-2 border-t border-white/10 flex flex-wrap items-center gap-3">
            <span className="text-[11px] font-mono-tech text-white/40 tracking-widest uppercase mr-1">
              CONNECT:
            </span>

            {/* Telegram */}
            <a
              id="social-telegram-link"
              href={`https://t.me/${portfolio.contact.telegram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white/70 hover:text-white hover:border-white/30 transition-all flex items-center gap-2 text-xs font-mono-tech"
              title={`Telegram: @${portfolio.contact.telegram}`}
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">@{portfolio.contact.telegram}</span>
            </a>

            {/* Instagram */}
            <a
              id="social-instagram-link"
              href={`https://instagram.com/${portfolio.contact.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white/70 hover:text-white hover:border-white/30 transition-all flex items-center gap-2 text-xs font-mono-tech"
              title={`Instagram: ${portfolio.contact.instagram}`}
            >
              <Instagram className="w-4 h-4" />
              <span className="hidden sm:inline">{portfolio.contact.instagram}</span>
            </a>

            {/* PUBG ID Button / Card */}
            <div
              id="social-pubg-card"
              className="p-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white/70 flex items-center gap-2 text-xs font-mono-tech select-none"
              title="PUBG Mobile Gamer ID"
            >
              <Gamepad2 className="w-4 h-4 text-white/50" />
              <span className="text-white/60">
                {portfolio.contact.pubg ? `PUBG: ${portfolio.contact.pubg}` : 'PUBG ID — Add later'}
              </span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll Down Hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity">
        <button
          onClick={() => scrollToSection('about')}
          aria-label="Scroll to About section"
          className="text-white/60 hover:text-white transition-colors"
        >
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
