import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, User, Bot, Loader2 } from 'lucide-react';
import { sendMessage, ChatMessage } from '../services/aiService';
import { useLanguage } from '../theme/LanguageContext';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { isRTL } = useLanguage();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await sendMessage([...messages, userMessage]);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`fixed bottom-6 ${isRTL ? 'left-6' : 'right-6'} z-50`}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: isRTL ? 'bottom left' : 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className={`absolute bottom-20 ${isRTL ? 'left-0' : 'right-0'} w-[350px] md:w-[400px] h-[550px] bg-[#0A0A0A] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-white/10 flex flex-col overflow-hidden backdrop-blur-xl`}
          >
            {/* Header */}
            <div className="p-5 flex justify-between items-center border-b border-white/5 bg-gradient-to-b from-white/5 to-transparent">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-2xl bg-gold flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                    <Bot size={22} className="text-black" />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-500 border-2 border-[#0A0A0A]" />
                </div>
                <div>
                  <h3 className="text-sm font-black tracking-widest text-white uppercase font-sans">FACTORY AI</h3>
                  <span className="text-[10px] text-gold font-bold uppercase tracking-tighter">Assistant Expert</span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/10 p-2 rounded-xl transition-all text-white/60 hover:text-white"
                id="close-chatbot-button"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-5 space-y-5 scrollbar-hide">
              {messages.length === 0 && (
                <div className="text-center py-12 space-y-4">
                  <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mx-auto mb-4 border border-white/5">
                    <MessageCircle className="text-gold opacity-50" size={36} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-black text-white uppercase tracking-tight">Marhaban!</h4>
                    <p className="text-xs text-white/40 px-12 leading-relaxed">
                      {isRTL 
                        ? "أنا هنا للإجابة على كل تساؤلاتك حول معهد فاكتوري، التخصصات، والأثمنة." 
                        : "Je suis là pour répondre à vos questions sur l'institut, les filières et les tarifs."}
                    </p>
                  </div>
                </div>
              )}
              
              {messages.map((msg, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} items-end gap-3`}
                >
                  {msg.role === 'assistant' && (
                    <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mb-1">
                      <Bot size={14} className="text-gold" />
                    </div>
                  )}
                  <div
                    className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-br from-gold to-[#B8860B] text-black font-medium rounded-br-none shadow-[0_4px_12px_rgba(212,175,55,0.2)]'
                        : 'bg-white/5 border border-white/10 text-white/90 rounded-bl-none backdrop-blur-sm'
                    }`}
                  >
                    {msg.content}
                  </div>
                  {msg.role === 'user' && (
                    <div className="w-7 h-7 rounded-lg bg-gold flex items-center justify-center flex-shrink-0 mb-1">
                      <User size={14} className="text-black" />
                    </div>
                  )}
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Bot size={14} className="text-gold" />
                  </div>
                  <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-gold/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-1.5 h-1.5 bg-gold/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-1.5 h-1.5 bg-gold/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-5 bg-white/5 border-t border-white/5">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex gap-3"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={isRTL ? "اكتب رسالتك هنا..." : "Posez votre question..."}
                  className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all shadow-inner"
                  id="chatbot-input"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="bg-gold text-black p-3.5 rounded-2xl hover:bg-white transition-all disabled:opacity-20 disabled:cursor-not-allowed shadow-[0_4px_12px_rgba(212,175,55,0.2)]"
                  id="send-message-button"
                >
                  {isLoading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={!isOpen ? {
          boxShadow: ["0 0 0 0 rgba(212, 175, 55, 0.4)", "0 0 0 15px rgba(212, 175, 55, 0)"],
        } : {}}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-br from-gold to-[#B8860B] rounded-[24px] shadow-2xl flex items-center justify-center text-black hover:rotate-3 transition-transform z-50 relative group border-2 border-black"
        id="toggle-chatbot-button"
      >
        {isOpen ? <X size={28} strokeWidth={2.5} /> : (
          <div className="relative">
            <MessageCircle size={28} strokeWidth={2.5} />
            <motion.div 
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-1 -right-1 w-2 h-2 bg-black rounded-full" 
            />
          </div>
        )}
      </motion.button>
    </div>
  );
};

export default ChatBot;
