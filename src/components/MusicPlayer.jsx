import React, { useEffect, useRef, useState } from 'react';

export default function MusicPlayer({ isPlaying, setIsPlaying }) {
  const audioRef = useRef(null);
  const [audioUrl] = useState('/music/MP3.mp3');

  // Handle Play/Pause based on global isPlaying state (Invitation opened)
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((err) => {
          console.log("Autoplay blocked by browser. Waiting for interaction:", err);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  // Handle automatic pause when navigating away (Google Maps, WhatsApp, switching tabs)
  // and resume when returning to the site.
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Tab is hidden (user went to Maps, WhatsApp, or changed tab)
        if (audioRef.current) {
          audioRef.current.pause();
        }
      } else {
        // Tab is visible again, resume if invitation was opened (isPlaying is true)
        if (isPlaying && audioRef.current) {
          audioRef.current.play().catch((err) => {
            console.log("Error resuming audio on tab focus:", err);
          });
        }
      }
    };

    const handleWindowBlur = () => {
      // User clicked external link (like Maps or Share) and window lost focus
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };

    const handleWindowFocus = () => {
      // User returned to window
      if (isPlaying && audioRef.current) {
        audioRef.current.play().catch((err) => {
          console.log("Error resuming audio on window focus:", err);
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleWindowBlur);
    window.addEventListener('focus', handleWindowFocus);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleWindowBlur);
      window.removeEventListener('focus', handleWindowFocus);
    };
  }, [isPlaying]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Audio element */}
      <audio
        ref={audioRef}
        src={audioUrl}
        loop
        className="hide-audio"
      />

      {/* Floating BGM active indicator card (without manual pause/play toggle button) */}
      <div className="flex items-center gap-3 bg-maroon-950/85 backdrop-blur-md px-4 py-2 rounded-full border border-gold-500/30 shadow-lg shadow-black/40 hover:border-gold-500/60 transition-all duration-300 select-none">
        {/* Animated equalizer bars (playing only) */}
        {isPlaying && (
          <div className="flex items-end gap-[2px] h-4 px-1">
            <span className="w-[3px] bg-gold-400 rounded-full animate-bounce [animation-duration:1.2s]"></span>
            <span className="w-[3px] bg-gold-400 rounded-full animate-bounce [animation-duration:0.8s] delay-100"></span>
            <span className="w-[3px] bg-gold-400 rounded-full animate-bounce [animation-duration:1.5s] delay-300"></span>
            <span className="w-[3px] bg-gold-400 rounded-full animate-bounce [animation-duration:1s] delay-200"></span>
          </div>
        )}

        {/* Spin disk mandala decoration BGM active indicator */}
        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gold-500/40 bg-maroon-900">
          <svg
            viewBox="0 0 100 100"
            className={`w-full h-full text-gold-500/80 fill-current p-1 ${
              isPlaying ? 'animate-spin-slow' : ''
            }`}
          >
            {/* Traditional Mandala Design */}
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="50" cy="50" r="10" fill="currentColor" opacity="0.3" />
            <circle cx="50" cy="50" r="4" />
            {Array.from({ length: 12 }).map((_, i) => (
              <path
                key={i}
                d="M 50 50 L 50 15 A 8 8 0 0 1 58 25 Z"
                transform={`rotate(${i * 30} 50 50)`}
                opacity="0.6"
              />
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}
