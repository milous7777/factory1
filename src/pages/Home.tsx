import React, { useState } from 'react';
import Hero from '../components/Hero';
import { motion, AnimatePresence } from 'motion/react';
import { Award, BookOpen, Users, CheckCircle2, ArrowRight, Zap, X, Sun, Moon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Counter from '../components/Counter';

export default function Home() {
  const navigate = useNavigate();
  const [selectedFormation, setSelectedFormation] = useState<string | null>(null);

  const stats = [
    { 
      icon: <Users className="text-gold" />, 
      value: 1000, 
      suffix: '+', 
      label: 'Étudiants Formés' 
    },
    { 
      icon: <Award className="text-gold" />, 
      value: 15, 
      suffix: '+', 
      label: 'Années d’Expérience' 
    },
    { 
      icon: <BookOpen className="text-gold" />, 
      value: 3, 
      suffix: '', 
      label: 'Spécialités Clés' 
    },
    { 
      icon: <Zap className="text-gold" />, 
      value: 98, 
      suffix: '%', 
      label: 'Taux de Réussite' 
    },
  ];

  const formations = [
    {
      title: 'Coiffure Hommes',
      desc: 'Maîtrisez l’art de la coupe masculine, du barbier traditionnel aux styles les plus contemporains.',
      image: 'https://i.postimg.cc/bvWf48vF/IMG-20260410-WA0095.jpg',
      link: '/formations/hommes'
    },
    {
      title: 'Coiffure Femmes',
      desc: 'Devenez un expert en visagisme, colorimétrie et coiffure événementielle de haute volée.',
      image: 'https://i.postimg.cc/vZxMQc6x/IMG-20260410-WA0088.jpg',
      link: '/formations/femmes'
    },
    {
      title: 'Esthétique & Soins',
      desc: 'Apprenez les techniques de pointe en soins du visage, maquillage professionnel et bien-être.',
      image: 'https://i.postimg.cc/MKFq2yXj/IMG-20260410-WA0097.jpg',
      link: '/formations/esthetique'
    }
  ];

  return (
    <div className="w-full">
      <Hero />

      {/* Introduction Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-gold font-bold uppercase tracking-[0.3em] text-xs block"
              >
                L'Excellence à Ouled Teima
              </motion.span>
              <div className="overflow-hidden">
                <motion.h2 
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-4xl md:text-6xl font-black tracking-tighter leading-none"
                >
                  VOTRE AVENIR DANS LA <span className="text-gold">HAUTE COIFFURE</span> COMMENCE ICI.
                </motion.h2>
              </div>
            </div>
            
            <div className="space-y-6 text-lg text-text-secondary leading-relaxed font-medium opacity-80">
              {[
                "L'Institut Factory n'est pas seulement une école, c'est un tremplin vers une carrière d'exception. Situé au cœur d'Ouled Teima, notre centre de formation professionnelle vous offre un environnement d'apprentissage moderne, alliant théorie rigoureuse et pratique intensive.",
                "Nous croyons que chaque étudiant possède un potentiel unique. Notre mission est de révéler ce talent à travers un accompagnement personnalisé, des masterclasses avec des experts du secteur et un accès permanent aux dernières innovations technologiques de la coiffure et de l'esthétique.",
                "En rejoignant l'Institut Factory, vous intégrez une communauté de passionnés et bénéficiez d'un réseau professionnel solide pour faciliter votre insertion dans le monde du travail ou la création de votre propre entreprise."
              ].map((text, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, filter: "blur(12px)", y: 20, letterSpacing: "-0.02em" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0, letterSpacing: "0em" }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 1, 
                    delay: idx * 0.2,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  {text}
                </motion.p>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {[
                'Diplôme Accrédité par l’État',
                'Formation 100% Pratique',
                'Matériel de Haute Technologie',
                'Insertion Professionnelle Garantie'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-gold" size={20} />
                  <span className="font-bold text-sm uppercase tracking-wider">{item}</span>
                </div>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Link to="/a-propos">
                <button className="mt-4 px-10 py-4 border-2 border-gold text-gold font-black uppercase tracking-widest text-xs hover:bg-gold hover:text-black transition-all duration-500 rounded-full">
                  Découvrir notre histoire
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
                src="https://i.postimg.cc/bvWf48vF/IMG-20260410-WA0095.jpg" 
                alt="Formation Factory" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-gold p-8 rounded-3xl shadow-2xl hidden md:block">
              <p className="text-black font-black text-5xl tracking-tighter">98%</p>
              <p className="text-black/60 font-bold text-xs uppercase tracking-widest">Taux de Réussite</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Glassmorphism & Futuristic Style */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-luxury-black z-0" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group relative"
              >
                {/* Glassmorphism Card */}
                <div className="h-full p-8 rounded-[2rem] bg-white/5 backdrop-blur-md border border-white/10 hover:border-gold/50 transition-all duration-500 flex flex-col items-center text-center space-y-4 overflow-hidden">
                  {/* Glowing Border Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent" />
                  </div>

                  {/* Icon with Outer Glow */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.1)] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-500">
                      {React.cloneElement(stat.icon as React.ReactElement, { size: 28 })}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <p className="text-white text-4xl md:text-5xl font-black tracking-tighter">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-gold font-bold text-xs uppercase tracking-[0.2em] opacity-80 group-hover:opacity-100 transition-opacity">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formations Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs">Nos Programmes</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">CHOISISSEZ VOTRE <span className="text-gold">DESTIN</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {formations.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative overflow-hidden rounded-3xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 shadow-xl cursor-pointer"
              onClick={() => setSelectedFormation(f.title.toLowerCase().split(' ')[1] || f.title.toLowerCase())}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={f.image} 
                  alt={f.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 space-y-4">
                <h3 className="text-white text-2xl font-black tracking-tighter">{f.title}</h3>
                <p className="text-white/70 text-sm font-medium leading-relaxed line-clamp-2">
                  {f.desc}
                </p>
                <div className="inline-flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                  Choisir ma période <ArrowRight size={16} />
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
                {/* Grid Reveal Overlay - Intensified */}
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
                        transition={{ 
                          duration: 1.5, 
                          delay: distance * 0.15,
                          ease: [0.16, 1, 0.3, 1]
                        }}
                        className="bg-zinc-950 border border-gold/20"
                      />
                    );
                  })}
                </div>

                <button 
                  onClick={() => setSelectedFormation(null)}
                  className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors z-[130]"
                >
                  <X size={20} />
                </button>

                <div className="relative z-10 space-y-6">
                  <div className="text-center space-y-2">
                    <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px]">Sélection</span>
                    <h3 className="text-white text-2xl font-black tracking-tighter uppercase">VOTRE <span className="text-gold">PÉRIODE</span></h3>
                    <p className="text-white/40 text-xs font-medium">Choisissez votre créneau</p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => navigate(`/diurne`)}
                      className="group relative p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/50 transition-all duration-500 text-left flex items-center gap-4"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform shrink-0">
                        <Sun size={20} />
                      </div>
                      <div>
                        <h4 className="text-white text-sm font-black tracking-tighter uppercase">Diurne</h4>
                        <p className="text-white/30 text-[10px] font-medium">10-12 mois (Jour)</p>
                      </div>
                      <ArrowRight size={14} className="ml-auto text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>

                    <button
                      onClick={() => navigate(`/nocturne`)}
                      className="group relative p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/50 transition-all duration-500 text-left flex items-center gap-4"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform shrink-0">
                        <Moon size={20} />
                      </div>
                      <div>
                        <h4 className="text-white text-sm font-black tracking-tighter uppercase">Nocturne</h4>
                        <p className="text-white/30 text-[10px] font-medium">6 mois (Soir)</p>
                      </div>
                      <ArrowRight size={14} className="ml-auto text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
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
        <div className="max-w-5xl mx-auto rounded-[3rem] p-12 md:p-20 text-center space-y-8 shadow-2xl relative overflow-hidden group">
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover blur-[2px] scale-105"
            >
              <source
                src="https://d8j0ntlcm91z4.cloudfront.net/user_3CJJzIIZIaYaehVsH4R9u8pa1fm/hf_20260413_163604_0d89790e-ecac-457f-a4fc-0706537426e1.mp4"
                type="video/mp4"
              />
            </video>
            {/* Dark Overlay for Contrast */}
            <div className="absolute inset-0 bg-black/50 z-1" />
          </div>

          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-2">
             <div className="geometric-grid" />
          </div>

          <h2 className="text-white text-4xl md:text-6xl font-black tracking-tighter leading-none relative z-10 drop-shadow-lg">
            PRÊT À REJOINDRE <br /> <span className="text-gold">L'ÉLITE ?</span>
          </h2>
          <p className="text-white/80 text-lg font-bold max-w-2xl mx-auto relative z-10 drop-shadow-md">
            Les inscriptions sont ouvertes pour la session prochaine. Ne laissez pas passer votre chance de devenir un professionnel reconnu.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <Link to="/inscription">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gold text-black font-black uppercase tracking-widest text-xs rounded-full shadow-xl"
              >
                Dossier d'inscription
              </motion.button>
            </Link>
            <a href="https://wa.me/212767542604">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-black font-black uppercase tracking-widest text-xs rounded-full shadow-xl"
              >
                Contact WhatsApp
              </motion.button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
