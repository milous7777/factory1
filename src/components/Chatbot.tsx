import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, User, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { aiService } from '../services/aiService';
import { cn } from '../lib/utils';

interface Message {
  role: 'user' | 'model';
  text: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Bonjour ! Je suis l'assistant de l'Institut Factory. Comment puis-je vous aider dans votre projet professionnel aujourd'hui ?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));
      
      const response = await aiService.chat(userMessage, history);
      if (response) {
        setMessages(prev => [...prev, { role: 'model', text: response }]);
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "Désolé, j'ai rencontré une petite erreur technique. N'hésitez pas à nous appeler directement au +212 767 542 604." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-white dark:bg-luxury-black rounded-3xl shadow-2xl border border-gold/20 overflow-hidden flex flex-col backdrop-blur-xl"
          >
            {/* Header */}
            <div className="bg-gold p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center">
                  <Bot size={24} className="text-black" />
                </div>
                <div>
                  <h3 className="text-black font-bold text-sm">Assistant Factory</h3>
                  <p className="text-black/60 text-xs font-medium">En ligne</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-black/60 hover:text-black transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-black/40">
              {messages.map((m, i) => (
                <div key={i} className={cn("flex", m.role === 'user' ? "justify-end" : "justify-start")}>
                  <div className={cn(
                    "max-w-[80%] p-3 rounded-2xl text-sm font-medium leading-relaxed",
                    m.role === 'user' 
                      ? "bg-gold text-black rounded-tr-none" 
                      : "bg-white dark:bg-white/10 text-black dark:text-white rounded-tl-none shadow-sm"
                  )}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-white/10 p-3 rounded-2xl rounded-tl-none">
                    <Loader2 size={16} className="animate-spin text-gold" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white dark:bg-luxury-black border-t border-gold/10 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Posez votre question..."
                className="flex-1 bg-gray-100 dark:bg-white/5 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-gold transition-all"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="w-10 h-10 rounded-full bg-gold text-black flex items-center justify-center hover:bg-gold-light transition-colors disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative">
        {/* Pulse Effect Rings */}
        <AnimatePresence>
          {!isOpen && (
            <>
              <motion.div
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 rounded-full bg-gold z-[-1]"
              />
              <motion.div
                initial={{ scale: 1, opacity: 0.3 }}
                animate={{ scale: 1.8, opacity: 0 }}
                transition={{ duration: 2, delay: 0.5, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 rounded-full bg-gold z-[-1]"
              />
            </>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: '#EAB308' }}
          whileTap={{ scale: 0.95 }}
          animate={!isOpen ? {
            scale: [1, 1.05, 1],
          } : {}}
          transition={!isOpen ? {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          } : {}}
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-gold text-black shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(212,175,55,0.2)] flex items-center justify-center hover:bg-gold-light transition-all duration-300 relative z-10"
        >
          {isOpen ? (
            <motion.div
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <X size={28} strokeWidth={2.5} />
            </motion.div>
          ) : (
            <motion.div
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <MessageSquare size={28} fill="currentColor" strokeWidth={0} />
            </motion.div>
          )}
        </motion.button>
      </div>
    </div>
  );
}
