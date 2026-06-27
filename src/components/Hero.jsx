import React from 'react';
import { motion } from 'framer-motion';

export default function Hero({ onEnter }) {
  // Generate random petals for the floating/falling effect
  const petals = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 8,
    duration: 6 + Math.random() * 6,
    size: 10 + Math.random() * 15,
    rotation: Math.random() * 360,
  }));

  return (
    <section className="relative h-screen w-full flex flex-col justify-between items-center text-center overflow-hidden py-16 px-4">
      {/* Background Image with Dark Vignette Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-105 transition-transform duration-[10000ms]"
        style={{ backgroundImage: `url('/wedding_bg_premium.png')` }}
      />
      
      {/* Gold Dust / Petal Shower Overlay */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {petals.map((petal) => (
          <motion.div
            key={petal.id}
            className="absolute bg-gradient-to-br from-gold-300 via-turmeric-400 to-gold-600 rounded-full opacity-60"
            style={{
              left: petal.left,
              width: petal.size,
              height: petal.size,
              top: '-20px',
              borderRadius: '50% 0 50% 50%', // Petal shape
            }}
            animate={{
              y: '105vh',
              x: ['0px', `${(Math.random() - 0.5) * 150}px`, '0px'],
              rotate: petal.rotation + 360,
            }}
            transition={{
              duration: petal.duration,
              repeat: Infinity,
              delay: petal.delay,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Traditional Mango Leaves Garland (Toran) hanging at the top */}
      <div className="absolute top-0 left-0 w-full z-20 pointer-events-none opacity-90 hidden sm:block">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,10 C20,35 60,35 80,10 C100,35 140,35 160,10 C180,35 220,35 240,10 C260,35 300,35 320,10 C340,35 380,35 400,10 C420,35 460,35 480,10 C500,35 540,35 560,10 C580,35 620,35 640,10 C660,35 700,35 720,10 C740,35 780,35 800,10 C820,35 860,35 880,10 C900,35 940,35 960,10 C980,35 1020,35 1040,10 C1060,35 1100,35 1120,10 C1140,35 1180,35 1200,10 C1220,35 1260,35 1280,10 C1300,35 1340,35 1360,10 C1380,35 1420,35 1440,10" stroke="#df9c10" strokeWidth="2.5" />
          {/* Mango Leaves Hanging down */}
          {Array.from({ length: 18 }).map((_, i) => (
            <path
              key={i}
              d={`M ${i * 80 + 40} 22 C ${i * 80 + 30} 55 ${i * 80 + 35} 75 ${i * 80 + 40} 85 C ${i * 80 + 45} 75 ${i * 80 + 50} 55 ${i * 80 + 40} 22 Z`}
              fill="#563c13"
              stroke="#b48c23"
              strokeWidth="1"
            />
          ))}
          {/* Marigold flowers hanging in between */}
          {Array.from({ length: 19 }).map((_, i) => (
            <circle
              key={i}
              cx={i * 80}
              cy="10"
              r="7"
              fill="#ff9f1c"
              stroke="#df9c10"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      {/* Top Header Blessing */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="z-20 mt-12 sm:mt-16"
      >
        <span className="text-gold-200 text-xs sm:text-sm tracking-[0.25em] uppercase font-cinzel font-semibold">
          || శ్రీరామ ప్రసన్న ||
        </span>
      </motion.div>

      {/* Central Couple & Invitation Text */}
      <div className="z-20 flex flex-col items-center justify-center flex-grow max-w-4xl px-4">
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="text-gold-300 font-cinzel text-lg sm:text-2xl tracking-[0.2em] mb-4"
        >
          చిలకపాటి వారి పెండ్లి పిలుపు
        </motion.p>
        
        {/* Telugu Script Wedding Announcement */}
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="text-[#fffdf6]/90 text-sm sm:text-lg mb-6 max-w-xl font-light leading-relaxed italic"
        >
          Chilakapati Family Cordially Invites You to the Wedding Ceremony of
        </motion.p>

        {/* Big Couple Names */}
        <div className="flex flex-col md:flex-row items-center gap-1 md:gap-6 my-4 select-none">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 1.2 }}
            className="text-5xl sm:text-7xl md:text-8xl font-playfair font-bold text-gold-500 text-gold-gradient tracking-wide"
          >
            BHARGAV
          </motion.h1>
          
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 1.5 }}
            className="font-vibes text-4xl sm:text-6xl text-gold-300 my-2 font-medium"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            weds
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 1.2 }}
            className="text-5xl sm:text-7xl md:text-8xl font-playfair font-bold text-gold-500 text-gold-gradient tracking-wide"
          >
            CHANDANA
          </motion.h1>
        </div>

        {/* Telugu Names */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.7 }}
          className="text-xl sm:text-2xl text-gold-200/90 font-medium mb-8 flex items-center gap-3"
        >
          <span>చి॥ భార్గవ్</span>
          <span className="text-sm opacity-60 font-light">మరియు</span>
          <span>చి॥ సౌ॥ చందన</span>
        </motion.div>

        {/* Date and Location Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.9 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-12 h-[1px] bg-gold-400"></div>
          <p className="text-gold-100 font-cinzel text-lg sm:text-xl tracking-[0.15em] font-semibold">
            WEDNESDAY, JULY 8, 2026
          </p>
          <p className="text-gold-300/80 text-xs sm:text-sm tracking-wider uppercase">
            Babu Function Hall, Y.S.R. Nagar, Nellore
          </p>
          <div className="w-12 h-[1px] bg-gold-400"></div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="z-20 cursor-pointer flex flex-col items-center gap-2 mt-4"
        onClick={onEnter}
      >
        <span className="text-gold-300/70 text-xs tracking-[0.2em] uppercase font-light">
          Scroll to invite
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 border border-gold-500/50 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-gold-400 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
