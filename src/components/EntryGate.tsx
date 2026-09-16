import { useState, FormEvent, KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Terminal } from 'lucide-react';

interface EntryGateProps {
  onUnlock: () => void;
}

type Stage = 'input' | 'question' | 'completed';

export default function EntryGate({ onUnlock }: EntryGateProps) {
  const [inputValue, setInputValue] = useState('');
  const [stage, setStage] = useState<Stage>('input');

  const handleEnter = (e?: FormEvent) => {
    if (e) e.preventDefault();
    if (stage !== 'input') return;

    // Transition to the Uzbek inquiry phrase
    setStage('question');

    // Display "Hosh, nega kirdingiz?" for 1.8 seconds, then reveal portfolio
    setTimeout(() => {
      setStage('completed');
      setTimeout(() => {
        onUnlock();
      }, 500);
    }, 1800);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleEnter();
    }
  };

  return (
    <AnimatePresence>
      {stage !== 'completed' && (
        <motion.div
          id="entry-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white px-4 select-none"
        >
          {stage === 'input' && (
            <motion.div
              key="input-stage"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, filter: 'blur(6px)', transition: { duration: 0.4 } }}
              className="w-full max-w-md flex flex-col items-center text-center space-y-8"
            >
              {/* Brand Title */}
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono-tech text-white/50 tracking-widest uppercase">
                  <Terminal className="w-3.5 h-3.5 text-white/70" />
                  Terminal Access
                </div>
                <h1 className="text-5xl md:text-6xl font-bold tracking-[0.25em] text-white font-display">
                  BUNNY
                </h1>
                <p className="text-xs tracking-[0.3em] uppercase text-white/40 font-mono-tech">
                  Cyber Developer Portfolio
                </p>
              </div>

              {/* Form Input */}
              <form onSubmit={handleEnter} className="w-full space-y-4">
                <div className="relative group">
                  <input
                    id="entry-website-input"
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter website name..."
                    autoFocus
                    className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/15 text-white placeholder:text-white/30 text-sm font-mono-tech tracking-wider focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/30 transition-all duration-300 group-hover:border-white/25"
                  />
                </div>

                <button
                  id="entry-submit-btn"
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-white text-black font-semibold text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-2 hover:bg-neutral-200 transition-all duration-200 active:scale-[0.98] cursor-pointer"
                >
                  <span>ENTER</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <div className="text-[11px] text-white/30 font-mono-tech">
                Type <span className="text-white/70 font-bold">BUNNY</span> or press{' '}
                <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/80 border border-white/10">ENTER</kbd>
              </div>
            </motion.div>
          )}

          {stage === 'question' && (
            <motion.div
              key="question-stage"
              initial={{ opacity: 0, scale: 0.92, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.05, filter: 'blur(8px)' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center px-6"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-wider text-white font-mono-tech">
                &ldquo;Hosh, nega kirdingiz?&rdquo;
              </h2>
              <p className="mt-4 text-xs font-mono-tech tracking-[0.3em] uppercase text-white/40">
                Identity verified • Opening workspace
              </p>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
