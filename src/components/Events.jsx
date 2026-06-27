import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';

export default function Events() {
  const weddingDate = new Date('2026-07-08T06:40:00+05:30'); // Sumuhurtham IST

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +weddingDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const eventList = [
    {
      title: 'Gandhapu Nalugu',
      titleTel: 'గంధపు నలుగు',
      date: 'Tuesday, July 7, 2026',
      time: '9:00 AM onwards',
      venue: "Groom's Residence, Manjulamma Colony, Y.S.R. Nagar, Nursery, Nellore.",
      mapUrl: 'https://maps.app.goo.gl/pPjQ6KKXdtyLUuvu7',
      calUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Ganapathi+Nalugu+-+Bhargav+%26+Chandana&dates=20260707T033000Z/20260707T053000Z&details=Auspicious+Nalugu+Ceremony+at+the+Bridegroom+Residence&location=Manjulamma+Colony,+Y.S.R.+Nagar,+Nellore',
      description: 'The traditional starting ceremony of the wedding, cleansing and preparing the groom with turmeric, sandalwood paste, and blessings.',
      image: '/nalugu_ritual.png'
    },
    {
      title: 'Reception & Feast',
      titleTel: 'రిసెప్షన్ & విందు',
      date: 'Tuesday, July 7, 2026',
      time: '6:00 PM (Dinner: 8:00 PM)',
      venue: 'Babu Function Hall, Y.S.R. Nagar Cross Road, Nellore.',
      mapUrl: 'https://maps.app.goo.gl/HGKnDXdkyvn3s5xw9',
      calUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Reception+-+Bhargav+%26+Chandana&dates=20260707T123000Z/20260707T163000Z&details=Celebrate+the+union+at+the+grand+wedding+reception+and+enjoy+a+traditional+feast&location=Babu+Function+Hall,+Y.S.R.+Nagar,+Nellore',
      description: 'Join us for a grand evening of celebrations, music, wishes, followed by a royal wedding dinner feast.',
      image: '/reception_decor.png'
    },
    {
      title: 'The Wedding (Muhurtham)',
      titleTel: 'వివాహము (సుముహూర్తం)',
      date: 'Wednesday, July 8, 2026',
      time: '6:10 AM to 8:22 AM',
      sumuhurtham: 'Morning 6:40 AM to 6:45 AM',
      astro: 'Revathi Nakshatra, Karkataka Lagna, Pushkaramsha',
      venue: 'Kalyana Vedika: Babu Function Hall, Y.S.R. Nagar Cross Road, Nellore.',
      mapUrl: 'https://maps.app.goo.gl/HGKnDXdkyvn3s5xw9',
      calUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Auspicious+Muhurtham+-+Bhargav+weds+Chandana&dates=20260708T004000Z/20260708T025200Z&details=The+sacred+wedding+ceremony+under+Revathi+Nakshatra+and+Karkataka+Lagna&location=Babu+Function+Hall,+Y.S.R.+Nagar,+Nellore',
      description: 'The holy wedding ceremony where the couple ties the Mangalsutra (Jeelakarra Bellam & Talambraalu) under traditional Vedic chants.',
      image: '/wedding_muhurtham.png'
    }
  ];

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-[#2b0c10] via-[#42141a] to-[#2b0c10] overflow-hidden text-[#fffdf6]">
      {/* Decorative floral element */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-15 pointer-events-none text-gold-400">
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
          <path d="M100,0 Q60,20 60,60 Q20,60 0,100" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Highlighted Countdown Timer Widget */}
        <div className="flex flex-col items-center mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block border-y border-gold-500/40 py-2 px-8 bg-gold-950/30 text-gold-300 text-xs sm:text-sm tracking-[0.25em] font-cinzel font-bold mb-6 rounded-sm shadow-md"
          >
            COUNTING DOWN TO THE CELEBRATION
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grid grid-cols-4 gap-3 sm:gap-6 max-w-lg w-full px-2"
          >
            {Object.keys(timeLeft).map((interval) => (
              <div 
                key={interval} 
                className="flex flex-col items-center justify-center aspect-square sm:aspect-auto sm:py-5 rounded-2xl bg-gradient-to-b from-maroon-900/90 to-maroon-950/95 border-2 border-gold-500/40 shadow-lg shadow-black/50 relative overflow-hidden group hover:border-gold-400 hover:shadow-[0_0_20px_rgba(212,175,55,0.25)] transition-all duration-300"
              >
                {/* Subtle shine overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <span className="text-3xl sm:text-4xl md:text-5xl font-playfair font-extrabold text-gold-400 text-gold-gradient tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  {String(timeLeft[interval]).padStart(2, '0')}
                </span>
                
                <span className="text-[9px] sm:text-xs text-turmeric-400 font-bold tracking-widest uppercase mt-1 sm:mt-2">
                  {interval}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-400 text-sm tracking-[0.2em] font-cinzel font-semibold block mb-2">
            THE WEDDING SCHEDULE
          </span>
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gold-500 text-gold-gradient">
            శుభకార్యముల పట్టిక
          </h2>
          <div className="w-16 h-[1.5px] bg-gold-500/40 mx-auto mt-4"></div>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-12">
          {eventList.map((evt, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1, delay: idx * 0.2 }}
              className={`flex flex-col md:flex-row gap-6 md:gap-8 items-stretch ${
                idx % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Event Visual Card */}
              <div className="md:w-1/2 flex">
                <div className="glass-maroon w-full p-8 rounded-3xl border border-gold-500/20 relative flex flex-col justify-between overflow-hidden shadow-lg group hover:border-gold-500/50 transition-all duration-300">
                  {/* Decorative corner borders */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold-500/45"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold-500/45"></div>
                  
                  <div>
                    {/* Header */}
                    <div className="flex justify-between items-start gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-playfair font-bold text-gold-500 text-gold-gradient">
                          {evt.title}
                        </h3>
                        <p className="text-sm font-serif text-gold-300/80 mt-1">{evt.titleTel}</p>
                      </div>
                      
                      {/* Auspicious Badge */}
                      {evt.sumuhurtham && (
                        <span className="bg-gold-500/10 text-gold-400 border border-gold-400/35 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider animate-pulse whitespace-nowrap">
                          Muhurtham 🪔
                        </span>
                      )}
                    </div>

                    {/* Meta Details */}
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2.5 text-gold-100 text-sm">
                        <Calendar className="w-4.5 h-4.5 text-gold-400 shrink-0" />
                        <span>{evt.date}</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-gold-100 text-sm">
                        <Clock className="w-4.5 h-4.5 text-gold-400 shrink-0" />
                        <span className="font-semibold">{evt.time}</span>
                      </div>
                      
                      {/* Specific Auspicious Sumuhurtham Details */}
                      {evt.sumuhurtham && (
                        <div className="bg-maroon-900/60 p-3.5 rounded-xl border border-gold-500/10 mt-3 text-xs sm:text-sm space-y-1">
                          <p className="text-gold-400 font-semibold">
                            సుముహూర్తం: <span className="text-gold-200">{evt.sumuhurtham}</span>
                          </p>
                          <p className="text-gold-300/70 italic text-[11px] sm:text-xs">
                            Lagna: {evt.astro}
                          </p>
                        </div>
                      )}

                      <div className="flex items-start gap-2.5 text-[#fffdf6]/85 text-sm pt-2">
                        <MapPin className="w-4.5 h-4.5 text-gold-400 shrink-0 mt-0.5" />
                        <span>{evt.venue}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[#fffdf6]/70 text-xs sm:text-sm leading-relaxed mb-6 italic">
                    {evt.description}
                  </p>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={evt.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm bg-gold-600 hover:bg-gold-500 text-maroon-950 px-4 py-2 rounded-full font-semibold transition-all duration-300 shadow-md shadow-black/20 hover:scale-105 active:scale-95"
                    >
                      <MapPin className="w-4 h-4" />
                      <span>View Venue Maps</span>
                    </a>
                    
                    <a
                      href={evt.calUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm border border-gold-500/30 hover:border-gold-500/75 hover:bg-gold-500/5 text-gold-300 px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Add to Calendar</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Event Decoration Card */}
              <div className="md:w-1/2 flex items-center justify-center relative">
                {/* Circular Image Container with Gold Border */}
                <div className="w-full max-w-xs md:max-w-md aspect-square rounded-full border-2 border-gold-500/35 relative overflow-hidden group shadow-2xl shadow-black/65 flex items-center justify-center">
                  {/* Background Image of the Event */}
                  <img 
                    src={evt.image} 
                    alt={evt.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Dark Gradient Overlay for text readability on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 via-maroon-950/40 to-maroon-950/80 transition-opacity duration-300 opacity-60 group-hover:opacity-85"></div>
                  
                  {/* Decorative rotating gold mandala line art overlaid on top */}
                  <svg
                    viewBox="0 0 100 100"
                    className="absolute w-11/12 h-11/12 text-gold-500/40 group-hover:text-gold-500/70 transition-all duration-700 fill-current animate-spin-reverse-slow z-10 pointer-events-none"
                  >
                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                    <circle cx="50" cy="50" r="41" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    {Array.from({ length: 24 }).map((_, i) => (
                      <path
                        key={i}
                        d="M 50 50 C 43 30 57 30 50 10 C 43 30 57 30 50 50"
                        transform={`rotate(${i * 15} 50 50)`}
                      />
                    ))}
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
