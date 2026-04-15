import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sun, Moon } from 'lucide-react';

export default function Formations() {
  const categories = [
    {
      title: 'Période Diurne',
      icon: <Sun size={32} className="text-gold" />,
      desc: 'Formations complètes de 10 à 12 mois pour une immersion totale.',
      items: [
        { name: 'Coiffure Hommes', path: '/formations/hommes/jour', image: 'https://i.postimg.cc/bvWf48vF/IMG-20260410-WA0095.jpg' },
        { name: 'Coiffure Femmes', path: '/formations/femmes/jour', image: 'https://i.postimg.cc/vZxMQc6x/IMG-20260410-WA0088.jpg' },
        { name: 'Esthétique & Soins', path: '/formations/esthetique/jour', image: 'https://i.postimg.cc/MKFq2yXj/IMG-20260410-WA0097.jpg' },
      ]
    },
    {
      title: 'Période Nocturne',
      icon: <Moon size={32} className="text-gold" />,
      desc: 'Programmes accélérés de 6 mois pour les personnes actives.',
      items: [
        { name: 'Coiffure Hommes', path: '/formations/hommes/nuit', image: 'https://i.postimg.cc/g0nPMrGm/IMG-20260410-WA0119.jpg' },
        { name: 'Coiffure Femmes', path: '/formations/femmes/nuit', image: 'https://i.postimg.cc/yYbs4FWJ/IMG-20260410-WA0098.jpg' },
        { name: 'Esthétique & Soins', path: '/formations/esthetique/nuit', image: 'https://i.postimg.cc/ncPpbvMZ/IMG-20260410-WA0100.jpg' },
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20 space-y-4">
        <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs">Nos Programmes</span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter">VOTRE <span className="text-gold">FORMATION</span></h1>
        <p className="text-text-secondary max-w-2xl mx-auto font-medium opacity-80">
          Choisissez le programme qui correspond à votre emploi du temps et à vos ambitions professionnelles.
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
            className="group relative overflow-hidden rounded-[3rem] bg-white dark:bg-luxury-black border border-black/5 dark:border-white/10 shadow-2xl p-12 flex flex-col items-center text-center space-y-8 hover:border-gold/50 transition-all duration-500"
          >
            <div className="w-24 h-24 rounded-[2rem] bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform duration-500">
              {cat.icon}
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-text-primary uppercase">{cat.title}</h2>
              <p className="text-text-secondary opacity-60 font-medium text-lg leading-relaxed max-w-sm mx-auto">
                {cat.desc}
              </p>
            </div>
            <Link 
              to={cat.title === 'Période Diurne' ? '/diurne' : '/nocturne'}
              className="mt-4 px-12 py-5 bg-gold text-black font-black uppercase tracking-widest text-sm rounded-2xl hover:bg-white transition-all duration-500 flex items-center gap-3"
            >
              Découvrir les FILIÈRES <ArrowRight size={20} />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
