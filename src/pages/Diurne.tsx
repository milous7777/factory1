import React from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Sun, ArrowLeft } from 'lucide-react';

export default function Diurne() {
  const navigate = useNavigate();
  const items = [
    { name: 'Coiffure Hommes', path: '/formations/hommes/jour', image: 'https://i.postimg.cc/bvWf48vF/IMG-20260410-WA0095.jpg' },
    { name: 'Coiffure Femmes', path: '/formations/femmes/jour', image: 'https://i.postimg.cc/vZxMQc6x/IMG-20260410-WA0088.jpg' },
    { name: 'Esthétique & Soins', path: '/formations/esthetique/jour', image: 'https://i.postimg.cc/MKFq2yXj/IMG-20260410-WA0097.jpg' },
  ];

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate('/formations')}
        className="flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-xs mb-12 hover:gap-4 transition-all"
      >
        <ArrowLeft size={16} /> Retour
      </motion.button>

      <div className="text-center mb-20 space-y-4">
        <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs">Programmes Intensifs</span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter">PÉRIODE <span className="text-gold">DIURNE</span></h1>
        <p className="text-text-secondary max-w-2xl mx-auto font-medium opacity-80">
          Formations complètes de 10 à 12 mois pour une immersion totale dans le monde de la beauté.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, j) => (
          <motion.div
            key={j}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: j * 0.1 }}
            className="group relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 shadow-xl"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 space-y-4">
              <h3 className="text-white text-2xl font-black tracking-tighter">{item.name}</h3>
              <Link to={item.path} className="inline-flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                Voir les détails <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
