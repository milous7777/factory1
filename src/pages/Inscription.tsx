import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, CheckCircle2, ArrowRight, Info, X, Sun, Moon, Minus, ArrowLeft, Send } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Inscription() {
  const navigate = useNavigate();
  const [selectedFormation, setSelectedFormation] = useState<string | null>(null);

  const documents = [
    '2 Certificats de scolarité originaux',
    '1 Copie de la carte d’identité nationale (CIN)',
    'Extrait d’acte de naissance',
    '4 Photos d’identité récentes',
    'Frais d’assurance et de tablier (300 DH)'
  ];

  const steps = [
    { title: 'Dossier', desc: 'Préparez les documents requis listés ci-contre.' },
    { title: 'Visite', desc: 'Venez nous rencontrer pour une visite de l’institut.' },
    { title: 'Entretien', desc: 'Un court échange pour définir vos objectifs.' },
    { title: 'Validation', desc: 'Finalisez votre inscription et commencez votre futur.' }
  ];

  const formations = [
    { id: 'mixte', name: 'Pack Premium (Mixte)' },
    { id: 'hommes', name: 'Coiffure Hommes' },
    { id: 'femmes', name: 'Coiffure Femmes' },
    { id: 'esthetique', name: 'Esthétique & Soins' }
  ];

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-xs mb-12 hover:gap-4 transition-all"
      >
        <ArrowLeft size={16} /> Retour
      </motion.button>

      <div className="text-center mb-20 space-y-4">
        <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs">Rejoignez-nous</span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter">DOSSIER D'<span className="text-gold">INSCRIPTION</span></h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-12"
        >
          <div className="bg-luxury-black p-10 rounded-[3rem] shadow-2xl border border-white/10 space-y-8">
            <div className="flex items-center gap-4 text-gold">
              <FileText size={32} />
              <h2 className="text-3xl font-black tracking-tighter text-white">Documents Requis</h2>
            </div>
            <div className="space-y-4">
              {documents.map((doc, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/5">
                  <CheckCircle2 className="text-gold shrink-0" size={20} />
                  <span className="text-white font-bold text-sm tracking-wide">{doc}</span>
                </div>
              ))}
            </div>
            <div className="bg-gold/10 p-6 rounded-2xl border border-gold/20 flex gap-4">
              <Info className="text-gold shrink-0" size={24} />
              <p className="text-gold text-xs font-bold leading-relaxed">
                Note : Les certificats de scolarité doivent être originaux. Pour les mineurs, la présence d'un tuteur légal est requise lors de l'inscription.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-12"
        >
          <div className="space-y-8">
            <h2 className="text-4xl font-black tracking-tighter">LE PROCESSUS <span className="text-gold">SIMPLE</span></h2>
            <div className="grid grid-cols-1 gap-6">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-gold text-black flex items-center justify-center font-black text-xl shrink-0">
                    {i + 1}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-black tracking-tighter">{step.title}</h4>
                    <p className="text-text-secondary font-medium opacity-70">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-white/5 p-10 rounded-[3rem] border border-black/5 dark:border-white/5 shadow-xl space-y-8 relative">
            <h3 className="text-2xl font-black tracking-tighter">Choisissez votre formation</h3>
            <div className="grid grid-cols-1 gap-4">
              {formations.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setSelectedFormation(f.id)}
                  className="group flex items-center justify-between p-6 bg-luxury-black rounded-2xl hover:bg-gold transition-all duration-500 text-left"
                >
                  <span className="text-white group-hover:text-black font-black uppercase tracking-widest text-xs">{f.name}</span>
                  <ArrowRight className="text-gold group-hover:text-black" size={20} />
                </button>
              ))}
            </div>

            <div className="pt-8 border-t border-black/5 dark:border-white/10">
              <h3 className="text-2xl font-black tracking-tighter mb-6">Pré-inscription Rapide</h3>
              <form 
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const name = formData.get('name');
                  const phone = formData.get('phone');
                  const formation = formData.get('formation');
                  const whatsappMessage = `Bonjour Institut Factory,\n\nJe souhaite me pré-inscrire :\nNom: ${name}\nTéléphone: ${phone}\nFormation: ${formation}`;
                  const whatsappUrl = `https://wa.me/212767542604?text=${encodeURIComponent(whatsappMessage)}`;
                  window.open(whatsappUrl, '_blank');
                }}
              >
                <input name="name" type="text" placeholder="Nom Complet" required className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full px-6 py-4 outline-none focus:ring-2 focus:ring-gold transition-all text-text-primary placeholder:text-text-secondary/40" />
                <input name="phone" type="tel" placeholder="Téléphone" required className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full px-6 py-4 outline-none focus:ring-2 focus:ring-gold transition-all text-text-primary placeholder:text-text-secondary/40" />
                <select name="formation" required className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full px-6 py-4 outline-none focus:ring-2 focus:ring-gold transition-all text-text-primary appearance-none">
                  <option value="" className="text-black">Choisir une formation</option>
                  {formations.map(f => (
                    <option key={f.id} value={f.name} className="text-black">{f.name}</option>
                  ))}
                </select>
                <button type="submit" className="w-full py-5 bg-gold text-black font-black uppercase tracking-widest text-xs rounded-full flex items-center justify-center gap-3 hover:bg-gold-light transition-all shadow-xl">
                  Envoyer sur WhatsApp
                  <Send size={18} />
                </button>
              </form>
            </div>

            {/* Confirmation Modal */}
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
                          onClick={() => navigate(`/formations/${selectedFormation}/jour`)}
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
                          onClick={() => navigate(`/formations/${selectedFormation}/nuit`)}
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
          </div>
        </motion.div>
      </div>
    </div>
  );
}
