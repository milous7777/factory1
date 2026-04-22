import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import GeometricGrid from './GeometricGrid';
import ChatBot from './ChatBot';
import { motion } from 'motion/react';
import { useLanguage } from '../theme/LanguageContext';

export default function Layout() {
  const { isRTL, language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col relative" dir={isRTL ? "rtl" : "ltr"} lang={language}>
      <GeometricGrid />
      <Navbar />
      <main className="flex-1">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}
