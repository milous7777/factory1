import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Loader2, User, Bot, Minimize2, Maximize2 } from 'lucide-react';
import { sendMessage, ChatMessage } from '../services/aiService';
import { useLanguage } from '../theme/LanguageContext';
import { cn } from '../lib/utils';

const ChatBot: React.FC = () => {
  const { isRTL } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isOpen, isMinimized]);

  // Initial welcome message
  useEffect(() => {
    if (messages.length === 0) {
      const welcomeMsg = isRTL 
        ? "مرحباً بكم في معهد Factory! 😊 كيف يمكنني مساعدتكم اليوم بخصوص تكوينات الحلاقة والتجميل؟"
        : "Bonjour et bienvenue à l'Institut Factory ! 😊 Comment puis-je vous aider aujourd'hui concernant nos formations en coiffure et esthétique ?";
      
      setMessages([{ role: 'assistant', content: welcomeMsg }]);
    }
  }, [isRTL]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      // Send only user/assistant messages to service (system prompt is added inside sendMessage)
      const aiResponse = await sendMessage(newMessages);
      setMessages([...newMessages, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      setMessages([...newMessages, { role: 'assistant', content: isRTL 
        ? "عذراً، حدث خطأ ما. يرجى المحاولة لاحقاً أو التواصل معنا عبر واتساب." 
        : "Désolé, une erreur s'est produite. Veuillez réessayer plus tard ou nous contacter sur WhatsApp." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("fixed bottom-6 z-[9999]", isRTL ? "left-6" : "right-6")}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? '60px' : '500px'
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className={cn(
              "bg-luxury-black w-[350px] md:w-[400px] border border-white/10 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col transition-all duration-300",
              isMinimized ? "mb-0" : "mb-4"
            )}
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/5 backdrop-blur-md">
              <div className={cn("flex items-center gap-3", isRTL && "flex-row-reverse")}>
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                  <Bot size={20} />
                </div>
                <div className={cn("text-left", isRTL && "text-right")}>
                  <h3 className="text-white text-sm font-black uppercase tracking-widest font-sans">Factory AI</h3>
                  <div className={cn("flex items-center gap-1.5", isRTL && "flex-row-reverse")}>
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-white/40 text-[10px] font-bold uppercase">{isRTL ? 'متصل' : 'En ligne'}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button 
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-2 text-white/40 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-white/40 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Chat Area */}
            <AnimatePresence>
              {!isMinimized && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"
                >
                  {messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={cn(
                        "flex gap-3",
                        msg.role === 'user' ? "justify-end" : "justify-start",
                        isRTL && (msg.role === 'user' ? "flex-row-reverse" : "flex-row")
                      )}
                    >
                      {msg.role === 'assistant' && (
                        <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center text-gold shrink-0 border border-gold/20">
                          <Bot size={14} />
                        </div>
                      )}
                      <div className={cn(
                        "max-w-[80%] p-4 rounded-2xl text-sm font-medium leading-relaxed shadow-lg",
                        msg.role === 'user' 
                          ? "bg-gold text-black rounded-tr-none" 
                          : "bg-white/5 text-white/90 border border-white/10 rounded-tl-none"
                      )}>
                        {msg.content}
                      </div>
                      {msg.role === 'user' && (
                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/40 shrink-0 border border-white/10 font-sans">
                          <User size={14} />
                        </div>
                      )}
                    </motion.div>
                  ))}
                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className={cn("flex gap-3 justify-start", isRTL && "flex-row")}
                    >
                      <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center text-gold shrink-0 border border-gold/20">
                        <Bot size={14} />
                      </div>
                      <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/10">
                        <Loader2 className="w-5 h-5 text-gold animate-spin" />
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Input Area */}
            {!isMinimized && (
              <form 
                onSubmit={handleSendMessage}
                className="p-4 border-t border-white/10 bg-white/5 flex gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={isRTL ? "اكتب رسالتك هنا..." : "Écrivez votre message..."}
                  className={cn(
                    "flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:ring-2 focus:ring-gold transition-all",
                    isRTL && "text-right"
                  )}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="w-12 h-12 rounded-xl bg-gold text-black flex items-center justify-center hover:bg-white transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={18} className={isRTL ? "rotate-180" : ""} />
                </button>
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setIsOpen(!isOpen);
          setIsMinimized(false);
        }}
        className={cn(
          "w-16 h-16 rounded-full flex items-center justify-center text-black shadow-2xl transition-all duration-500 ring-4 ring-gold/20",
          isOpen ? "bg-white rotate-90" : "bg-gold"
        )}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </motion.button>
    </div>
  );
};

export default ChatBot;
