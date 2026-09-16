import { motion } from 'motion/react';
import { 
  Phone, 
  MessageSquare, 
  Send, 
  Instagram, 
  Mail, 
  Gamepad2, 
  ArrowUpRight,
  Copy,
  Check
} from 'lucide-react';
import { useState } from 'react';
import type { PortfolioData } from '../types';

interface ContactSectionProps {
  portfolio: PortfolioData;
}

export default function ContactSection({ portfolio }: ContactSectionProps) {
  const [copiedPhone, setCopiedPhone] = useState(false);

  const cleanPhone = portfolio.contact.phone.replace(/[^0-9+]/g, '');
  const cleanWaNumber = portfolio.contact.whatsapp.replace(/[^0-9]/g, '');

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(portfolio.contact.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-3 mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono-tech text-white/50 tracking-widest uppercase">
          05 // REACH OUT
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display">
          LET&apos;S CONNECT
        </h2>
        <div className="w-12 h-[1px] bg-white/30 mx-auto" />
      </motion.div>

      {/* Main Contact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* PHONE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="p-6 rounded-2xl bg-neutral-950/80 border border-white/10 flex flex-col justify-between backdrop-blur-sm group hover:border-white/25 transition-all"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10 text-white">
                <Phone className="w-5 h-5" />
              </div>
              <button
                onClick={handleCopyPhone}
                title="Copy phone number"
                className="p-2 rounded-lg bg-white/[0.04] text-white/50 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <div className="text-xs font-mono-tech text-white/40 uppercase tracking-widest mb-1">
              PHONE
            </div>
            <div className="text-lg font-bold text-white font-mono-tech">
              {portfolio.contact.phone}
            </div>
            <p className="text-xs text-white/40 font-mono-tech mt-1">
              Click to initiate a cellular voice call.
            </p>
          </div>

          <div className="pt-5 mt-4 border-t border-white/5">
            <a
              id="contact-phone-call-btn"
              href={`tel:${cleanPhone}`}
              className="w-full py-2.5 px-4 rounded-xl bg-white text-black font-mono-tech text-xs tracking-wider font-semibold uppercase flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>CALL NOW</span>
            </a>
          </div>
        </motion.div>

        {/* SMS CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-6 rounded-2xl bg-neutral-950/80 border border-white/10 flex flex-col justify-between backdrop-blur-sm group hover:border-white/25 transition-all"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10 text-white">
                <MessageSquare className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono-tech text-white/40 tracking-widest">
                CELLULAR
              </span>
            </div>
            <div className="text-xs font-mono-tech text-white/40 uppercase tracking-widest mb-1">
              DIRECT SMS
            </div>
            <div className="text-lg font-bold text-white font-mono-tech">
              {portfolio.contact.phone}
            </div>
            <p className="text-xs text-white/40 font-mono-tech mt-1">
              Opens your device&apos;s native SMS application.
            </p>
          </div>

          <div className="pt-5 mt-4 border-t border-white/5">
            <a
              id="contact-sms-send-btn"
              href={`sms:${cleanPhone}`}
              className="w-full py-2.5 px-4 rounded-xl bg-white/[0.08] border border-white/20 text-white font-mono-tech text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-white/15 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>SEND SMS</span>
            </a>
          </div>
        </motion.div>

        {/* WHATSAPP CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="p-6 rounded-2xl bg-neutral-950/80 border border-white/10 flex flex-col justify-between backdrop-blur-sm group hover:border-white/25 transition-all"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10 text-white">
                <Send className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono-tech text-white/40 tracking-widest">
                CHAT
              </span>
            </div>
            <div className="text-xs font-mono-tech text-white/40 uppercase tracking-widest mb-1">
              WHATSAPP
            </div>
            <div className="text-lg font-bold text-white font-mono-tech">
              {portfolio.contact.whatsapp}
            </div>
            <p className="text-xs text-white/40 font-mono-tech mt-1">
              Direct encrypted messenger chat.
            </p>
          </div>

          <div className="pt-5 mt-4 border-t border-white/5">
            <a
              id="contact-whatsapp-btn"
              href={`https://wa.me/${cleanWaNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-white/[0.08] border border-white/20 text-white font-mono-tech text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-white/15 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>MESSAGE ON WHATSAPP</span>
            </a>
          </div>
        </motion.div>

        {/* TELEGRAM CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-6 rounded-2xl bg-neutral-950/80 border border-white/10 flex flex-col justify-between backdrop-blur-sm group hover:border-white/25 transition-all"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10 text-white">
                <Send className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono-tech text-white/40 tracking-widest">
                CHANNEL / DM
              </span>
            </div>
            <div className="text-xs font-mono-tech text-white/40 uppercase tracking-widest mb-1">
              TELEGRAM
            </div>
            <div className="text-lg font-bold text-white font-mono-tech">
              @{portfolio.contact.telegram}
            </div>
            <p className="text-xs text-white/40 font-mono-tech mt-1">
              Fastest communication channel.
            </p>
          </div>

          <div className="pt-5 mt-4 border-t border-white/5">
            <a
              id="contact-telegram-btn"
              href={`https://t.me/${portfolio.contact.telegram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-white/[0.08] border border-white/20 text-white font-mono-tech text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-white/15 transition-colors"
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
              <span>OPEN TELEGRAM</span>
            </a>
          </div>
        </motion.div>

        {/* INSTAGRAM CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="p-6 rounded-2xl bg-neutral-950/80 border border-white/10 flex flex-col justify-between backdrop-blur-sm group hover:border-white/25 transition-all"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10 text-white">
                <Instagram className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono-tech text-white/40 tracking-widest">
                SOCIAL
              </span>
            </div>
            <div className="text-xs font-mono-tech text-white/40 uppercase tracking-widest mb-1">
              INSTAGRAM
            </div>
            <div className="text-lg font-bold text-white font-mono-tech">
              {portfolio.contact.instagram}
            </div>
            <p className="text-xs text-white/40 font-mono-tech mt-1">
              Official Instagram identity.
            </p>
          </div>

          <div className="pt-5 mt-4 border-t border-white/5">
            <a
              id="contact-instagram-btn"
              href={`https://instagram.com/${portfolio.contact.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-white/[0.08] border border-white/20 text-white font-mono-tech text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-white/15 transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>OPEN INSTAGRAM</span>
            </a>
          </div>
        </motion.div>

        {/* EMAIL CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-6 rounded-2xl bg-neutral-950/80 border border-white/10 flex flex-col justify-between backdrop-blur-sm group hover:border-white/25 transition-all"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10 text-white">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono-tech text-white/40 tracking-widest">
                INBOX
              </span>
            </div>
            <div className="text-xs font-mono-tech text-white/40 uppercase tracking-widest mb-1">
              EMAIL
            </div>
            <div className="text-lg font-bold text-white font-mono-tech">
              {portfolio.contact.email ? portfolio.contact.email : 'Add later'}
            </div>
            <p className="text-xs text-white/40 font-mono-tech mt-1">
              Electronic correspondence.
            </p>
          </div>

          <div className="pt-5 mt-4 border-t border-white/5">
            {portfolio.contact.email ? (
              <a
                id="contact-email-btn"
                href={`mailto:${portfolio.contact.email}`}
                className="w-full py-2.5 px-4 rounded-xl bg-white/[0.08] border border-white/20 text-white font-mono-tech text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-white/15 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>SEND EMAIL</span>
              </a>
            ) : (
              <div className="w-full py-2.5 px-4 rounded-xl bg-white/[0.03] border border-white/5 text-white/30 font-mono-tech text-xs tracking-wider uppercase text-center">
                EMAIL — ADD LATER
              </div>
            )}
          </div>
        </motion.div>

      </div>

      {/* PUBG Mobile Banner Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="mt-6 p-6 rounded-2xl bg-neutral-950/80 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-sm"
      >
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10 text-white">
            <Gamepad2 className="w-6 h-6 text-white/80" />
          </div>
          <div>
            <div className="text-xs font-mono-tech text-white/40 uppercase tracking-wider">
              GAMING IDENTITY
            </div>
            <div className="text-base font-bold text-white font-mono-tech">
              {portfolio.contact.pubg ? `PUBG ID: ${portfolio.contact.pubg}` : 'PUBG ID — Add later'}
            </div>
          </div>
        </div>

        <div className="text-xs font-mono-tech text-white/40">
          Editable in <span className="text-white/70">src/data/portfolio.js</span>
        </div>
      </motion.div>
    </section>
  );
}
