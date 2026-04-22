import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../theme/LanguageContext';
import { cn } from '../lib/utils';

export default function Hero() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="relative md:h-screen w-full overflow-hidden flex items-center aspect-square md:aspect-auto">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="relative w-full h-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center' }}
          >
            <source
              src="https://d8j0ntlcm91z4.cloudfront.net/user_3CDHrY5ze4j8298sDtHRo3EHjw1/hf_20260411_133034_43a317af-5ca7-41a7-a7ec-39f4bb625326.mp4"
              type="video/mp4"
            />
          </video>
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
          <div className="absolute inset-0 bg-black/10" />
          
          {/* Bottom Fade to Body */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg-primary)] to-transparent" />
        </div>
      </div>

      {/* Content - Repositioned and Pushed Down Further */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-56 md:pt-96">
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={cn("flex flex-col items-start gap-5 max-w-2xl", isRTL ? "items-start text-right" : "items-start")}
        >
          <h1 className="text-white font-black tracking-tighter drop-shadow-2xl uppercase leading-tight">
            <span className="text-xs md:text-sm opacity-70 block tracking-[0.2em] mb-1 font-sans">
              {t.hero.welcome}
            </span>
            <span className="text-2xl md:text-5xl block font-sans">
              {t.hero.title.split(' ')[0]} <span className="text-gold">{t.hero.title.split(' ').slice(1).join(' ')}</span>
            </span>
          </h1>
          
          <div className={cn("flex flex-wrap gap-3 mt-1", isRTL && "flex-row-reverse")}>
            <Link to="/formations">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gold text-black text-xs font-black uppercase tracking-widest rounded-full flex items-center gap-2 shadow-xl hover:bg-gold-light transition-colors font-sans"
              >
                {t.hero.cta1}
                {isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-black uppercase tracking-widest rounded-full hover:bg-white/20 transition-colors font-sans"
              >
                {t.hero.cta2}
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50 hidden md:block"
      >
        <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-1.5 bg-gold rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
