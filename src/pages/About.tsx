import React from 'react';
import { motion } from 'motion/react';
import { Award, Target, Heart, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../theme/LanguageContext';
import { cn } from '../lib/utils';

export default function About() {
  const { t, isRTL } = useLanguage();
  
  const values = [
    { icon: <Award className="text-gold" />, title: t.about.values.v1.t, desc: t.about.values.v1.d },
    { icon: <Target className="text-gold" />, title: t.about.values.v2.t, desc: t.about.values.v2.d },
    { icon: <Heart className="text-gold" />, title: t.about.values.v3.t, desc: t.about.values.v3.d },
    { icon: <ShieldCheck className="text-gold" />, title: t.about.values.v4.t, desc: t.about.values.v4.d },
  ];

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20 space-y-4">
        <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs font-sans">
          {t.about.tag}
        </span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase font-sans">
          {t.about.title.split(' ')[0]} <span className="text-gold">{t.about.title.split(' ')[1]}</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8 rtl:text-right"
        >
          <h2 className="text-4xl font-black tracking-tighter leading-tight font-sans">
            <span dangerouslySetInnerHTML={{ __html: t.about.subtitle.replace("ACADÉMIE DE TALENTS", '<span class="text-gold">ACADÉMIE DE TALENTS</span>').replace('أكاديمية للمواهب', '<span class="text-gold">أكاديمية للمواهب</span>') }} />
          </h2>
          <div className="space-y-6 text-lg text-text-secondary font-medium opacity-80 leading-relaxed">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
            <img src="https://i.postimg.cc/bvWf48vF/IMG-20260410_WA0095.jpg" alt="About Factory" className="w-full h-full object-cover" />
          </div>
          <div className={cn(
            "absolute -top-10 bg-luxury-black p-10 rounded-[2.5rem] shadow-2xl border border-white/10 hidden md:block",
            isRTL ? "-left-10" : "-right-10"
          )}>
            <p className="text-gold font-black text-6xl tracking-tighter">15+</p>
            <p className="text-white/40 font-bold text-xs uppercase tracking-widest">{t.home.stats.experience}</p>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((v, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/5 p-10 rounded-[2.5rem] border border-white/5 shadow-xl space-y-6 text-center"
          >
            <div className="flex justify-center">{v.icon}</div>
            <h4 className="text-xl font-black tracking-tighter font-sans">{v.title}</h4>
            <p className="text-sm text-white/70 font-medium leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
