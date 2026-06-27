import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Users, CheckCircle2, MessageSquare, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RSVP() {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('attending');
  const [guests, setGuests] = useState('1');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [wishes, setWishes] = useState([]);

  // Prepopulated traditional wishes so the guestbook starts beautiful
  const defaultWishes = [
    {
      id: 1,
      name: 'Pathamalluru Prasad & Ramadevi',
      status: 'attending',
      guests: 2,
      message: 'Congratulations Bhargav & Chandana! Wishing you both a lifetime of happiness, understanding, and divine blessings. Looking forward to celebrating this beautiful union with you.',
      date: 'June 26, 2026'
    },
    {
      id: 2,
      name: 'Chilakapati Brothers',
      status: 'attending',
      guests: 4,
      message: 'Welcome to the family, Chandana! Extremely thrilled for Bhargav and you. May your wedding day be the start of a wonderful journey filled with love.',
      date: 'June 25, 2026'
    },
    {
      id: 3,
      name: 'Suresh Kumar & Family',
      status: 'attending',
      guests: 3,
      message: 'హృదయపూర్వక వివాహ శుభాకాంక్షలు! (Hearty wedding wishes!) May Lord Sri Venkateswara bless the couple with good health and infinite prosperity.',
      date: 'June 24, 2026'
    }
  ];

  useEffect(() => {
    const storedWishes = localStorage.getItem('wedding_wishes');
    if (storedWishes) {
      setWishes(JSON.parse(storedWishes));
    } else {
      setWishes(defaultWishes);
      localStorage.setItem('wedding_wishes', JSON.stringify(defaultWishes));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newWish = {
      id: Date.now(),
      name: name.trim(),
      status,
      guests: status === 'attending' ? parseInt(guests) : 0,
      message: message.trim() || 'Wishing you both a wonderful wedding and a happy married life ahead!',
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      })
    };

    const updatedWishes = [newWish, ...wishes];
    setWishes(updatedWishes);
    localStorage.setItem('wedding_wishes', JSON.stringify(updatedWishes));
    setIsSubmitted(true);

    // Fire premium gold-themed confetti shower
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#d4af37', '#b48c23', '#fffdf6', '#ff9f1c', '#7a2d3b']
    });

    // Reset form after a delay
    setTimeout(() => {
      setName('');
      setMessage('');
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <section className="relative py-24 px-4 bg-maroon-950 bg-mandala-overlay text-[#fffdf6] overflow-hidden">
      {/* Decorative divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-400 text-sm tracking-[0.2em] font-cinzel font-semibold block mb-2">
            JOIN OUR CELEBRATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gold-500 text-gold-gradient">
            పెండ్లి పిలుపు - ఆశీస్సులు
          </h2>
          <p className="text-xs text-gold-200/50 uppercase tracking-widest mt-1">
            RSVP &amp; Blessings Registry
          </p>
          <div className="w-16 h-[1.5px] bg-gold-500/40 mx-auto mt-4"></div>
        </div>

        {/* Dual Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: RSVP Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 glass-maroon p-8 rounded-3xl border border-gold-500/20 relative gold-card-border"
          >
            <h3 className="text-xl font-cinzel text-gold-400 font-semibold mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-gold-500" />
              <span>Confirm Your Presence</span>
            </h3>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="rsvp-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5"
                >
                  {/* Name Input */}
                  <div>
                    <label htmlFor="guest-name" className="block text-xs uppercase tracking-widest text-gold-300 mb-2">
                      Your Name / కుటుంబ సభ్యుల పేరు *
                    </label>
                    <input
                      id="guest-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full bg-maroon-900/60 border border-gold-500/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500/60 transition-colors placeholder-gold-300/30 text-[#fffdf6]"
                    />
                  </div>

                  {/* Attendance Switch */}
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gold-300 mb-2">
                      Attendance / విచ్చేయుచున్నారా?
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setStatus('attending')}
                        className={`py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                          status === 'attending'
                            ? 'bg-gold-600 border-gold-400 text-maroon-950 shadow-md shadow-gold-500/10'
                            : 'bg-maroon-900/40 border-gold-500/10 hover:border-gold-500/30 text-gold-300'
                        }`}
                      >
                        Yes, Attending
                      </button>
                      <button
                        type="button"
                        onClick={() => setStatus('not_attending')}
                        className={`py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                          status === 'not_attending'
                            ? 'bg-gold-600 border-gold-400 text-maroon-950 shadow-md shadow-gold-500/10'
                            : 'bg-maroon-900/40 border-gold-500/10 hover:border-gold-500/30 text-gold-300'
                        }`}
                      >
                        Regret, Cannot Come
                      </button>
                    </div>
                  </div>

                  {/* Guest Count (Conditional) */}
                  {status === 'attending' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <label htmlFor="guest-count" className="block text-xs uppercase tracking-widest text-gold-300 mb-2 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" />
                        <span>Number of Guests / అతిథుల సంఖ్య</span>
                      </label>
                      <select
                        id="guest-count"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="w-full bg-maroon-900/60 border border-gold-500/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500/60 transition-colors text-gold-200"
                      >
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <option key={num} value={num} className="bg-maroon-950 text-gold-200">
                            {num} {num === 1 ? 'Person' : 'People'}
                          </option>
                        ))}
                      </select>
                    </motion.div>
                  )}

                  {/* Blessings Message */}
                  <div>
                    <label htmlFor="guest-message" className="block text-xs uppercase tracking-widest text-gold-300 mb-2 flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Send Wishes / నూతన దంపతులకు ఆశీస్సులు</span>
                    </label>
                    <textarea
                      id="guest-message"
                      rows="4"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your blessings and congratulations..."
                      className="w-full bg-maroon-900/60 border border-gold-500/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500/60 transition-colors placeholder-gold-300/30 text-[#fffdf6] resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-600 to-gold-500 text-maroon-950 font-bold py-3.5 rounded-xl text-sm transition-all duration-300 shadow-lg shadow-black/20 hover:scale-[1.02] active:scale-95 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Blessings</span>
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="submitted-state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 bg-gold-500/10 rounded-full border border-gold-500/40 flex items-center justify-center text-gold-400 mb-6 animate-bounce">
                    <Heart className="w-8 h-8 fill-current" />
                  </div>
                  <h4 className="text-xl font-cinzel font-bold text-gold-500 mb-2">Wishes Sent!</h4>
                  <p className="text-sm text-[#fffdf6]/85 max-w-xs">
                    Thank you so much for your blessings and RSVP. Your wishes have been added to the guestbook board!
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right: Guest Wishes Board (Scrollable list) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 flex flex-col h-full self-stretch"
          >
            <div className="glass-maroon p-6 sm:p-8 rounded-3xl border border-gold-500/20 relative flex flex-col h-full max-h-[560px] overflow-hidden">
              <h3 className="text-xl font-cinzel text-gold-400 font-semibold mb-6 flex items-center gap-2">
                <Heart className="w-5 h-5 text-gold-500" />
                <span>Wedding Guestbook &amp; Wishes</span>
              </h3>

              {/* Scrolling List container */}
              <div className="flex-1 overflow-y-auto pr-2 space-y-4 max-h-[440px] custom-scrollbar scroll-smooth">
                {wishes.map((wish) => (
                  <div
                    key={wish.id}
                    className="bg-maroon-900/40 border border-gold-500/10 rounded-2xl p-5 relative group hover:border-gold-500/25 transition-all duration-300"
                  >
                    {/* Timestamp */}
                    <span className="absolute top-4 right-5 text-[10px] text-gold-300/40 uppercase tracking-widest font-mono">
                      {wish.date}
                    </span>

                    {/* Author Profile Details */}
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className="w-7 h-7 bg-gold-950/60 border border-gold-500/30 rounded-full flex items-center justify-center text-[11px] font-bold text-gold-400">
                        {wish.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gold-200">
                          {wish.name}
                        </h4>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            wish.status === 'attending' ? 'bg-green-500' : 'bg-gold-600'
                          }`}></span>
                          <span className="text-[10px] text-gold-300/60 font-medium uppercase tracking-wider">
                            {wish.status === 'attending' 
                              ? `Attending (${wish.guests} ${wish.guests === 1 ? 'guest' : 'guests'})`
                              : 'Sending Blessings'
                            }
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Message Box */}
                    <p className="text-[#fffdf6]/80 text-xs sm:text-sm leading-relaxed italic">
                      "{wish.message}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
