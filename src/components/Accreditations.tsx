import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../theme/LanguageContext';
import { cn } from '../lib/utils';

const logos = [
  { id: 1, src: "https://i.postimg.cc/Zny6GxJS/20260422-152521.png", alt: "Royaume du Maroc" },
  { id: 2, src: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Logo_OFPPT.png", alt: "OFPPT" },
  { id: 3, src: "https://i.postimg.cc/tJ0vGZfL/Whats-App-Image-2026-04-22-at-15-25-21-2.png", alt: "Accréditation" },
  { id: 4, src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_de_la_r%C3%A9gion_Souss-Massa.png/1200px-Logo_de_la_r%C3%A9gion_Souss-Massa.png", alt: "Région Souss-Massa" },
];

// Doubling logos for seamless infinite scroll
const scrollLogos = [...logos, ...logos, ...logos, ...logos];

export const Accreditations: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const text = t.home.accreditations.text;
  const words = text.split(' ');

  return (
    <section id="accreditations" className="relative bg-white py-12 md:py-16 overflow-hidden border-b border-gray-100">
      {/* Global Animated Shine Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute inset-0 w-[300%] h-[300%] opacity-[0.05]"
          animate={{
            x: ["-50%", "50%"],
            y: ["-50%", "50%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            background: "linear-gradient(135deg, transparent 45%, rgba(212, 175, 55, 0.6) 50%, transparent 55%)",
            transform: "rotate(-15deg)"
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className={cn(
          "grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center",
          isRTL ? "text-right" : "text-left"
        )}>
          {/* Paragraph Column - 5 columns */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex flex-wrap gap-x-1 gap-y-2">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.02,
                    ease: "easeOut"
                  }}
                  className="text-gray-800 text-base md:text-lg font-medium tracking-tight leading-snug"
                >
                  {word}{' '}
                </motion.span>
              ))}
            </div>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className={cn(
                "h-1 bg-gradient-to-r from-gold/50 to-transparent w-32",
                isRTL && "mr-auto ml-0 rotate-180"
              )}
            />
          </div>

          {/* Logo Scroll Column - 7 columns */}
          <div className="lg:col-span-7 relative w-full overflow-hidden bg-gray-50/50 rounded-2xl p-1 md:p-2 border border-gray-100 shadow-sm flex items-center min-h-[140px] md:min-h-[180px]">
            <div className="flex w-full overflow-hidden">
              <motion.div
                className="flex gap-12 md:gap-20 items-center py-2"
                animate={{
                  x: isRTL ? [0, 1000] : [0, -1000],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                }}
                style={{ width: "max-content" }}
              >
                {scrollLogos.map((logo, index) => (
                  <div
                    key={`${logo.id}-${index}`}
                    className="flex-shrink-0 w-40 md:w-56 px-4 filter grayscale contrast-125 opacity-40 transition-all duration-700 hover:grayscale-0 hover:opacity-100 hover:scale-105"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      referrerPolicy="no-referrer"
                      className="h-16 md:h-24 w-auto object-contain mx-auto"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Soft shadows for edge blending */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 via-gray-50/50 to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 via-gray-50/50 to-transparent z-20 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
