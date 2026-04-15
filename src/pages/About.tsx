import React from 'react';
import { motion } from 'motion/react';
import { Award, Target, Heart, ShieldCheck } from 'lucide-react';

export default function About() {
  const values = [
    { icon: <Award className="text-gold" />, title: 'Excellence', desc: 'Nous visons la perfection dans chaque geste technique.' },
    { icon: <Target className="text-gold" />, title: 'Innovation', desc: 'Nous formons aux dernières tendances et technologies du secteur.' },
    { icon: <Heart className="text-gold" />, title: 'Passion', desc: 'L’amour du métier est au cœur de notre pédagogie.' },
    { icon: <ShieldCheck className="text-gold" />, title: 'Rigueur', desc: 'Une discipline professionnelle pour garantir votre succès.' },
  ];

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20 space-y-4">
        <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs">Notre Histoire</span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter">L'INSTITUT <span className="text-gold">FACTORY</span></h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-black tracking-tighter leading-tight">
            PLUS QU'UNE ÉCOLE, <br /> UNE <span className="text-gold">ACADÉMIE DE TALENTS</span>.
          </h2>
          <div className="space-y-6 text-lg text-text-secondary font-medium opacity-80 leading-relaxed">
            <p>
              Fondé avec la vision de professionnaliser le secteur de la beauté à Ouled Teima, l'Institut Factory s'est imposé comme la référence régionale en matière de formation aux métiers de la coiffure et de l'esthétique.
            </p>
            <p>
              Notre mission est simple : transformer votre passion en une expertise reconnue. Grâce à un corps professoral d'élite et des infrastructures de pointe, nous offrons à nos étudiants les outils nécessaires pour briller dans un marché compétitif.
            </p>
            <p>
              Accrédité par l'État Marocain, notre diplôme est un gage de qualité et de sérieux, ouvrant les portes des plus grands salons et permettant l'entrepreneuriat avec assurance.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
            <img src="https://i.postimg.cc/bvWf48vF/IMG_20260410_WA0095.jpg" alt="About Factory" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -top-10 -right-10 bg-luxury-black p-10 rounded-[2.5rem] shadow-2xl border border-white/10 hidden md:block">
            <p className="text-gold font-black text-6xl tracking-tighter">15+</p>
            <p className="text-white/40 font-bold text-xs uppercase tracking-widest">Années d'Expertise</p>
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
            className="bg-white dark:bg-white/5 p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 shadow-xl space-y-6 text-center"
          >
            <div className="flex justify-center">{v.icon}</div>
            <h4 className="text-xl font-black tracking-tighter">{v.title}</h4>
            <p className="text-sm text-text-secondary font-medium opacity-70 leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
