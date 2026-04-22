import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { useLanguage } from '../theme/LanguageContext';

export default function Gallery() {
  const { t, isRTL } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'femmes' | 'hommes'>('all');

  const categories = [
    { id: 'all', name: t.gallery.all },
    { id: 'femmes', name: t.gallery.femmes },
    { id: 'hommes', name: t.gallery.hommes },
  ];

  const images = [
    // Femmes & Esthétique
    { url: 'https://i.postimg.cc/K83FZRgg/IMG_20260410_WA0030.jpg', category: 'femmes' },
    { url: 'https://i.postimg.cc/vZxMQc6x/IMG_20260410_WA0088.jpg', category: 'femmes' },
    { url: 'https://i.postimg.cc/MKFq2yXj/IMG_20260410_WA0097.jpg', category: 'femmes' },
    { url: 'https://i.postimg.cc/yYbs4FWJ/IMG_20260410_WA0098.jpg', category: 'femmes' },
    { url: 'https://i.postimg.cc/KvHxSn4c/IMG_20260410_WA0099.jpg', category: 'femmes' },
    { url: 'https://i.postimg.cc/ncPpbvMZ/IMG_20260410_WA0100.jpg', category: 'femmes' },
    { url: 'https://i.postimg.cc/J42MVb0f/IMG_20260410_WA0106.jpg', category: 'femmes' },
    { url: 'https://i.postimg.cc/qM54V8qD/IMG_20260410_WA0107.jpg', category: 'femmes' },
    { url: 'https://i.postimg.cc/fTrDnxy1/IMG_20260410_WA0108.jpg', category: 'femmes' },
    { url: 'https://i.postimg.cc/MKFq2yHr/IMG_20260410_WA0109.jpg', category: 'femmes' },
    { url: 'https://i.postimg.cc/wTvgGWxp/IMG_20260410_WA0110.jpg', category: 'femmes' },
    { url: 'https://i.postimg.cc/Gh2d5M31/IMG_20260410_WA0151.jpg', category: 'femmes' },
    { url: 'https://i.postimg.cc/c4H0bD1y/IMG_20260410_WA0188.jpg', category: 'femmes' },
    { url: 'https://i.postimg.cc/m2DB5dLX/IMG_20260410_WA0189.jpg', category: 'femmes' },
    { url: 'https://i.postimg.cc/L6X2by9f/IMG_20260410_WA0191.jpg', category: 'femmes' },
    { url: 'https://i.postimg.cc/J7KRKwLB/IMG_20260410_WA0192.jpg', category: 'femmes' },
    { url: 'https://i.postimg.cc/jqvRvVbq/IMG_20260410_WA0193.jpg', category: 'femmes' },
    { url: 'https://i.postimg.cc/5yP1tz3K/IMG_20260410_WA0195.jpg', category: 'femmes' },
    { url: 'https://i.postimg.cc/4y8Z3c5P/IMG_20260410_WA0198.jpg', category: 'femmes' },
    { url: 'https://i.postimg.cc/PJ6hqD4C/IMG_20260410_WA0199.jpg', category: 'femmes' },
    { url: 'https://i.postimg.cc/63ftDgGw/IMG_20260410_WA0201.jpg', category: 'femmes' },
    { url: 'https://i.postimg.cc/C5MSY7b3/IMG_20260410_WA0202.jpg', category: 'femmes' },
    { url: 'https://i.postimg.cc/vT8bMhWy/IMG_20260410_WA0203.jpg', category: 'femmes' },
    { url: 'https://i.postimg.cc/50VfKbyw/IMG_20260410_WA0205.jpg', category: 'femmes' },
    
    // Hommes
    { url: 'https://i.postimg.cc/bvWf48vF/IMG_20260410_WA0095.jpg', category: 'hommes' },
    { url: 'https://i.postimg.cc/BvkfRsvC/IMG_20260410_WA0096.jpg', category: 'hommes' },
    { url: 'https://i.postimg.cc/0NF1hxNJ/IMG_20260410_WA0114.jpg', category: 'hommes' },
    { url: 'https://i.postimg.cc/g0nPMrGm/IMG_20260410_WA0119.jpg', category: 'hommes' },
    { url: 'https://i.postimg.cc/cJrND6dt/IMG_20260410_WA0120.jpg', category: 'hommes' },
    { url: 'https://i.postimg.cc/T3k6qnvT/IMG_20260410_WA0126.jpg', category: 'hommes' },
    { url: 'https://i.postimg.cc/bw6hH1cC/IMG_20260410_WA0132.jpg', category: 'hommes' },
    { url: 'https://i.postimg.cc/g2cpZN57/IMG_20260410_WA0142.jpg', category: 'hommes' },
    { url: 'https://i.postimg.cc/jSqT7Z9g/IMG_20260410_WA0143.jpg', category: 'hommes' },
    { url: 'https://i.postimg.cc/zXF5v9dR/IMG_20260410_WA0144.jpg', category: 'hommes' },
    { url: 'https://i.postimg.cc/SNfqRwZb/IMG_20260410_WA0145.jpg', category: 'hommes' },
    { url: 'https://i.postimg.cc/02sP880L/IMG_20260410_WA0148.jpg', category: 'hommes' },
    { url: 'https://i.postimg.cc/yYHsVVyp/IMG_20260410_WA0149.jpg', category: 'hommes' },
    { url: 'https://i.postimg.cc/tRP9Q1WB/IMG_20260410_WA0154.jpg', category: 'hommes' },
    { url: 'https://i.postimg.cc/qBnpVtyt/IMG_20260410_WA0156.jpg', category: 'hommes' },
    { url: 'https://i.postimg.cc/FFch5f37/IMG_20260410_WA0158.jpg', category: 'hommes' },
    { url: 'https://i.postimg.cc/HnQmQKdR/IMG_20260410_WA0160.jpg', category: 'hommes' },
    { url: 'https://i.postimg.cc/MHywy4qg/IMG_20260410_WA0161.jpg', category: 'hommes' },
    { url: 'https://i.postimg.cc/Fztmkm5H/IMG_20260410_WA0163.jpg', category: 'hommes' },
    { url: 'https://i.postimg.cc/0jgxKxRx/IMG_20260410_WA0165.jpg', category: 'hommes' },
    { url: 'https://i.postimg.cc/mkxR1Rfb/IMG_20260410_WA0168.jpg', category: 'hommes' },
    { url: 'https://i.postimg.cc/4yCZHZk4/IMG_20260410_WA0169.jpg', category: 'hommes' },
    { url: 'https://i.postimg.cc/fR5w26Xm/IMG_20260410_WA0174.jpg', category: 'hommes' },
  ];

  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12 space-y-4">
        <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs font-sans">{t.gallery.tag}</span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase font-sans">
          {t.gallery.title.split(' ')[0]} <span className="text-gold">{t.gallery.title.split(' ')[1]}</span>
        </h1>
        <p className="text-text-secondary max-w-2xl mx-auto font-medium opacity-80">
          {t.gallery.desc}
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id as any)}
            className={cn(
              "px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 border font-sans",
              filter === cat.id 
                ? "bg-gold text-black border-gold shadow-lg shadow-gold/20" 
                : "bg-white/5 text-white/60 border-white/10 hover:border-gold/50"
            )}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <motion.div 
        layout
        className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredImages.map((img, i) => (
            <motion.div
              key={img.url}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl overflow-hidden shadow-xl"
            >
              <img src={img.url} alt={`Galerie ${i + 1}`} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
