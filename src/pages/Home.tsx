import React, { useState } from 'react';
import Hero from '../components/Hero';
import { Accreditations } from '../components/Accreditations';
import Localisation from '../components/Localisation';
import { motion, AnimatePresence } from 'motion/react';
import { Award, BookOpen, Users, CheckCircle2, ArrowRight, ArrowLeft, Zap, X, Sun, Moon, Star, PlayCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Counter from '../components/Counter';
import { useLanguage } from '../theme/LanguageContext';
import { cn } from '../lib/utils';

export default function Home() {
  const navigate = useNavigate();
  const { t, isRTL } = useLanguage();
  const [selectedFormation, setSelectedFormation] = useState<string | null>(null);

  const stats = [
    { 
      icon: <Users className="text-gold" />, 
      value: 1000, 
      suffix: '+', 
      label: t.home.stats.graduates 
    },
    { 
      icon: <Award className="text-gold" />, 
      value: 15, 
      suffix: '+', 
      label: t.home.stats.experience 
    },
    { 
      icon: <BookOpen className="text-gold" />, 
      value: 3, 
      suffix: '', 
      label: t.home.stats.diplomas 
    },
    { 
      icon: <Zap className="text-gold" />, 
      value: 98, 
      suffix: '%', 
      label: t.home.stats.experts 
    },
  ];

  const formations = [
    {
      title: t.programs.diurne.hommes,
      desc: t.programs.diurne.desc,
      image: 'https://i.postimg.cc/bvWf48vF/IMG-20260410-WA0095.jpg',
      id: 'hommes'
    },
    {
      title: t.programs.diurne.femmes,
      desc: t.programs.diurne.desc,
      image: 'https://i.postimg.cc/vZxMQc6x/IMG-20260410-WA0088.jpg',
      id: 'femmes'
    },
    {
      title: t.programs.diurne.esthetique,
      desc: t.programs.diurne.desc,
      image: 'https://i.postimg.cc/MKFq2yXj/IMG-20260410-WA0097.jpg',
      id: 'esthetique'
    }
  ];

  return (
    <div className="w-full">
      <Hero />

      {/* Introduction Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={cn("space-y-8", isRTL && "text-right")}>
            <div className="space-y-4">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-gold font-bold uppercase tracking-[0.3em] text-xs block font-sans"
              >
                {t.home.intro.tag}
              </motion.span>
              <div className="overflow-hidden">
                <motion.h2 
                  initial={{ y: "100%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] uppercase font-sans relative"
                >
                  {isRTL ? t.home.intro.title : (
                    <>
                      VOTRE AVENIR DANS LA <span className="text-gold">HAUTE COIFFURE</span> COMMENCE ICI
                    </>
                  )}
                  {/* Golden Shine Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/50 to-transparent pointer-events-none"
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2, duration: 2, ease: "easeInOut" }}
                  />
                </motion.h2>
              </div>
            </div>
            
            <div className="space-y-6 text-lg text-text-secondary leading-relaxed font-medium opacity-80">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-medium"
              >
                {t.home.intro.desc1}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-medium"
              >
                {t.home.intro.desc2}
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/a-propos">
                <button className="px-10 py-4 border-2 border-gold text-gold font-black uppercase tracking-widest text-xs hover:bg-gold hover:text-black transition-all duration-500 rounded-full font-sans">
                  {t.nav.about}
                </button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://i.postimg.cc/bw6hH1cC/IMG_20260410_WA0132.jpg" 
                alt="Formation Factory" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className={cn(
              "absolute -bottom-10 bg-luxury-black p-8 rounded-3xl shadow-2xl border border-white/10 hidden md:block",
              isRTL ? "-right-10" : "-left-10"
            )}>
              <div className="flex items-center gap-1">
                <span className="text-gold text-5xl font-black tracking-tighter">15</span>
                <span className="text-white text-2xl font-black">+</span>
              </div>
              <p className="text-white/40 font-bold text-[10px] uppercase tracking-widest">{t.home.stats.experience}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Accreditations />

      {/* Stats Section */}
      <section className="relative py-24 bg-luxury-black overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-gold/50 transition-all duration-500 flex flex-col items-center text-center space-y-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                  {React.cloneElement(stat.icon as React.ReactElement, { size: 28 })}
                </div>
                <div className="space-y-1">
                  <p className="text-white text-4xl md:text-5xl font-black tracking-tighter">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-gold font-bold text-[10px] uppercase tracking-[0.2em] font-sans">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formations Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs font-sans">{t.home.destiny}</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase font-sans">
            {t.nav.formations.split(' ')[0]} <span className="text-gold">{t.nav.formations.split(' ').slice(1).join(' ')}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {formations.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={cn(
                "group relative overflow-hidden rounded-3xl bg-luxury-black border border-white/10 shadow-xl cursor-pointer aspect-[3/4]",
                isRTL && "text-right"
              )}
              onClick={() => setSelectedFormation(f.id)}
            >
              <img 
                src={f.image} 
                alt={f.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 p-8 space-y-4 bg-gradient-to-t from-black via-black/50 to-transparent">
                <h3 className="text-white text-2xl font-black tracking-tighter uppercase font-sans">{f.title}</h3>
                <p className="text-white/60 text-sm font-medium leading-relaxed line-clamp-2">
                  {f.desc}
                </p>
                <div className={cn("inline-flex items-center gap-2 text-gold font-black text-[10px] uppercase tracking-[0.2em] group-hover:gap-4 transition-all font-sans", isRTL && "flex-row-reverse")}>
                  {t.home.modal.details} {isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Period Selection Modal */}
        <AnimatePresence>
          {selectedFormation && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedFormation(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative w-full max-w-md aspect-square bg-luxury-black rounded-[3rem] p-8 border border-white/10 shadow-2xl overflow-hidden flex flex-col justify-center"
              >
                {/* Grid Reveal Overlay */}
                <div className="absolute inset-0 z-[120] grid grid-cols-6 grid-rows-6 pointer-events-none">
                  {Array.from({ length: 36 }).map((_, i) => {
                    const col = i % 6;
                    const row = Math.floor(i / 6);
                    const distance = Math.sqrt(Math.pow(col - 2.5, 2) + Math.pow(row - 2.5, 2));
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        transition={{ duration: 1.5, delay: distance * 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-zinc-950 border border-gold/20"
                      />
                    );
                  })}
                </div>

                <button 
                  onClick={() => setSelectedFormation(null)}
                  className={cn("absolute top-6 text-white/40 hover:text-white transition-colors z-[130]", isRTL ? "left-6" : "right-6")}
                >
                  <X size={20} />
                </button>

                <div className="relative z-10 space-y-6 text-center">
                  <div className="space-y-2">
                    <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] font-sans">
                      {isRTL ? 'اختيار' : 'Sélection'}
                    </span>
                    <h3 className="text-white text-2xl font-black tracking-tighter uppercase font-sans">
                      {t.inscription.modal.title.split(' ')[0]} <span className="text-gold">{t.inscription.modal.title.split(' ')[1]}</span>
                    </h3>
                  </div>

                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => navigate(`/formations/${selectedFormation}/jour`)}
                      className={cn("group relative p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/50 transition-all duration-500 text-left flex items-center gap-4", isRTL && "flex-row-reverse text-right")}
                    >
                      <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform shrink-0">
                        <Sun size={20} />
                      </div>
                      <div>
                        <h4 className="text-white text-sm font-black tracking-tighter uppercase font-sans">{t.inscription.modal.diurne}</h4>
                        <p className="text-white/30 text-[10px] font-medium">{t.inscription.modal.diurneDesc}</p>
                      </div>
                      {isRTL ? <ArrowLeft size={14} className="mr-auto text-gold opacity-0 group-hover:opacity-100 transition-opacity" /> : <ArrowRight size={14} className="ml-auto text-gold opacity-0 group-hover:opacity-100 transition-opacity" />}
                    </button>

                    <button
                      onClick={() => navigate(`/formations/${selectedFormation}/nuit`)}
                      className={cn("group relative p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/50 transition-all duration-500 text-left flex items-center gap-4", isRTL && "flex-row-reverse text-right")}
                    >
                      <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform shrink-0">
                        <Moon size={20} />
                      </div>
                      <div>
                        <h4 className="text-white text-sm font-black tracking-tighter uppercase font-sans">{t.inscription.modal.nocturne}</h4>
                        <p className="text-white/30 text-[10px] font-medium">{t.inscription.modal.nocturneDesc}</p>
                      </div>
                      {isRTL ? <ArrowLeft size={14} className="mr-auto text-gold opacity-0 group-hover:opacity-100 transition-opacity" /> : <ArrowRight size={14} className="ml-auto text-gold opacity-0 group-hover:opacity-100 transition-opacity" />}
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto rounded-[3rem] p-12 md:p-20 text-center space-y-8 shadow-2xl relative overflow-hidden bg-luxury-black min-h-[500px] flex flex-col justify-center">
          {/* Background Video */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-80"
            >
              <source
                src="https://d8j0ntlcm91z4.cloudfront.net/user_3CJJzIIZIaYaehVsH4R9u8pa1fm/hf_20260413_163604_0d89790e-ecac-457f-a4fc-0706537426e1.mp4"
                type="video/mp4"
              />
            </video>
            {/* Subtle Blur & Overlay */}
            <div className="absolute inset-0 backdrop-blur-[1.5px] bg-black/40" />
          </div>

          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-[1]">
             <div className="geometric-grid" />
          </div>

          <h2 className="text-white text-4xl md:text-6xl font-black tracking-tighter leading-none relative z-10 font-sans uppercase">
            {t.home.cta.t.split(' ')[0]} <span className="text-gold">{t.home.cta.t.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-white/80 text-lg font-bold max-w-2xl mx-auto relative z-10 drop-shadow-lg">
            {t.home.cta.d}
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <Link to="/inscription">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gold text-black font-black uppercase tracking-widest text-xs rounded-full shadow-xl font-sans"
              >
                {t.home.cta.btn}
              </motion.button>
            </Link>
            <a href="tel:+212528521730">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white/10 text-white font-black uppercase tracking-widest text-xs rounded-full shadow-xl backdrop-blur-md border border-white/10 font-sans"
              >
                {t.contact.phone}
              </motion.button>
            </a>
          </div>
        </div>
      </section>

      <Localisation />
    </div>
  );
}
