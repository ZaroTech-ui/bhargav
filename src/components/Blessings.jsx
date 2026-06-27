import React from 'react';
import { motion } from 'framer-motion';

export default function Blessings() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-[#2b0c10] via-[#3a1117] to-[#2b0c10] flex flex-col items-center justify-center overflow-hidden">
      {/* Decorative background mandala */}
      <div className="absolute opacity-5 pointer-events-none w-[500px] h-[500px] text-gold-500">
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" />
          {Array.from({ length: 24 }).map((_, i) => (
            <path
              key={i}
              d="M 50 50 C 40 20 60 20 50 0 C 40 20 60 20 50 50"
              transform={`rotate(${i * 15} 50 50)`}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center relative z-10">
        {/* Lord Ganesha Premium Tanjore Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="w-28 h-28 mb-6 rounded-full border-2 border-gold-500/40 p-1 bg-maroon-900/60 shadow-lg shadow-black/40 overflow-hidden select-none flex items-center justify-center"
        >
          <img 
            src="/vinayaka_blessings.png" 
            alt="Lord Vinayaka" 
            className="w-full h-full object-cover rounded-full"
          />
        </motion.div>

        {/* Sacred Auspicious Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-2xl sm:text-3xl text-gold-500 font-cinzel tracking-widest mb-6 text-gold-gradient"
        >
          శ్రీరస్తు ! శుభమస్తు ! కల్యాణమస్తు !
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-gold-200/60 text-xs sm:text-sm uppercase tracking-wider mb-8"
        >
          Shree Rastu • Shubhamastu • Kalyanamastu
        </motion.p>

        {/* Sloka Block - Centered without flanking oil lamps */}
        <div className="flex items-center justify-center w-full max-w-2xl px-4 my-6">
          {/* Sanskrit Sloka */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="flex-1 glass-maroon p-6 sm:p-8 rounded-2xl border border-gold-500/20 shadow-xl shadow-black/30 relative"
          >
            {/* Decorative corners */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-gold-500/40"></div>
            <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-gold-500/40"></div>
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-gold-500/40"></div>
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-gold-500/40"></div>

            <p className="text-gold-100 font-medium text-base sm:text-lg leading-loose mb-6 font-playfair italic">
              "శ్రీరామమృదుల కీర్తిసమిత: సమస్త కల్యాణ గుణాభిరామ:।<br/>
              హేమాంభోజకళా విలాసిని సమేతః విఘ్నేశ్వరో మంగళమాతనోతు॥"
            </p>
            <div className="w-16 h-[1px] bg-gold-500/30 mx-auto mb-4"></div>
            <p className="text-[#fffdf6]/80 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
              May the Lord Ganesha, along with the divine assembly of virtues and prosperity, bless this holy matrimony with eternal joy and auspiciousness.
            </p>
          </motion.div>
        </div>

        {/* Large, Colorful Sri Venkateswara Swamy Symbol (Shanku, Chakra & Namam) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-16 w-80 sm:w-96 h-28 sm:h-32 flex items-center justify-center select-none"
        >
          <svg viewBox="0 0 320 120" className="w-full h-full filter drop-shadow-[0_6px_20px_rgba(212,175,55,0.3)]">
            <defs>
              <linearGradient id="goldPeetham" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#fff8db" />
                <stop offset="30%" stopColor="#ffd700" />
                <stop offset="70%" stopColor="#df9c10" />
                <stop offset="100%" stopColor="#9a6b05" />
              </linearGradient>
              <linearGradient id="vibrantRed" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ff3b60" />
                <stop offset="100%" stopColor="#d5002b" />
              </linearGradient>
              <linearGradient id="pureWhite" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#eaeaea" />
              </linearGradient>
            </defs>

            {/* ==================== LEFT: CHAKRA (DISCUS) ==================== */}
            <g transform="translate(5, 5)">
              {/* Pedestal / Peetham (Gold) */}
              {/* Lotus petals base */}
              <path d="M 12 104 C 12 104 8 98 22 98 C 36 98 40 102 50 102 C 60 102 64 98 78 98 C 92 98 88 104 88 104 Z" fill="url(#goldPeetham)" stroke="#2b0c10" strokeWidth="0.5" />
              {/* Middle Ribbed Section */}
              <rect x="20" y="88" width="60" height="10" rx="1" fill="url(#goldPeetham)" stroke="#2b0c10" strokeWidth="0.5" />
              {/* Rib teeth lines */}
              {Array.from({ length: 9 }).map((_, i) => (
                <line key={i} x1={26 + i * 6} y1="88" x2={26 + i * 6} y2="98" stroke="#2b0c10" strokeWidth="1" />
              ))}
              {/* Top Slab */}
              <polygon points="22,88 28,78 72,78 78,88" fill="url(#goldPeetham)" stroke="#2b0c10" strokeWidth="0.5" />

              {/* Side Ribbon Wraps (Vibrant Red with Gold edges) */}
              {/* Left Ribbon */}
              <path d="M 28 45 C 14 45 10 32 12 25 C 15 18 24 22 25 35 C 26 48 10 65 24 65" fill="url(#vibrantRed)" stroke="#ffd700" strokeWidth="1" />
              <path d="M 12 25 C 8 32 6 42 16 48" fill="none" stroke="#ffd700" strokeWidth="0.8" />
              {/* Right Ribbon */}
              <path d="M 72 45 C 86 45 90 32 88 25 C 85 18 76 22 75 35 C 74 48 90 65 76 65" fill="url(#vibrantRed)" stroke="#ffd700" strokeWidth="1" />
              <path d="M 88 25 C 92 32 94 42 84 48" fill="none" stroke="#ffd700" strokeWidth="0.8" />

              {/* Center Pillar */}
              <path d="M 44 78 L 56 78 L 50 48 Z" fill="url(#goldPeetham)" stroke="#2b0c10" strokeWidth="0.5" />

              {/* Discus Wheel Body (Gold and White) */}
              <circle cx="50" cy="42" r="22" fill="url(#goldPeetham)" stroke="#ffffff" strokeWidth="1.2" />
              <circle cx="50" cy="42" r="17" fill="#2b0c10" stroke="#ffd700" strokeWidth="0.8" />
              <circle cx="50" cy="42" r="12" fill="url(#goldPeetham)" />
              
              {/* Center Flower Motif */}
              <circle cx="50" cy="42" r="3.5" fill="#ffffff" />
              {Array.from({ length: 6 }).map((_, i) => {
                const angle = (i * 60 * Math.PI) / 180;
                const petX = 50 + 7 * Math.cos(angle);
                const petY = 42 + 7 * Math.sin(angle);
                return <circle key={i} cx={petX} cy={petY} r="3" fill="#ffffff" />;
              })}
              {Array.from({ length: 6 }).map((_, i) => {
                const angle = (i * 60 * Math.PI) / 180;
                const petX = 50 + 7 * Math.cos(angle);
                const petY = 42 + 7 * Math.sin(angle);
                return <circle key={i} cx={petX} cy={petY} r="1.5" fill="url(#vibrantRed)" />;
              })}

              {/* Crown/Lotus on Top (Kireetam) */}
              <path d="M 40 20 C 40 20 40 5 50 5 C 60 5 60 20 60 20 Z" fill="url(#goldPeetham)" stroke="#ffffff" strokeWidth="0.8" />
              <path d="M 42 20 C 44 14 46 8 50 8 C 54 8 56 14 58 20 Z" fill="url(#goldPeetham)" />
              <line x1="50" y1="5" x2="50" y2="20" stroke="#ffd700" strokeWidth="1.2" />
            </g>

            {/* ==================== CENTER: NAMAM ==================== */}
            <g transform="translate(110, 5)">
              {/* Pedestal / Peetham (Gold) */}
              <path d="M 12 104 C 12 104 8 98 22 98 C 36 98 40 102 50 102 C 60 102 64 98 78 98 C 92 98 88 104 88 104 Z" fill="url(#goldPeetham)" stroke="#2b0c10" strokeWidth="0.5" />
              <rect x="20" y="88" width="60" height="10" rx="1" fill="url(#goldPeetham)" stroke="#2b0c10" strokeWidth="0.5" />
              {Array.from({ length: 9 }).map((_, i) => (
                <line key={i} x1={26 + i * 6} y1="88" x2={26 + i * 6} y2="98" stroke="#2b0c10" strokeWidth="1" />
              ))}
              <polygon points="22,88 28,78 72,78 78,88" fill="url(#goldPeetham)" stroke="#2b0c10" strokeWidth="0.5" />

              {/* Center U-namam Dot Base */}
              <circle cx="50" cy="74" r="5" fill="url(#goldPeetham)" stroke="#ffffff" strokeWidth="0.5" />

              {/* Left Camphor Branch (Bright White) */}
              <path d="M 28 8 Q 40 8 42 62 L 28 62 Q 25 25 15 8 Z" fill="url(#pureWhite)" stroke="#2b0c10" strokeWidth="0.8" />
              {/* Right Camphor Branch (Bright White) */}
              <path d="M 72 8 Q 60 8 58 62 L 72 62 Q 75 25 85 8 Z" fill="url(#pureWhite)" stroke="#2b0c10" strokeWidth="0.8" />
              {/* Bottom Connection (Bright White) */}
              <path d="M 28 62 Q 50 78 72 62 L 58 62 L 42 62 Z" fill="url(#pureWhite)" />

              {/* Center Srichurnam (Vibrant Red) */}
              <path d="M 46 4 Q 54 4 52 64 Q 50 66 48 64 L 46 4 Z" fill="url(#vibrantRed)" stroke="#ffffff" strokeWidth="0.5" />
            </g>

            {/* ==================== RIGHT: SHANKU (CONCH SHELL) ==================== */}
            <g transform="translate(215, 5)">
              {/* Pedestal / Peetham (Gold) */}
              <path d="M 12 104 C 12 104 8 98 22 98 C 36 98 40 102 50 102 C 60 102 64 98 78 98 C 92 98 88 104 88 104 Z" fill="url(#goldPeetham)" stroke="#2b0c10" strokeWidth="0.5" />
              <rect x="20" y="88" width="60" height="10" rx="1" fill="url(#goldPeetham)" stroke="#2b0c10" strokeWidth="0.5" />
              {Array.from({ length: 9 }).map((_, i) => (
                <line key={i} x1={26 + i * 6} y1="88" x2={26 + i * 6} y2="98" stroke="#2b0c10" strokeWidth="1" />
              ))}
              <polygon points="22,88 28,78 72,78 78,88" fill="url(#goldPeetham)" stroke="#2b0c10" strokeWidth="0.5" />

              {/* Side Ribbon Wraps (Vibrant Red with Gold edges) */}
              {/* Left Ribbon */}
              <path d="M 28 45 C 14 45 10 32 12 25 C 15 18 24 22 25 35 C 26 48 10 65 24 65" fill="url(#vibrantRed)" stroke="#ffd700" strokeWidth="1" />
              <path d="M 12 25 C 8 32 6 42 16 48" fill="none" stroke="#ffd700" strokeWidth="0.8" />
              {/* Right Ribbon */}
              <path d="M 72 45 C 86 45 90 32 88 25 C 85 18 76 22 75 35 C 74 48 90 65 76 65" fill="url(#vibrantRed)" stroke="#ffd700" strokeWidth="1" />
              <path d="M 88 25 C 92 32 94 42 84 48" fill="none" stroke="#ffd700" strokeWidth="0.8" />

              {/* Center Pillar */}
              <path d="M 44 78 L 56 78 L 50 48 Z" fill="url(#goldPeetham)" stroke="#2b0c10" strokeWidth="0.5" />

              {/* Conch Shell Body (Shanku - White with Gold Details) */}
              {/* Tail spiral base */}
              <path d="M 38 78 Q 48 70 41 60" fill="none" stroke="url(#goldPeetham)" strokeWidth="3" />
              
              {/* Outer Shell white body */}
              <path d="M 50 22 C 32 22 22 38 22 45 C 22 58 40 68 50 72 C 60 68 78 58 78 45 C 78 38 68 22 50 22 Z" fill="url(#pureWhite)" stroke="url(#goldPeetham)" strokeWidth="1.5" />
              
              {/* Spiral lines on conch */}
              <path d="M 50 22 C 40 28 40 55 50 72" fill="none" stroke="url(#goldPeetham)" strokeWidth="2" />
              <path d="M 50 22 C 60 28 60 55 50 72" fill="none" stroke="url(#goldPeetham)" strokeWidth="1.2" />
              <path d="M 38 26 C 30 32 30 50 40 60" fill="none" stroke="url(#goldPeetham)" strokeWidth="1" />
              <path d="M 62 26 C 70 32 70 50 60 60" fill="none" stroke="url(#goldPeetham)" strokeWidth="1" />

              {/* Crown/Lotus on Top (Kireetam) */}
              <path d="M 40 22 C 40 22 40 6 50 6 C 60 6 60 22 60 22 Z" fill="url(#goldPeetham)" stroke="#ffffff" strokeWidth="0.8" />
              <path d="M 42 22 C 44 16 46 9 50 9 C 54 9 56 16 58 22 Z" fill="url(#goldPeetham)" />
              <line x1="50" y1="6" x2="50" y2="22" stroke="#ffd700" strokeWidth="1.2" />
            </g>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
