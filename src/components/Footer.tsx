import React from 'react';
import { Facebook, Instagram, Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-luxury-black text-text-primary pt-20 pb-10 border-t border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1 flex flex-col gap-6">
          <img src="https://i.postimg.cc/rFNqdWsv/20260413-150549.png" alt="Institut Factory Logo" className="h-24 w-auto object-contain brightness-0 dark:invert" />
          <p className="text-text-secondary opacity-60 text-sm leading-relaxed font-medium">
            L'excellence dans la formation professionnelle. Devenez un expert de la coiffure et de l'esthétique avec l'Institut Factory.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/FactoryCoiffure" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center hover:bg-gold transition-colors">
              <Facebook size={18} />
            </a>
            <a href="https://www.instagram.com/ecole_factory" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center hover:bg-gold transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://wa.me/212767542604" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center hover:bg-gold transition-colors">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-6">Navigation</h4>
          <ul className="flex flex-col gap-4 text-sm font-medium text-text-secondary opacity-70">
            <li><Link to="/" className="hover:text-gold transition-colors">Accueil</Link></li>
            <li><Link to="/formations" className="hover:text-gold transition-colors">Nos Formations</Link></li>
            <li><Link to="/diplomes" className="hover:text-gold transition-colors">Nos Diplômés</Link></li>
            <li><Link to="/galerie" className="hover:text-gold transition-colors">Galerie Photos</Link></li>
          </ul>
        </div>

        {/* Formations */}
        <div>
          <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-6">Formations</h4>
          <ul className="flex flex-col gap-4 text-sm font-medium text-text-secondary opacity-70">
            <li><Link to="/diurne" className="hover:text-gold transition-colors">Période Diurne</Link></li>
            <li><Link to="/nocturne" className="hover:text-gold transition-colors">Période Nocturne</Link></li>
            <li><Link to="/formations" className="hover:text-gold transition-colors">Toutes les Filières</Link></li>
            <li><Link to="/inscription" className="hover:text-gold transition-colors">Dossier d'inscription</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-6">Contact</h4>
          <ul className="flex flex-col gap-4 text-sm font-medium text-text-secondary opacity-70">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-gold shrink-0" />
              <span>Av. Hassan II, Ouled Teima, Maroc</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-gold shrink-0" />
              <span>+212 767 542 604</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-gold shrink-0" />
              <span>institutfactory@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold tracking-widest uppercase text-text-secondary opacity-30">
        <p>© 2024 Institut Factory. Tous droits réservés.</p>
        <p>Design by Luxe Digital</p>
      </div>
    </footer>
  );
}
