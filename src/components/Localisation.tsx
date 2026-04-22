import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Navigation } from 'lucide-react';
import { useLanguage } from '../theme/LanguageContext';
import { cn } from '../lib/utils';

const Localisation: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch min-h-[600px]">
        {/* Map Embed Section - 8 columns on desktop */}
        <motion.div 
          initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-8 relative rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl group"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13757.8508535261!2d-9.2198086!3d30.39174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb24d35e168e367d%3A0xe543e54911d33ae1!2sInstitut%20Factory!5e0!3m2!1sfr!2sma!4v1713800000000!5m2!1sfr!2sma"
            className="w-full h-full min-h-[400px] lg:min-h-0 grayscale invert opacity-80"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          
          {/* Overlay for aesthetic */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 to-transparent" />
          
          <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10 pointer-events-auto">
            <a 
              href="https://maps.app.goo.gl/CsvuujHpkbASBkDo9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-black font-black uppercase tracking-widest text-[10px] rounded-full flex items-center gap-2 hover:bg-gold transition-colors shadow-2xl font-sans"
            >
              <Navigation size={14} />
              {t.contact.mapBtn}
            </a>
          </div>
        </motion.div>

        {/* Info & Photo Section - 4 columns on desktop */}
        <motion.div 
          initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-4 flex flex-col gap-6"
        >
          {/* Shop Photo Card */}
          <div className="relative rounded-[2.5rem] overflow-hidden aspect-video lg:aspect-auto flex-1 shadow-2xl border-4 border-gold/20 group">
            <img 
              src="https://i.postimg.cc/gJJVHN4W/IMG-20260410-WA0181.jpg" 
              alt="Institut Factory Locale" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className={cn("absolute bottom-6 left-6 right-6", isRTL && "text-right")}>
              <p className="text-gold font-bold text-[10px] uppercase tracking-widest mb-1">{isRTL ? 'موقعنا' : 'NOTRE EMPLACEMENT'}</p>
              <h4 className="text-white text-xl font-black uppercase tracking-tighter font-sans">{isRTL ? 'المحل الرئيسي' : 'LOCALISATION RÉELLE'}</h4>
            </div>
          </div>

          {/* Quick Contact Card */}
          <div className={cn(
            "bg-luxury-black p-8 rounded-[2.5rem] border border-white/10 shadow-2xl space-y-6",
            isRTL && "text-right"
          )}>
            <div className="space-y-4">
              <div className={cn("flex items-start gap-4", isRTL && "flex-row-reverse")}>
                <div className="mt-1 w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center text-gold shrink-0">
                  <MapPin size={16} />
                </div>
                <p className="text-white/60 text-xs font-medium leading-relaxed">
                  Av. Hassan II, Ouled Teima (En face du lycée Abdellah Chefchaouni)
                </p>
              </div>
              <div className={cn("flex items-start gap-4", isRTL && "flex-row-reverse")}>
                <div className="mt-1 w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center text-gold shrink-0">
                  <Phone size={16} />
                </div>
                <p className="text-gold font-black text-xs font-sans tracking-tight">
                  +212 767 542 604
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <a 
                href="https://wa.me/212767542604" 
                className="flex-1 py-3 bg-white/5 border border-white/10 text-white hover:bg-gold hover:text-black transition-all rounded-full flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest font-sans"
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
              <a 
                href="tel:+212767542604" 
                className="flex-1 py-3 bg-gold text-black hover:bg-white transition-all rounded-full flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest font-sans"
              >
                <Phone size={14} />
                {isRTL ? 'اتصل' : 'Appeler'}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Localisation;
