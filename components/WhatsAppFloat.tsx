
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
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={SPRING_TRANSITION}
            className="mb-4 w-[320px] bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col"
          >
            {/* Chat Header */}
            <div className="bg-[#004085] p-6 text-white relative">
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                    <User size={24} className="text-white" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#004085] rounded-full animate-pulse" />
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-tight">{WHATSAPP_CONFIG.agentName}</h4>
                  <p className="text-[10px] uppercase font-black tracking-widest text-blue-200">En línea ahora</p>
                </div>
              </div>
            </div>

            {/* Chat Body */}
            <div className="p-6 bg-slate-50 min-h-[100px] flex flex-col">
              <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-xs text-slate-600 leading-relaxed mb-4 border border-slate-100">
                Bienvenido a HS Contadores Públicos. ¿En qué podemos asesorar a su organización hoy?
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-4 bg-white border-t border-slate-100 flex items-center space-x-3">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Escriba su consulta..."
                className="flex-grow bg-slate-50 px-4 py-2.5 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#004085]/10 transition-all"
              />
              <button
                onClick={handleSend}
                disabled={!message.trim()}
                className="w-10 h-10 bg-[#004085] text-white rounded-xl flex items-center justify-center hover:scale-105 transition-transform disabled:opacity-50"
              >
                <Send size={18} />
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
        className={`w-16 h-16 rounded-[1.5rem] shadow-2xl flex items-center justify-center transition-all duration-500 ${
          isOpen ? 'bg-slate-900 rotate-90' : 'bg-[#004085] emerald-pulse'
        } text-white`}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </motion.button>
    </div>
  );
};

export default WhatsAppFloat;
