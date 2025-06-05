
import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                <span className="break-all sm:break-normal">06 32 63 54 72</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                <a 
                  href="mailto:kilyion.romary@viacesi.fr"
                  className="break-all sm:break-normal hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer"
                >
                  kilyion.romary@viacesi.fr
                </a>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                <a 
                  href="mailto:kilyion.romary@sia-habitat.com"
                  className="break-all sm:break-normal hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer"
                >
                  kilyion.romary@sia-habitat.com
                </a>
              </div>
            </div>
          </div>

          {/* Professional Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Professionnel
            </h3>
            <div className="text-gray-600 dark:text-gray-400 space-y-2 text-sm sm:text-base">
              <p className="font-medium">Alternant Chargé Mission Data</p>
              <p>SIA Habitat - Douai</p>
              <p className="font-medium mt-3">Étudiant Cycle Ingénieur</p>
              <p>CESI - Lille</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Liens
            </h3>
            <div className="flex space-x-6">
              <a
                href="https://github.com/Kilyion04"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/kilyion-romary-806531216"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Kilyion Romary. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};
