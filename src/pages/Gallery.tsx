import React from 'react';
import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    'https://i.postimg.cc/K83FZRgg/IMG_20260410_WA0030.jpg',
    'https://i.postimg.cc/vZxMQc6x/IMG_20260410_WA0088.jpg',
    'https://i.postimg.cc/MKFq2yXj/IMG_20260410_WA0097.jpg',
    'https://i.postimg.cc/yYbs4FWJ/IMG_20260410_WA0098.jpg',
    'https://i.postimg.cc/KvHxSn4c/IMG_20260410_WA0099.jpg',
    'https://i.postimg.cc/ncPpbvMZ/IMG_20260410_WA0100.jpg',
    'https://i.postimg.cc/J42MVb0f/IMG_20260410_WA0106.jpg',
    'https://i.postimg.cc/qM54V8qD/IMG_20260410_WA0107.jpg',
    'https://i.postimg.cc/fTrDnxy1/IMG_20260410_WA0108.jpg',
    'https://i.postimg.cc/MKFq2yHr/IMG_20260410_WA0109.jpg',
    'https://i.postimg.cc/wTvgGWxp/IMG_20260410_WA0110.jpg',
    'https://i.postimg.cc/Gh2d5M31/IMG_20260410_WA0151.jpg',
    'https://i.postimg.cc/c4H0bD1y/IMG_20260410_WA0188.jpg',
    'https://i.postimg.cc/m2DB5dLX/IMG_20260410_WA0189.jpg',
    'https://i.postimg.cc/L6X2by9f/IMG_20260410_WA0191.jpg',
    'https://i.postimg.cc/J7KRKwLB/IMG_20260410_WA0192.jpg',
    'https://i.postimg.cc/jqvRvVbq/IMG_20260410_WA0193.jpg',
    'https://i.postimg.cc/5yP1tz3K/IMG_20260410_WA0195.jpg',
    'https://i.postimg.cc/4y8Z3c5P/IMG_20260410_WA0198.jpg',
    'https://i.postimg.cc/PJ6hqD4C/IMG_20260410_WA0199.jpg'
  ];

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20 space-y-4">
        <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs">Immersion</span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter">NOTRE <span className="text-gold">UNIVERS</span></h1>
        <p className="text-text-secondary max-w-2xl mx-auto font-medium opacity-80">
          Explorez nos locaux modernes, nos salles de cours équipées et l'ambiance créative qui règne au sein de l'institut. 
          Un cadre idéal pour apprendre et s'épanouir.
        </p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 3) * 0.1 }}
            className="rounded-3xl overflow-hidden shadow-xl"
          >
            <img src={img} alt={`Galerie ${i + 1}`} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
