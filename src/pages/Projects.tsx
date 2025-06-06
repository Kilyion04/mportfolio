
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ExternalLink, Github, Star } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: 'web' | 'ai' | 'games' | 'tools' | 'data';
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
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const projects: Project[] = [
    {
      id: '1',
      title: 'Solution de trajet économe en énergie',
      description: 'Solution Python pour déterminer des trajets optimisés énergétiquement pour les livraisons, en prenant en compte la topographie des lieux. Projet de mobilité internationale.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=240&fit=crop',
      tags: ['Python', 'Optimisation', 'Géolocalisation', 'Machine Learning'],
      category: 'ai',
      status: 'completed',
      links: {
        github: 'https://github.com/Kilyion04'
      },
      stats: {
        stars: 12
      }
    },
    {
      id: '2',
      title: 'Applications de gestion industrielle',
      description: 'Applications internes pour tablette permettant de gérer le matériel au sein d\'une industrie ainsi que les visites d\'entreprise. Développées avec Visual Studio.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=240&fit=crop',
      tags: ['C#', 'Visual Studio', 'Tablette', 'Gestion'],
      category: 'tools',
      status: 'completed',
      links: {
        github: 'https://github.com/Kilyion04'
      },
      stats: {
        users: 25
      }
    },
    {
      id: '3',
      title: 'Site de gestion matériel LSEE',
      description: 'Site web utilisant EasyPHP et WordPress pour répertorier tout le matériel informatique du LSEE à la Faculté des Sciences de Béthune.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=240&fit=crop',
      tags: ['PHP', 'WordPress', 'EasyPHP', 'MySQL'],
      category: 'web',
      status: 'completed',
      links: {
        github: 'https://github.com/Kilyion04'
      },
      stats: {
        users: 50
      }
    },
    {
      id: '4',
      title: 'Dashboard Minecraft',
      description: 'Interface d\'administration complète pour serveurs Minecraft avec monitoring en temps réel et gestion des joueurs.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=240&fit=crop',
      tags: ['React', 'Node.js', 'WebSocket', 'Docker'],
      category: 'games',
      status: 'in-progress',
      links: {
        demo: '/serveurs-minecraft',
        github: 'https://github.com/Kilyion04'
      },
      stats: {
        users: 67,
        stars: 45
      }
    },
    {
      id: '5',
      title: 'Mission Data SIA Habitat',
      description: 'Projets en cours dans le cadre de mon alternance chez SIA Habitat en tant que Chargé Mission Data.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop',
      tags: ['Python', 'Data Analysis', 'SQL', 'PostgreSQL'],
      category: 'data',
      status: 'in-progress',
      links: {},
      stats: {}
    },
    {
      id: '6',
      title: 'IA de prédiction de match de football',
      description: 'Système d\'intelligence artificielle pour prédire les scores de matchs de football, analyser les statistiques d\'équipes et de joueurs. Utilisation de machine learning et analyse de données historiques.',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=240&fit=crop',
      tags: ['Python', 'Machine Learning', 'TensorFlow', 'API Football', 'Statistiques'],
      category: 'ai',
      status: 'planning',
      links: {},
      stats: {}
    }
  ];

  const categories = [
    { id: 'all', label: 'Tous', count: projects.length },
    { id: 'web', label: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
    { id: 'ai', label: 'Intelligence Artificielle', count: projects.filter(p => p.category === 'ai').length },
    { id: 'games', label: 'Jeux & Serveurs', count: projects.filter(p => p.category === 'games').length },
    { id: 'tools', label: 'Outils', count: projects.filter(p => p.category === 'tools').length },
    { id: 'data', label: 'Data', count: projects.filter(p => p.category === 'data').length }
  ];

  const statusOptions = [
    { id: 'all', label: 'Tous les statuts', count: projects.length },
    { id: 'completed', label: 'Terminés', count: projects.filter(p => p.status === 'completed').length },
    { id: 'in-progress', label: 'En cours', count: projects.filter(p => p.status === 'in-progress').length },
    { id: 'planning', label: 'En attente', count: projects.filter(p => p.status === 'planning').length }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || project.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
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
            Découvrez mes réalisations académiques et professionnelles : développement web, 
            optimisation énergétique, gestion industrielle et analyse de données.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-col gap-6">
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Rechercher des projets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              />
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Category filters */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Catégories</h3>
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

              {/* Status filters */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Statut</h3>
                <RadioGroup value={selectedStatus} onValueChange={setSelectedStatus} className="flex flex-wrap gap-4">
                  {statusOptions.map((status) => (
                    <div key={status.id} className="flex items-center space-x-2">
                      <RadioGroupItem value={status.id} id={status.id} />
                      <Label htmlFor={status.id} className="text-sm cursor-pointer flex items-center gap-2">
                        {status.label}
                        <Badge variant="secondary" className="text-xs">
                          {status.count}
                        </Badge>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
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
                <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-2 text-center">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
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
                {(project.stats?.stars || project.stats?.users) && (
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
