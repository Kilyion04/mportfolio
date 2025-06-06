
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export const ChatbotButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrollToTopVisible, setIsScrollToTopVisible] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Bonjour ! Je peux vous aider à naviguer dans le portfolio, trouver des projets spécifiques, découvrir les compétences ou accéder aux informations de contact. Comment puis-je vous aider ?',
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const checkScrollToTopVisibility = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      const isNearBottom = scrollTop + windowHeight >= documentHeight * 0.8;
      const hasScrolled = scrollTop > 300;
      
      setIsScrollToTopVisible(hasScrolled && isNearBottom);
    };

    window.addEventListener('scroll', checkScrollToTopVisibility);
    return () => window.removeEventListener('scroll', checkScrollToTopVisibility);
  }, []);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('projet') || message.includes('travail')) {
      return 'Je peux vous rediriger vers la section projets où vous trouverez tous mes travaux récents. Voulez-vous voir mes projets web, mes applications ou mes projets créatifs ?';
    }
    
    if (message.includes('contact') || message.includes('email')) {
      return 'Pour me contacter, vous pouvez utiliser le formulaire de contact ou m\'envoyer un email directement. Je réponds généralement sous 24h !';
    }
    
    if (message.includes('compétence') || message.includes('skill')) {
      return 'Mes principales compétences incluent React, TypeScript, Node.js, et bien d\'autres technologies modernes. Souhaitez-vous en savoir plus sur un domaine particulier ?';
    }
    
    if (message.includes('bonjour') || message.includes('salut') || message.includes('hello')) {
      return 'Bonjour ! Ravi de vous accueillir sur mon portfolio. Que souhaitez-vous découvrir aujourd\'hui ?';
    }
    
    return 'C\'est une excellente question ! Je peux vous aider à explorer le portfolio, vous orienter vers les bonnes sections ou répondre à vos questions sur mes projets et compétences. Que voulez-vous savoir exactement ?';
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simuler le temps de réponse du bot
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        isBot: true,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const offsetY = isScrollToTopVisible ? -84 : 0;

  return (
    <>
      {/* Bouton flottant du chatbot */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          y: offsetY
        }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-6 right-6 z-40"
      >
        <Button
          onClick={toggleChatbot}
          size="icon"
          className={`w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
            isOpen 
              ? 'bg-red-500 hover:bg-red-600 text-white' 
              : 'bg-accent-500 hover:bg-accent-600 text-white'
          }`}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </Button>
      </motion.div>

      {/* Interface du chatbot */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ 
              opacity: 0, 
              scale: 0,
              x: 0,
              y: 0,
              transformOrigin: "bottom right"
            }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: -64,
              y: offsetY - 20,
              transformOrigin: "bottom right"
            }}
            exit={{ 
              opacity: 0, 
              scale: 0,
              x: 0,
              y: 0,
              transformOrigin: "bottom right"
            }}
            transition={{ 
              duration: 0.4,
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
            className="fixed bottom-24 right-6 w-80 h-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-40 overflow-hidden flex flex-col"
          >
            {/* Header du chatbot */}
            <div className="bg-accent-500 text-white p-4 rounded-t-2xl">
              <h3 className="font-semibold text-lg">Assistant Portfolio</h3>
              <p className="text-sm opacity-90">En ligne</p>
            </div>

            {/* Zone des messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      message.isBot
                        ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                        : 'bg-accent-500 text-white'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-3 rounded-lg text-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Zone de saisie */}
            <div className="border-t dark:border-gray-600 p-4">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Tapez votre message..."
                  className="flex-1 text-sm"
                />
                <Button 
                  onClick={handleSendMessage}
                  size="sm" 
                  className="bg-accent-500 hover:bg-accent-600 text-white px-3"
                  disabled={!inputValue.trim()}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
