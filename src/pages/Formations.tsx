import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sun, Moon, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../theme/LanguageContext';

export default function Formations() {
  const { t, isRTL } = useLanguage();
  
  const categories = [
    {
      title: t.formationsPage.diurne.title,
      icon: <Sun size={32} className="text-gold" />,
      desc: t.formationsPage.diurne.desc,
      path: '/diurne'
    },
    {
      title: t.formationsPage.nocturne.title,
      icon: <Moon size={32} className="text-gold" />,
      desc: t.formationsPage.nocturne.desc,
      path: '/nocturne'
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20 space-y-4">
        <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs font-sans">{t.formationsPage.tag}</span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase font-sans">
          {t.formationsPage.title.split(' ')[0]} <span className="text-gold">{t.formationsPage.title.split(' ').slice(1).join(' ')}</span>
        </h1>
        <p className="text-white/60 max-w-2xl mx-auto font-medium">
          {t.formationsPage.desc}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="group relative overflow-hidden rounded-[3rem] bg-luxury-black border border-white/10 shadow-2xl p-12 flex flex-col items-center text-center space-y-8 hover:border-gold/50 transition-all duration-500"
          >
            <div className="w-24 h-24 rounded-[2rem] bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform duration-500">
              {cat.icon}
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase font-sans">{cat.title}</h2>
              <p className="text-white/60 font-medium text-lg leading-relaxed max-w-sm mx-auto">
                {cat.desc}
              </p>
            </div>
            <Link 
              to={cat.path}
              className="mt-4 px-12 py-5 bg-gold text-black font-black uppercase tracking-widest text-sm rounded-2xl hover:bg-white transition-all duration-500 flex items-center gap-3 font-sans"
            >
              {t.formationsPage.cta} {isRTL ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
