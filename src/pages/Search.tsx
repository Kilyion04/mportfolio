
import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search as SearchIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { SearchResults } from '@/components/search/SearchResults';
import { Home, Code, Server, User, Mail, BarChart3 } from 'lucide-react';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');

  // Données de recherche mockées
  const searchData = [
    {
      id: '1',
      title: 'Accueil',
      description: 'Page d\'accueil avec présentation des projets et technologies',
      type: 'page' as const,
      url: '/',
      icon: Home,
      badges: ['Navigation']
    },
    {
      id: '2',
      title: 'Mes Projets',
      description: 'Découvrez mes réalisations en développement web, intelligence artificielle et technologies gaming',
      type: 'page' as const,
      url: '/projets',
      icon: Code,
      badges: ['Portfolio']
    },
    {
      id: '3',
      title: 'IA Prédiction Football',
      description: 'Système d\'intelligence artificielle pour prédire les résultats de matchs de football avec une précision de 78%',
      type: 'project' as const,
      url: '/projets',
      icon: BarChart3,
      badges: ['Python', 'TensorFlow', 'IA']
    },
    {
      id: '4',
      title: 'Dashboard Minecraft',
      description: 'Interface d\'administration complète pour serveurs Minecraft avec monitoring en temps réel',
      type: 'project' as const,
      url: '/projets',
      icon: Server,
      badges: ['React', 'Node.js', 'Gaming']
    },
    {
      id: '5',
      title: 'Serveurs Minecraft',
      description: 'Gestion et monitoring des serveurs Minecraft avec statistiques en temps réel',
      type: 'page' as const,
      url: '/serveurs-minecraft',
      icon: Server,
      badges: ['Gaming', 'Monitoring']
    },
    {
      id: '6',
      title: 'Profil',
      description: 'Informations personnelles, expérience et compétences techniques',
      type: 'page' as const,
      url: '/profil',
      icon: User,
      badges: ['Personnel']
    },
    {
      id: '7',
      title: 'Contact',
      description: 'Formulaire de contact et informations pour me joindre',
      type: 'page' as const,
      url: '/contact',
      icon: Mail,
      badges: ['Communication']
    },
    {
      id: '8',
      title: 'Dashboard',
      description: 'Tableau de bord personnel avec accès aux projets et outils',
      type: 'page' as const,
      url: '/dashboard',
      icon: BarChart3,
      badges: ['Privé', 'Admin']
    }
  ];

  const filteredResults = useMemo(() => {
    if (!query.trim()) return [];
    
    const searchTerm = query.toLowerCase();
    return searchData.filter(item => 
      item.title.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm) ||
      item.badges?.some(badge => badge.toLowerCase().includes(searchTerm))
    );
  }, [query]);

  const handleSearchChange = (value: string) => {
    setQuery(value);
    if (value.trim()) {
      setSearchParams({ q: value });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Recherche
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Trouvez rapidement des pages, projets ou contenus spécifiques
          </p>
        </motion.div>

        {/* Search Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative max-w-2xl mx-auto">
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Rechercher des pages, projets, contenus..."
              value={query}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-12 h-14 text-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-primary-500 dark:focus:border-primary-400 shadow-lg"
              autoFocus
            />
          </div>
        </motion.div>

        {/* Search Results */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <SearchResults query={query} results={filteredResults} />
        </motion.div>

        {/* Popular Searches */}
        {!query && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Recherches populaires
            </h3>
            <div className="flex flex-wrap gap-2">
              {['projets', 'IA', 'minecraft', 'dashboard', 'contact', 'react', 'python'].map((term) => (
                <button
                  key={term}
                  onClick={() => handleSearchChange(term)}
                  className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-primary-400 transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Search;
