import React from 'react';
import { Facebook, Instagram, Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../theme/LanguageContext';
import { cn } from '../lib/utils';

export default function Footer() {
  const { t, isRTL } = useLanguage();

  return (
    <footer className="bg-luxury-black text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 rtl:text-right">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1 flex flex-col gap-6">
          <img src="https://i.postimg.cc/rFNqdWsv/20260413-150549.png" alt="Institut Factory Logo" className="h-24 w-auto object-contain brightness-0 invert" />
          <p className="text-white/60 text-sm leading-relaxed font-medium">
            {t.footer.desc}
          </p>
          <div className={cn("flex gap-4", isRTL && "flex-row-reverse")}>
            <a href="https://www.facebook.com/FactoryCoiffure" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold transition-colors">
              <Facebook size={18} />
            </a>
            <a href="https://www.instagram.com/ecole_factory" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://wa.me/212767542604" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold transition-colors">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-6 font-sans">{t.nav.home}</h4>
          <ul className="flex flex-col gap-4 text-sm font-medium text-white/70">
            <li><Link to="/" className="hover:text-gold transition-colors font-sans">{t.nav.home}</Link></li>
            <li><Link to="/formations" className="hover:text-gold transition-colors font-sans">{t.nav.formations}</Link></li>
            <li><Link to="/diplomes" className="hover:text-gold transition-colors font-sans">{t.nav.graduates}</Link></li>
            <li><Link to="/galerie" className="hover:text-gold transition-colors font-sans">{t.nav.gallery}</Link></li>
          </ul>
        </div>

        {/* Formations */}
        <div>
          <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-6 font-sans">{t.nav.formations}</h4>
          <ul className="flex flex-col gap-4 text-sm font-medium text-white/70">
            <li><Link to="/diurne" className="hover:text-gold transition-colors font-sans">{t.nav.diurne}</Link></li>
            <li><Link to="/nocturne" className="hover:text-gold transition-colors font-sans">{t.nav.nocturne}</Link></li>
            <li><Link to="/formations" className="hover:text-gold transition-colors font-sans">{t.nav.formations}</Link></li>
            <li><Link to="/inscription" className="hover:text-gold transition-colors font-sans">{t.nav.inscription}</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-6 font-sans">{t.nav.contact}</h4>
          <ul className="flex flex-col gap-4 text-sm font-medium text-white/70">
            <li className={cn("flex items-start gap-3", isRTL && "flex-row-reverse")}>
              <MapPin size={18} className="text-gold shrink-0" />
              <span className="font-sans">Av. Hassan II, Ouled Teima, Maroc</span>
            </li>
            <li className={cn("flex items-center gap-3", isRTL && "flex-row-reverse")}>
              <Phone size={18} className="text-gold shrink-0" />
              <span className="font-sans">+212 767 542 604</span>
            </li>
            <li className={cn("flex items-center gap-3", isRTL && "flex-row-reverse")}>
              <Mail size={18} className="text-gold shrink-0" />
              <span className="font-sans">institutfactory@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold tracking-widest uppercase text-white/30">
        <p className="font-sans">{t.footer.copyright}</p>
      </div>
    </footer>
  );
}
