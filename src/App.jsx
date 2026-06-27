import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

// Import subcomponents
import Hero from './components/Hero';
import Blessings from './components/Blessings';
import Profiles from './components/Profiles';
import Events from './components/Events';
import MusicPlayer from './components/MusicPlayer';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    setIsPlaying(true);

    // Initial celebratory gold confetti burst
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.5 },
      colors: ['#d4af37', '#b48c23', '#fffdf6', '#ff9f1c', '#7a2d3b']
    });
  };



  return (
    <div className="relative min-h-screen text-[#fffdf6] bg-[#2b0c10] overflow-x-hidden selection:bg-gold-500 selection:text-maroon-950">

      <AnimatePresence mode="wait">
        {!isOpen ? (
          // ENVELOPE / PRELOADER VEIL
          <motion.div
            key="envelope-preloader"
            initial={{ opacity: 1 }}
            exit={{ y: '-100vh', opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-maroon-950 via-[#3a1117] to-maroon-950 overflow-hidden"
          >
            {/* Background luxury overlay patterns */}
            <div className="absolute inset-0 bg-mandala-overlay opacity-10"></div>

            {/* Spinning decorative background mandala */}
            <div className="absolute w-[600px] h-[600px] opacity-5 text-gold-400 select-none pointer-events-none">
              <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full animate-spin-slow">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" />
                {Array.from({ length: 36 }).map((_, i) => (
                  <path
                    key={i}
                    d="M 50 50 C 40 20 60 20 50 0 C 40 20 60 20 50 50"
                    transform={`rotate(${i * 10} 50 50)`}
                  />
                ))}
              </svg>
            </div>

            {/* Envelope Card Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="relative w-full max-w-lg glass-maroon p-8 sm:p-12 rounded-3xl border border-gold-500/25 shadow-2xl text-center flex flex-col items-center justify-center gold-card-border"
            >
              {/* Premium Gold Ganesha (Vinayaka) Image */}
              <div className="w-28 h-28 mb-6 rounded-full border-2 border-gold-500/40 p-1 bg-maroon-900/60 shadow-lg shadow-black/40 overflow-hidden select-none flex items-center justify-center">
                <img 
                  src="/vinayaka_premium.png" 
                  alt="Lord Ganesha" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <span className="text-gold-300 text-xs sm:text-sm tracking-[0.25em] font-cinzel font-semibold uppercase block mb-3">
                Chilakapati Family Invitation
              </span>

              {/* Telugu welcome script */}
              <h1 className="text-2xl sm:text-3xl font-bold font-serif text-gold-500 mb-6 text-gold-gradient">
                చిలకపాటి వారి పెండ్లి పిలుపు
              </h1>

              <div className="w-12 h-[1px] bg-gold-500/30 mb-6"></div>

              {/* Couples Silhouette illustration or stylized text */}
              <div className="mb-6 flex flex-col items-center">
                <h2 className="text-4xl sm:text-5xl font-vibes text-gold-500 text-gold-gradient font-bold tracking-wide" style={{ fontFamily: "'Great Vibes', cursive" }}>
                  Bhargav &amp; Chandana
                </h2>
                <p className="text-xs text-gold-200/50 uppercase tracking-widest mt-1">Wedding Celebration</p>
              </div>

              {/* Sub-note */}
              <p className="text-[#fffdf6]/70 text-xs sm:text-sm max-w-sm mb-8 leading-relaxed italic">
                We request the pleasure of your company to grace this auspicious occasion and bless the new couple.
              </p>

              {/* Pulse Open Button */}
              <button
                onClick={handleOpenInvitation}
                className="relative inline-flex items-center justify-center bg-gradient-to-r from-gold-600 to-gold-500 text-maroon-950 font-bold px-8 py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-[0.15em] transition-all duration-300 shadow-xl shadow-black/30 hover:scale-105 active:scale-95 animate-pulse-glow cursor-pointer"
              >
                <span>Open Invitation • ఆహ్వానం</span>
              </button>
            </motion.div>

            {/* Envelope Footnote */}
            <p className="mt-8 text-gold-300/40 text-[10px] sm:text-xs tracking-widest font-cinzel">
              SHREE SHUBHAMASTU • 2026
            </p>
          </motion.div>
        ) : (
          // MAIN WEDDING INVITATION WEBSITE CONTENT
          <motion.div
            key="main-invitation-site"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col min-h-screen"
          >
            {/* Background Music Player floating widget */}
            <MusicPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />

            {/* Hero Main Screen */}
            <Hero onEnter={() => {
              const eventsSec = document.getElementById('events-section');
              if (eventsSec) {
                eventsSec.scrollIntoView({ behavior: 'smooth' });
              }
            }} />

            {/* Blessings Section */}
            <Blessings />

            {/* Bride & Groom Profiles */}
            <Profiles />

            {/* Events Timings & Schedules */}
            <div id="events-section">
              <Events />
            </div>

            {/* Elegant Luxury Footer */}
            <footer className="relative py-16 px-4 bg-black text-center border-t border-gold-500/20 overflow-hidden">
              {/* Background dark gold overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gold-950/10 via-black to-black opacity-80 pointer-events-none"></div>

              <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
                {/* Website Developed By Zaro Tech Section */}
                <div className="w-full max-w-2xl flex flex-col items-center">
                  {/* Code Icon */}
                  <div className="w-10 h-10 rounded-full border border-gold-500/35 flex items-center justify-center mb-5 text-gold-500 bg-gold-950/20">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                      <line x1="14" y1="4" x2="10" y2="20" />
                    </svg>
                  </div>
                  
                  <span className="text-gold-500/60 text-xs tracking-[0.25em] font-cinzel font-semibold uppercase block mb-1">
                    Website Developed By
                  </span>
                  
                  <h3 className="text-2xl font-playfair font-bold text-gold-500 text-gold-gradient mb-2">
                    Zaro Tech
                  </h3>
                  
                  <a 
                    href="mailto:contactzarotech@gmail.com" 
                    className="inline-flex items-center gap-1.5 text-xs text-gold-400/80 hover:text-gold-300 hover:underline transition-all duration-300 mb-8"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <span>contactzarotech@gmail.com</span>
                  </a>

                  {/* Developers Grid */}
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full mt-6">
                    {/* Siddhartha Card */}
                    <div className="bg-[#050505] border border-gold-500/20 p-6 rounded-2xl w-full max-w-[240px] text-center shadow-xl shadow-black/60 hover:border-gold-500/40 transition-colors">
                      <span className="text-gold-500/50 text-[10px] tracking-widest uppercase font-semibold block mb-1">
                        Developer
                      </span>
                      <h4 className="text-base font-cinzel font-bold text-gold-500 text-gold-gradient mb-4">
                        SIDDHARTHA
                      </h4>
                      <a
                        href="https://wa.me/917997793530"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-md shadow-green-500/15 hover:scale-105 active:scale-95 w-full cursor-pointer"
                      >
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-white shrink-0" xmlns="http://www.w3.org/2000/svg">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.284 1.48 4.961 1.482 5.375 0 9.75-4.333 9.75-9.65 0-2.576-1.002-5.001-2.822-6.822-1.821-1.82-4.246-2.82-6.82-2.82-5.38 0-9.754 4.335-9.754 9.652 0 1.777.478 3.518 1.385 5.062L1.83 20.25l4.817-1.096z"/>
                          <path d="M17.472 14.382c-.3-.149-1.778-.878-2.046-.975-.267-.099-.463-.149-.658.149-.195.298-.754.943-.925 1.141-.17.199-.34.223-.64.075-.3-.149-1.27-.469-2.42-1.494-.897-.8-1.502-1.787-1.678-2.088-.176-.3-.019-.462.13-.61.135-.133.3-.348.45-.522.15-.174.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.15-.658-1.586-.902-2.177-.238-.574-.479-.496-.658-.506-.17-.008-.364-.01-.559-.01-.195 0-.513.073-.78.368-.268.294-1.024 1.001-1.024 2.441 0 1.439 1.047 2.83 1.192 3.03.146.2 2.062 3.149 4.996 4.417.697.302 1.24.482 1.666.618.701.222 1.34.191 1.846.116.564-.084 1.778-.726 2.028-1.43.25-.702.25-1.306.175-1.43-.075-.124-.268-.198-.569-.348z"/>
                        </svg>
                        <span>79977 93530</span>
                      </a>
                    </div>

                    {/* Anil Card */}
                    <div className="bg-[#050505] border border-gold-500/20 p-6 rounded-2xl w-full max-w-[240px] text-center shadow-xl shadow-black/60 hover:border-gold-500/40 transition-colors">
                      <span className="text-gold-500/50 text-[10px] tracking-widest uppercase font-semibold block mb-1">
                        Developer
                      </span>
                      <h4 className="text-base font-cinzel font-bold text-gold-gradient mb-4">
                        ANIL
                      </h4>
                      <a
                        href="https://wa.me/917675957378"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-md shadow-green-500/15 hover:scale-105 active:scale-95 w-full cursor-pointer"
                      >
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-white shrink-0" xmlns="http://www.w3.org/2000/svg">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.284 1.48 4.961 1.482 5.375 0 9.75-4.333 9.75-9.65 0-2.576-1.002-5.001-2.822-6.822-1.821-1.82-4.246-2.82-6.82-2.82-5.38 0-9.754 4.335-9.754 9.652 0 1.777.478 3.518 1.385 5.062L1.83 20.25l4.817-1.096z"/>
                          <path d="M17.472 14.382c-.3-.149-1.778-.878-2.046-.975-.267-.099-.463-.149-.658.149-.195.298-.754.943-.925 1.141-.17.199-.34.223-.64.075-.3-.149-1.27-.469-2.42-1.494-.897-.8-1.502-1.787-1.678-2.088-.176-.3-.019-.462.13-.61.135-.133.3-.348.45-.522.15-.174.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.15-.658-1.586-.902-2.177-.238-.574-.479-.496-.658-.506-.17-.008-.364-.01-.559-.01-.195 0-.513.073-.78.368-.268.294-1.024 1.001-1.024 2.441 0 1.439 1.047 2.83 1.192 3.03.146.2 2.062 3.149 4.996 4.417.697.302 1.24.482 1.666.618.701.222 1.34.191 1.846.116.564-.084 1.778-.726 2.028-1.43.25-.702.25-1.306.175-1.43-.075-.124-.268-.198-.569-.348z"/>
                        </svg>
                        <span>76759 57378</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Footer Copyright credits */}
                <div className="text-[10px] tracking-[0.2em] text-gold-500/30 mt-12 font-mono uppercase">
                  © 2026 ZARO TECH. ALL RIGHTS RESERVED.
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
