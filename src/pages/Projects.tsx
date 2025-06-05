
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ExternalLink, Github, Star } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: 'web' | 'ai' | 'games' | 'tools';
  status: 'completed' | 'in-progress' | 'planning';
  links: {
    demo?: string;
    github?: string;
  };
  stats?: {
    stars?: number;
    users?: number;
  };
}

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const projects: Project[] = [
    {
      id: '1',
      title: 'IA Prédiction Football',
      description: 'Système d\'intelligence artificielle pour prédire les résultats de matchs de football avec une précision de 78%.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=240&fit=crop',
      tags: ['Python', 'TensorFlow', 'API', 'Machine Learning'],
      category: 'ai',
      status: 'completed',
      links: {
        demo: '/dashboard',
        github: 'https://github.com'
      },
      stats: {
        users: 234,
        stars: 89
      }
    },
    {
      id: '2',
      title: 'Dashboard Minecraft',
      description: 'Interface d\'administration complète pour serveurs Minecraft avec monitoring en temps réel.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=240&fit=crop',
      tags: ['React', 'Node.js', 'WebSocket', 'Docker'],
      category: 'games',
      status: 'in-progress',
      links: {
        demo: '/serveurs-minecraft',
        github: 'https://github.com'
      },
      stats: {
        users: 67,
        stars: 45
      }
    },
    {
      id: '3',
      title: 'E-commerce Platform',
      description: 'Plateforme e-commerce moderne avec paiements Stripe et gestion d\'inventaire avancée.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=240&fit=crop',
      tags: ['Next.js', 'Prisma', 'Stripe', 'PostgreSQL'],
      category: 'web',
      status: 'completed',
      links: {
        demo: 'https://demo.example.com',
        github: 'https://github.com'
      },
      stats: {
        users: 1200,
        stars: 156
      }
    },
    {
      id: '4',
      title: 'API Analytics Tool',
      description: 'Outil d\'analyse et monitoring d\'APIs avec alertes automatiques et métriques détaillées.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=240&fit=crop',
      tags: ['Node.js', 'Redis', 'Grafana', 'Docker'],
      category: 'tools',
      status: 'planning',
      links: {
        github: 'https://github.com'
      }
    }
  ];

  const categories = [
    { id: 'all', label: 'Tous', count: projects.length },
    { id: 'web', label: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
    { id: 'ai', label: 'Intelligence Artificielle', count: projects.filter(p => p.category === 'ai').length },
    { id: 'games', label: 'Jeux & Serveurs', count: projects.filter(p => p.category === 'games').length },
    { id: 'tools', label: 'Outils', count: projects.filter(p => p.category === 'tools').length }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'in-progress': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'planning': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
    }
  };

  const getStatusLabel = (status: Project['status']) => {
    switch (status) {
      case 'completed': return 'Terminé';
      case 'in-progress': return 'En cours';
      case 'planning': return 'Planifié';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Mes Projets
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez mes réalisations en développement web, intelligence artificielle et technologies gaming.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Rechercher des projets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              />
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? 
                    "bg-primary-500 hover:bg-primary-600 text-white" : 
                    "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary-500"
                  }
                >
                  {category.label}
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-soft hover:shadow-xl dark:hover:shadow-glow-accent transition-all duration-300 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={getStatusColor(project.status)}>
                    {getStatusLabel(project.status)}
                  </Badge>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Stats */}
                {project.stats && (
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    {project.stats.stars && (
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{project.stats.stars}</span>
                      </div>
                    )}
                    {project.stats.users && (
                      <div>
                        {project.stats.users} utilisateurs
                      </div>
                    )}
                  </div>
                )}

                {/* Links */}
                <div className="flex gap-2">
                  {project.links.demo && (
                    <Button asChild size="sm" className="flex-1 bg-primary-500 hover:bg-primary-600 text-white">
                      <a href={project.links.demo} target={project.links.demo.startsWith('http') ? '_blank' : '_self'}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Démo
                      </a>
                    </Button>
                  )}
                  {project.links.github && (
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Aucun projet trouvé pour votre recherche.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;
