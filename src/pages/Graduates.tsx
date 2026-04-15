import React from 'react';
import { motion } from 'motion/react';

export default function Graduates() {
  const graduates = [
    'https://i.postimg.cc/bNSKK4tK/IMG_20260410_WA0000.jpg',
    'https://i.postimg.cc/9Xn6gcDc/IMG_20260410_WA0001.jpg',
    'https://i.postimg.cc/XNzR1nrW/IMG_20260410_WA0002.jpg',
    'https://i.postimg.cc/zDcs2qVs/IMG_20260410_WA0005.jpg',
    'https://i.postimg.cc/XNzR1npT/IMG_20260410_WA0006.jpg',
    'https://i.postimg.cc/NGz3CQ5n/IMG_20260410_WA0008.jpg',
    'https://i.postimg.cc/2jKs9CVX/IMG_20260410_WA0009.jpg',
    'https://i.postimg.cc/8k02XTjK/IMG_20260410_WA0011.jpg',
    'https://i.postimg.cc/ryPBZqK9/IMG_20260410_WA0012.jpg',
    'https://i.postimg.cc/MZFC3zvs/IMG_20260410_WA0013.jpg',
    'https://i.postimg.cc/ZYMGsJCx/IMG_20260410_WA0014.jpg',
    'https://i.postimg.cc/CMQ3rwzG/IMG_20260410_WA0015.jpg',
    'https://i.postimg.cc/y6bMp7kj/IMG_20260410_WA0018.jpg',
    'https://i.postimg.cc/QNy2YjHk/IMG_20260410_WA0020.jpg',
    'https://i.postimg.cc/rFRvv7rB/IMG_20260410_WA0021.jpg',
    'https://i.postimg.cc/L5wGJ3cn/IMG_20260410_WA0072.jpg',
    'https://i.postimg.cc/Y0ZTvz59/IMG_20260410_WA0071.jpg',
    'https://i.postimg.cc/cC2PvBpv/IMG_20260410_WA0033.jpg',
    'https://i.postimg.cc/Rhy2WLk3/IMG_20260410_WA0027.jpg',
    'https://i.postimg.cc/xj4wp9cL/IMG_20260410_WA0024.jpg'
  ];

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20 space-y-4">
        <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs">Succès & Fierté</span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter">NOS <span className="text-gold">DIPLÔMÉS</span></h1>
        <p className="text-text-secondary max-w-2xl mx-auto font-medium opacity-80">
          Découvrez les visages de ceux qui ont fait confiance à l'Institut Factory pour lancer leur carrière. 
          Chaque photo représente une réussite, un talent et un avenir prometteur.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {graduates.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 5) * 0.1 }}
            className="aspect-square rounded-2xl overflow-hidden shadow-lg group relative"
          >
            <img src={img} alt={`Diplômé ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
