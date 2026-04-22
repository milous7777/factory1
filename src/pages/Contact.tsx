import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import { useLanguage } from '../theme/LanguageContext';
import { cn } from '../lib/utils';

export default function Contact() {
  const { t, isRTL } = useLanguage();
  
  const contactInfo = [
    { icon: <MapPin className="text-gold" />, title: t.contact.addr, content: 'Av. Hassan II, Ouled Teima, Maroc (En face du lycée Abdellah Chefchaouni)' },
    { icon: <Phone className="text-gold" />, title: t.contact.phone, content: '+212 767 542 604' },
    { icon: <Mail className="text-gold" />, title: t.contact.email, content: 'institutfactory@gmail.com' },
    { icon: <Clock className="text-gold" />, title: t.contact.hours, content: 'Lun - Ven: 09:30 - 18:00 | Sam: 09:30 - 12:00' },
  ];

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20 space-y-4">
        <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs font-sans">{t.contact.tag}</span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase font-sans">
          {t.contact.title.split(' ')[0]} <span className="text-gold">{t.contact.title.split(' ')[1]}</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactInfo.map((info, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/5 shadow-xl space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center">
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-white font-black text-sm uppercase tracking-widest mb-1 font-sans">{info.title}</h4>
                  <p className="text-white/60 font-medium text-sm leading-relaxed">{info.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-luxury-black p-10 rounded-[3rem] shadow-2xl border border-white/10 space-y-8 rtl:text-right">
            <h3 className="text-white text-3xl font-black tracking-tighter font-sans">{t.contact.helpTitle}</h3>
            <p className="text-white/60 font-medium">{t.contact.helpDesc}</p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/212767542604" className="flex-1 min-w-[200px] py-5 bg-gold text-black font-black uppercase tracking-widest text-xs rounded-full flex items-center justify-center gap-3 hover:bg-gold-light transition-all shadow-xl font-sans">
                WhatsApp Direct
                <MessageCircle size={18} />
              </a>
              <a href="tel:+212767542604" className="flex-1 min-w-[200px] py-5 bg-white/10 border border-white/20 text-white font-black uppercase tracking-widest text-xs rounded-full flex items-center justify-center gap-3 hover:bg-white/20 transition-all shadow-xl font-sans">
                {isRTL ? 'اتصل بالمعهد' : "Appeler l'Institut"}
                <Phone size={18} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[400px] relative border-4 border-gold/20">
            <img 
              src="https://i.postimg.cc/gJJVHN4W/IMG-20260410-WA0181.jpg" 
              alt="Map Location" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            <a 
              href="https://maps.app.goo.gl/CsvuujHpkbASBkDo9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute bottom-6 left-6 right-6 py-4 bg-white text-black font-black uppercase tracking-widest text-xs text-center rounded-full shadow-2xl hover:bg-gold transition-colors font-sans"
            >
              {t.contact.mapBtn}
            </a>
          </div>

          <div className="bg-white/5 p-10 rounded-[3rem] border border-white/5 shadow-xl space-y-8 rtl:text-right">
            <h3 className="text-2xl font-black tracking-tighter text-white font-sans">{t.contact.formTitle}</h3>
            <form 
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name');
                const email = formData.get('email');
                const message = formData.get('message');
                const whatsappMessage = `Bonjour Institut Factory,\n\nNom: ${name}\nEmail: ${email}\nMessage: ${message}`;
                const whatsappUrl = `https://wa.me/212767542604?text=${encodeURIComponent(whatsappMessage)}`;
                window.open(whatsappUrl, '_blank');
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input name="name" type="text" placeholder={t.contact.formName} required className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 outline-none focus:ring-2 focus:ring-gold transition-all text-white placeholder:text-white/20 rtl:text-right" />
                <input name="email" type="email" placeholder={t.contact.formEmail} required className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 outline-none focus:ring-2 focus:ring-gold transition-all text-white placeholder:text-white/20 rtl:text-right" />
              </div>
              <textarea name="message" placeholder={t.contact.formMsg} rows={4} required className="w-full bg-white/5 border border-white/10 rounded-[2rem] px-6 py-4 outline-none focus:ring-2 focus:ring-gold transition-all resize-none text-white placeholder:text-white/20 rtl:text-right"></textarea>
              <button type="submit" className="w-full py-5 bg-gold text-black font-black uppercase tracking-widest text-xs rounded-full flex items-center justify-center gap-3 hover:bg-white transition-all shadow-xl font-sans">
                {t.contact.formSend}
                <Send size={18} className="rtl:rotate-180" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
