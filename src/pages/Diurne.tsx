import React from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Sun, ArrowLeft } from 'lucide-react';
import { cn } from '../lib/utils';
import { useLanguage } from '../theme/LanguageContext';

export default function Diurne() {
  const navigate = useNavigate();
  const { t, isRTL } = useLanguage();

  const items = [
    { name: t.programs.diurne.mixte, path: '/formations/mixte/jour', image: 'https://i.postimg.cc/bvWf48vF/IMG-20260410-WA0095.jpg', premium: true },
    { name: t.programs.diurne.hommes, path: '/formations/hommes/jour', image: 'https://i.postimg.cc/0NF1hxNJ/IMG-20260410-WA0114.jpg' },
    { name: t.programs.diurne.femmes, path: '/formations/femmes/jour', image: 'https://i.postimg.cc/vZxMQc6x/IMG-20260410-WA0088.jpg' },
    { name: t.programs.diurne.esthetique, path: '/formations/esthetique/jour', image: 'https://i.postimg.cc/ncPpbvMZ/IMG-20260410-WA0100.jpg' },
  ];

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <motion.button
        initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate('/formations')}
        className={cn(
          "flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-xs mb-12 transition-all",
          isRTL ? "hover:gap-4 flex-row-reverse" : "hover:gap-4"
        )}
      >
        {isRTL ? <ArrowRight size={16} /> : <ArrowLeft size={16} />} 
        <span className="font-sans">{t.programs.diurne.back}</span>
      </motion.button>

      <div className="text-center mb-20 space-y-4">
        <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs font-sans">{t.programs.diurne.tag}</span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase font-sans">
          {t.programs.diurne.title.split(' ')[0]} <span className="text-gold">{t.programs.diurne.title.split(' ')[1]}</span>
        </h1>
        <p className="text-white/60 max-w-2xl mx-auto font-medium">
          {t.programs.diurne.desc}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, j) => (
          <motion.div
            key={j}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: j * 0.1 }}
            className={cn(
              "group relative overflow-hidden rounded-[2.5rem] bg-white/5 border shadow-xl transition-all duration-500",
              item.premium ? "border-gold/50 scale-105 z-10" : "border-white/5"
            )}
          >
            {item.premium && (
              <div className={cn(
                "absolute top-6 z-20 bg-gold text-black font-black text-[10px] uppercase tracking-widest px-4 py-2 rounded-full shadow-lg font-sans",
                isRTL ? "right-6" : "left-6"
              )}>
                {t.programs.diurne.premium}
              </div>
            )}
            <div className="aspect-[4/5] overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 space-y-2 rtl:text-right">
              <h3 className="text-white text-2xl font-black tracking-tighter font-sans">{item.name}</h3>
              <Link to={item.path} className="inline-flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                <span className="font-sans">{t.programs.diurne.details}</span> 
                {isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
