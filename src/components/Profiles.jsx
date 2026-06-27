import React from 'react';
import { motion } from 'framer-motion';

export default function Profiles() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  return (
    <section className="relative py-24 px-4 bg-maroon-950 bg-mandala-overlay text-[#fffdf6] overflow-hidden">
      {/* Decorative Golden Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-gold-400 text-sm tracking-[0.2em] font-cinzel font-semibold block mb-2">
            INTRODUCING THE BRIDE & GROOM
          </span>
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gold-500 text-gold-gradient">
            వధూవరుల పరిచయం
          </h2>
          <div className="w-16 h-[1.5px] bg-gold-500/40 mx-auto mt-4"></div>
        </div>

        {/* Profiles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-12 lg:gap-16 px-4"
        >
          {/* Groom Card */}
          <motion.div
            variants={cardVariants}
            className="glass-maroon p-8 sm:p-12 rounded-3xl relative text-center gold-card-border overflow-hidden group hover:shadow-2xl hover:shadow-black/50 transition-all duration-500"
          >
            {/* Top background ornament */}
            <div className="absolute top-0 right-0 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity duration-500 text-gold-500">
              <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
                <path d="M100,0 C80,20 80,60 100,100 M100,0 C60,20 20,20 0,0" />
              </svg>
            </div>

            {/* Premium Groom Cartoon Avatar */}
            <div className="w-28 h-28 mx-auto mb-8 rounded-full border-2 border-gold-500/40 p-1 bg-maroon-900/60 shadow-lg shadow-black/40 overflow-hidden select-none flex items-center justify-center">
              <img 
                src="/groom_avatar.png" 
                alt="Groom Avatar" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <span className="text-gold-300 text-xs sm:text-sm tracking-widest uppercase font-cinzel font-semibold">
              Groom • వరుడు
            </span>
            
            <h3 className="text-3xl sm:text-4xl font-playfair font-bold text-gold-500 text-gold-gradient mt-2 mb-1">
              Chi. Bhargav
            </h3>
            <p className="text-gold-200/80 text-xl font-medium mb-6 font-serif">చి॥ భార్గవ్</p>

            <div className="w-12 h-[1px] bg-gold-500/25 mx-auto mb-6"></div>

            {/* Lineage Info */}
            <div className="space-y-4 text-[#fffdf6]/90">
              <div>
                <p className="text-xs uppercase tracking-widest text-gold-300/60 mb-1">Parents • తల్లిదండ్రులు</p>
                <p className="text-lg font-medium">Sri Chilakapati Venkataiah</p>
                <p className="text-lg font-medium">&amp; Srimathi Pullamma</p>
                <p className="text-sm text-gold-200/70 mt-1 font-serif">శ్రీ చిలకపాటి వెంకటయ్య - శ్రీమతి పుల్లమ్మ</p>
              </div>

              <div className="pt-2">
                <p className="text-xs uppercase tracking-widest text-gold-300/60 mb-1">Family Details • కుటుంబము</p>
                <p className="text-sm sm:text-base leading-relaxed">
                  Second Son of the Chilakapati Family.<br />
                  Residents of Manjulamma Colony, Y.S.R. Nagar, Nellore.
                </p>
                <p className="text-xs text-gold-200/50 mt-1 font-serif">
                  మంజులమ్మ కాలనీ, వై.యస్.ఆర్. నగర్, నెల్లూరు
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bride Card */}
          <motion.div
            variants={cardVariants}
            className="glass-maroon p-8 sm:p-12 rounded-3xl relative text-center gold-card-border overflow-hidden group hover:shadow-2xl hover:shadow-black/50 transition-all duration-500"
          >
            {/* Top background ornament */}
            <div className="absolute top-0 left-0 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity duration-500 text-gold-500 scale-x-[-1]">
              <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
                <path d="M100,0 C80,20 80,60 100,100 M100,0 C60,20 20,20 0,0" />
              </svg>
            </div>

            {/* Premium Bride Cartoon Avatar */}
            <div className="w-28 h-28 mx-auto mb-8 rounded-full border-2 border-gold-500/40 p-1 bg-maroon-900/60 shadow-lg shadow-black/40 overflow-hidden select-none flex items-center justify-center">
              <img 
                src="/bride_avatar.png" 
                alt="Bride Avatar" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <span className="text-gold-300 text-xs sm:text-sm tracking-widest uppercase font-cinzel font-semibold">
              Bride • వధువు
            </span>

            <h3 className="text-3xl sm:text-4xl font-playfair font-bold text-gold-500 text-gold-gradient mt-2 mb-1">
              Chi. Sau. Chandana
            </h3>
            <p className="text-gold-200/80 text-xl font-medium mb-6 font-serif">చి॥ సౌ॥ చందన</p>

            <div className="w-12 h-[1px] bg-gold-500/25 mx-auto mb-6"></div>

            {/* Lineage Info */}
            <div className="space-y-4 text-[#fffdf6]/90">
              <div>
                <p className="text-xs uppercase tracking-widest text-gold-300/60 mb-1">Parents • తల్లిదండ్రులు</p>
                <p className="text-lg font-medium">Sri Thummapuri Ravikumar</p>
                <p className="text-lg font-medium">&amp; Srimathi Anuradha</p>
                <p className="text-sm text-gold-200/70 mt-1 font-serif">శ్రీ తుమ్మపూరి రవికుమార్ - శ్రీమతి అనురాధ గార్లు</p>
              </div>

              <div className="pt-2">
                <p className="text-xs uppercase tracking-widest text-gold-300/60 mb-1">Family Details • కుటుంబము</p>
                <p className="text-sm sm:text-base leading-relaxed">
                  Eldest Daughter of the Yammaprasad Family.<br />
                  Residents of Kanuparthipadu Village, Nellore Rural Mandal.
                </p>
                <p className="text-xs text-gold-200/50 mt-1 font-serif">
                  కనుపర్తిపాడు గ్రామ వాస్తవ్యులు, నెల్లూరు రూరల్ మండలం
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
