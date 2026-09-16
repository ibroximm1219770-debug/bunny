import type { PortfolioData } from '../types';

interface FooterProps {
  portfolio: PortfolioData;
}

export default function Footer({ portfolio }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div className="space-y-1">
          <div className="text-xl font-bold font-display tracking-widest text-white">
            {portfolio.nickname}
          </div>
          <div className="text-xs font-mono-tech text-white/50 tracking-wider">
            {portfolio.name}
          </div>
        </div>

        <div className="text-xs font-mono-tech tracking-[0.3em] uppercase text-white/60">
          &ldquo;DREAM • CODE • CREATE&rdquo;
        </div>

        <div className="text-[11px] font-mono-tech text-white/30">
          © {currentYear} • ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
}
