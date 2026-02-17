
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, User } from 'lucide-react';
import { WHATSAPP_CONFIG, SPRING_TRANSITION } from '../constants';

const WhatsAppFloat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (!message.trim()) return;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_CONFIG.number}?text=${encodedMessage}`, '_blank');
    setMessage('');
    setIsOpen(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={SPRING_TRANSITION}
            className="mb-3 sm:mb-4 w-[280px] sm:w-[320px] bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col"
          >
            {/* Chat Header */}
            <div className="bg-black border-b border-[#D4AF37]/20 p-4 sm:p-6 text-white relative">
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white/50 hover:text-white transition-colors"
              >
                <X size={18} className="sm:w-5 sm:h-5" />
              </button>
              
              <div className="flex items-center space-x-2 sm:space-x-3 pr-8">
                <div className="relative">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl sm:rounded-2xl flex items-center justify-center">
                    <User size={20} className="sm:w-6 sm:h-6 text-[#D4AF37]" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#D4AF37] border-2 border-black rounded-full animate-pulse" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm tracking-tight text-white">{WHATSAPP_CONFIG.agentName}</h4>
                  <p className="text-[9px] sm:text-[10px] uppercase font-black tracking-widest text-[#D4AF37]">En línea ahora</p>
                </div>
              </div>
            </div>

            {/* Chat Body */}
            <div className="p-4 sm:p-6 bg-slate-50 min-h-[80px] sm:min-h-[100px] flex flex-col">
              <div className="bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl rounded-tl-none shadow-sm text-xs text-slate-600 leading-relaxed mb-3 sm:mb-4 border border-slate-100">
                Bienvenido a HS Contadores Públicos. ¿En qué podemos asesorar a su organización hoy?
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-3 sm:p-4 bg-white border-t border-slate-100 flex items-center space-x-2 sm:space-x-3">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Escriba su consulta..."
                className="flex-grow bg-black border border-[#D4AF37]/30 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm outline-none focus:ring-2 focus:ring-[#D4AF37]/30 text-white placeholder-white/30 transition-all"
              />
              <button
                onClick={handleSend}
                disabled={!message.trim()}
                className="w-9 h-9 sm:w-10 sm:h-10 bg-[#D4AF37] text-black rounded-lg sm:rounded-xl flex items-center justify-center hover:scale-105 hover:bg-[#FFD700] transition-all disabled:opacity-50"
              >
                <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl sm:rounded-[1.5rem] shadow-2xl flex items-center justify-center transition-all duration-500 ${
          isOpen ? 'bg-black border border-[#D4AF37]/30 rotate-90' : 'bg-[#D4AF37] hover:bg-[#FFD700]'
        } ${isOpen ? 'text-[#D4AF37]' : 'text-black'}`}
      >
        {isOpen ? <X size={24} className="sm:w-7 sm:h-7" /> : <MessageCircle size={24} className="sm:w-7 sm:h-7" />}
      </motion.button>
    </div>
  );
};

export default WhatsAppFloat;
