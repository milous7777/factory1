import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FORMATIONS_DATA } from '../types';
import { motion } from 'motion/react';
import { CheckCircle2, Clock, CreditCard, FileText, Send, ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import Counter from '../components/Counter';
import { useLanguage } from '../theme/LanguageContext';

export default function FormationDetails() {
  const { category, type } = useParams();
  const navigate = useNavigate();
  const { language, t, isRTL } = useLanguage();
  
  const formation = FORMATIONS_DATA.find(f => f.category === category && f.type === type);

  // Fallback to avoid crash if formation not found
  const formationContent = formation?.translations[language] || formation?.translations['fr'];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    duration: formation?.type === 'jour' ? '10 mois' : '6 mois'
  });

  if (!formation || !formationContent) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Formation non trouvée</h2>
          <button onClick={() => navigate('/formations')} className="text-gold font-bold">Retour aux formations</button>
        </div>
      </div>
    );
  }

  const getPrice = (duration: string) => {
    if (formation.type === 'nuit') return 800;
    if (formation.category === 'hommes') {
      return duration === '10 mois' ? 400 : 350;
    }
    return duration === '10 mois' ? 500 : 400;
  };

  const currentPrice = getPrice(formData.duration);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const period = formation.type === 'jour' ? 'Diurne (Jour)' : 'Nocturne (Nuit)';
    const message = `Bonjour Institut Factory, je souhaite m'inscrire à la formation ${formationContent.title}. %0A%0A Période: ${period} %0A Nom: ${formData.name} %0A Téléphone: ${formData.phone} %0A Durée choisie: ${formData.duration} %0A Tarif: ${currentPrice} DH/mois`;
    window.open(`https://wa.me/212767542604?text=${message}`, '_blank');
  };

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <motion.button
        initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate('/formations')}
        className={cn(
          "flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-xs mb-12 hover:gap-4 transition-all font-sans",
          isRTL && "flex-row-reverse"
        )}
      >
        {isRTL ? <ArrowRight size={16} /> : <ArrowLeft size={16} />} {t.inscription.back}
      </motion.button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn("space-y-12", isRTL && "text-right")}
        >
          <div className="space-y-6">
            <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs font-sans">
              {t.nav.formations} {formation.type === 'jour' ? t.inscription.modal.diurne : t.inscription.modal.nocturne}
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase font-sans">{formationContent.title}</h1>
            <p className="text-lg text-text-secondary leading-relaxed font-medium opacity-80">
              {formationContent.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-white/5 p-6 rounded-3xl border border-black/5 dark:border-white/5 shadow-xl space-y-4">
              <div className={cn("w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold", isRTL && "ml-auto")}>
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-black text-sm uppercase tracking-widest font-sans">{t.contact.hours}</h4>
                <p className="text-text-secondary font-medium">{formationContent.duration}</p>
              </div>
            </div>
            <div className="bg-white dark:bg-white/5 p-6 rounded-3xl border border-black/5 dark:border-white/5 shadow-xl space-y-4">
              <div className={cn("w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold", isRTL && "ml-auto")}>
                <CreditCard size={24} />
              </div>
              <div>
                <h4 className="font-black text-sm uppercase tracking-widest font-sans">{t.inscription.modal.tag}</h4>
                <p className="text-text-secondary font-medium">{formationContent.price}</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-black tracking-tighter font-sans">{t.home.modal.details}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {formationContent.curriculum.map((item, i) => (
                <div key={i} className={cn("flex items-center gap-3 bg-white dark:bg-white/5 p-4 rounded-2xl border border-black/5 dark:border-white/5", isRTL && "flex-row-reverse")}>
                  <CheckCircle2 className="text-gold" size={18} />
                  <span className="font-bold text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-black tracking-tighter font-sans">{t.inscription.title}</h3>
            <div className="bg-gold/10 p-8 rounded-3xl border border-gold/20 space-y-4">
              <div className={cn("flex items-center gap-3 text-gold mb-2", isRTL && "flex-row-reverse")}>
                <FileText size={20} />
                <span className="font-black uppercase tracking-widest text-xs font-sans">{t.inscription.docs.title}</span>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {t.inscription.docs.list.slice(0, 5).map((doc: string, idx: number) => (
                  <li key={idx} className={cn("text-sm font-bold flex items-center gap-2", isRTL && "flex-row-reverse")}>
                    ✓ {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Right: Gallery & Form */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="grid grid-cols-2 gap-4"
          >
            {formation.images.map((img, i) => (
              <div key={i} className={cn(
                "rounded-3xl overflow-hidden shadow-xl aspect-square",
                i === 0 ? "col-span-2 aspect-[16/9]" : ""
              )}>
                <img src={img} alt={formationContent.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-luxury-black p-10 rounded-[2.5rem] shadow-2xl border border-white/10 space-y-8"
          >
            <div className="text-center space-y-2">
              <h3 className="text-white text-3xl font-black tracking-tighter font-sans">{t.inscription.tag}</h3>
              <p className="text-white/50 text-sm font-medium">{t.home.cta.d}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className={cn("text-white/40 text-xs font-bold uppercase tracking-widest block", isRTL ? "mr-4 text-right" : "ml-4")}>{t.inscription.form.name}</label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className={cn("w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:ring-2 focus:ring-gold outline-none transition-all", isRTL && "text-right")}
                  placeholder="..."
                />
              </div>
              <div className="space-y-2">
                <label className={cn("text-white/40 text-xs font-bold uppercase tracking-widest block", isRTL ? "mr-4 text-right" : "ml-4")}>{t.inscription.form.phone}</label>
                <input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  className={cn("w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:ring-2 focus:ring-gold outline-none transition-all", isRTL && "text-right")}
                  placeholder="..."
                />
              </div>
              {formation.type === 'jour' ? (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className={cn("text-white/40 text-xs font-bold uppercase tracking-widest block", isRTL ? "mr-4 text-right" : "ml-4")}>{t.contact.hours}</label>
                    <div className="grid grid-cols-2 gap-4">
                      {['10 mois', '12 mois'].map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() => setFormData({...formData, duration: d})}
                          className={cn(
                            "py-4 rounded-2xl font-bold text-sm transition-all duration-300 border",
                            formData.duration === d 
                              ? "bg-gold text-black border-gold shadow-[0_0_20px_rgba(212,175,55,0.3)]" 
                              : "bg-white/5 text-white border-white/10 hover:border-white/30"
                          )}
                        >
                          {isRTL ? (d === '10 mois' ? '10 أشهر' : '12 شهراً') : d}
                        </button>
                      ))}
                    </div>
                  </div>

                  <motion.div 
                    key={formData.duration}
                    initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    className="bg-gold/10 border border-gold/20 rounded-3xl p-6 text-center relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <p className="text-gold/60 text-[10px] font-black uppercase tracking-[0.2em] mb-1 font-sans">{t.inscription.modal.tag}</p>
                    <div className={cn("flex items-center justify-center gap-1", isRTL && "flex-row-reverse")}>
                      <span className="text-white text-4xl font-black tracking-tighter shadow-gold/20 drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]">
                        <Counter value={currentPrice} />
                      </span>
                      <span className="text-gold font-black text-xl">DH</span>
                    </div>
                  </motion.div>
                </div>
              ) : (
                <div className="space-y-2">
                  <label className={cn("text-white/40 text-xs font-bold uppercase tracking-widest block", isRTL ? "mr-4 text-right" : "ml-4")}>{t.inscription.modal.nocturne}</label>
                  <div className="bg-gold/10 border border-gold/20 rounded-3xl p-6 text-center">
                    <p className="text-gold/60 text-[10px] font-black uppercase tracking-[0.2em] mb-1 font-sans">{t.inscription.modal.tag}</p>
                    <div className={cn("flex items-center justify-center gap-1", isRTL && "flex-row-reverse")}>
                      <span className="text-white text-4xl font-black tracking-tighter drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]">
                        <Counter value={800} />
                      </span>
                      <span className="text-gold font-black text-xl">DH</span>
                    </div>
                  </div>
                </div>
              )}
              <button
                type="submit"
                className="w-full py-5 bg-gold text-black font-black uppercase tracking-widest text-sm rounded-full flex items-center justify-center gap-1.5 hover:bg-gold-light transition-all shadow-xl font-sans"
              >
                {t.inscription.form.send}
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
