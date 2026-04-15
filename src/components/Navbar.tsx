import React, { useState } from 'react';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { useTheme } from '../theme/ThemeContext';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isFormationsOpen, setIsFormationsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { 
      name: 'Formations', 
      path: '/formations',
      submenu: [
        { name: 'Période Diurne', path: '/diurne' },
        { name: 'Période Nocturne', path: '/nocturne' },
      ]
    },
    { name: 'Diplômés', path: '/diplomes' },
    { name: 'Galerie', path: '/galerie' },
    { name: 'À Propos', path: '/a-propos' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Floating Controls - Smaller and Thinner */}
      <nav className="fixed top-4 left-0 right-0 z-50 px-6 flex justify-between items-center pointer-events-none">
        {/* Theme Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
          className="pointer-events-auto w-10 h-10 rounded-full flex items-center justify-center bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-xl text-gold"
        >
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </motion.button>

        {/* Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setIsOpen(!isOpen);
            if (!isOpen) setIsFormationsOpen(false);
          }}
          className="pointer-events-auto w-10 h-10 rounded-full flex items-center justify-center bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-xl text-gold"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </nav>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[45] bg-black/60 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-[320px] bg-white/10 dark:bg-black/40 backdrop-blur-2xl border border-white/20 dark:border-white/10 rounded-[2rem] shadow-2xl p-6 flex flex-col pointer-events-auto overflow-hidden"
            >
              {/* Decorative background elements */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-gold/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gold/10 rounded-full blur-3xl" />

              <div className="relative space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {link.submenu ? (
                      <div className="flex flex-col">
                        <button
                          onClick={() => setIsFormationsOpen(!isFormationsOpen)}
                          className={cn(
                            "group flex items-center justify-between py-3 px-4 rounded-xl transition-all duration-300",
                            isFormationsOpen || location.pathname === link.path 
                              ? "bg-gold/10 text-gold" 
                              : "hover:bg-white/5 text-white/70 hover:text-gold"
                          )}
                        >
                          <span className="text-xs font-black uppercase tracking-[0.3em]">
                            {link.name}
                          </span>
                          <motion.div
                            animate={{ rotate: isFormationsOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown size={16} />
                          </motion.div>
                        </button>
                        
                        <AnimatePresence>
                          {isFormationsOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden flex flex-col pl-6 mt-1 space-y-1"
                            >
                              {link.submenu.map((sub) => (
                                <Link
                                  key={sub.name}
                                  to={sub.path}
                                  onClick={() => setIsOpen(false)}
                                  className="py-2.5 px-4 text-[10px] font-black uppercase tracking-[0.2em] text-white/50 hover:text-gold transition-colors"
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "group flex items-center justify-between py-3 px-4 rounded-xl transition-all duration-300",
                          location.pathname === link.path 
                            ? "bg-gold/10 text-gold" 
                            : "hover:bg-white/5 text-white/70 hover:text-gold"
                        )}
                      >
                        <span className="text-xs font-black uppercase tracking-[0.3em]">
                          {link.name}
                        </span>
                        <div className={cn(
                          "w-1.5 h-1.5 rounded-full transition-all duration-300",
                          location.pathname === link.path ? "bg-gold scale-100" : "bg-gold scale-0 group-hover:scale-100"
                        )} />
                      </Link>
                    )}
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="pt-4"
                >
                  <Link to="/inscription" onClick={() => setIsOpen(false)}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3.5 bg-gold text-black font-black uppercase tracking-widest text-[10px] rounded-xl shadow-xl hover:bg-gold-light transition-colors"
                    >
                      Inscription
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
