
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ChatbotButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrollToTopVisible, setIsScrollToTopVisible] = useState(false);

  useEffect(() => {
    const checkScrollToTopVisibility = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Même logique que le ScrollToTopButton
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

  return (
    <>
      {/* Bouton flottant du chatbot */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          y: isScrollToTopVisible ? -20 : 0 // Remonte quand le bouton scroll to top est visible
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
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 w-80 h-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-40 overflow-hidden"
          >
            {/* Header du chatbot */}
            <div className="bg-accent-500 text-white p-4">
              <h3 className="font-semibold text-lg">Assistant Portfolio</h3>
              <p className="text-sm opacity-90">Comment puis-je vous aider ?</p>
            </div>

            {/* Corps du chatbot */}
            <div className="p-4 h-full flex flex-col">
              <div className="flex-1 space-y-3 mb-4">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Bonjour ! Je peux vous aider à :
                  </p>
                  <ul className="text-xs text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                    <li>• Naviguer dans le portfolio</li>
                    <li>• Trouver des projets spécifiques</li>
                    <li>• Découvrir les compétences</li>
                    <li>• Accéder aux informations de contact</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full text-left justify-start text-xs h-8"
                    onClick={() => window.location.href = '/projets'}
                  >
                    Voir tous les projets
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full text-left justify-start text-xs h-8"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Informations de contact
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full text-left justify-start text-xs h-8"
                    onClick={() => window.location.href = '/recherche'}
                  >
                    Rechercher sur le site
                  </Button>
                </div>
              </div>

              {/* Zone de saisie */}
              <div className="border-t dark:border-gray-600 pt-3">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Tapez votre question..."
                    className="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  />
                  <Button size="sm" className="bg-accent-500 hover:bg-accent-600 text-white px-3">
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
