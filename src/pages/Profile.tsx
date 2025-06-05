
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Mail, ExternalLink, Award, Code, Users, Coffee, Phone, Github, Linkedin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Profile = () => {
  const skills = [
    { category: 'Langages', items: ['C', 'C++', 'C#', 'Python', 'JavaScript', 'PHP', 'HTML/CSS', 'SQL'] },
    { category: 'Bases de données', items: ['MySQL', 'PostgreSQL', 'MongoDB'] },
    { category: 'Outils', items: ['Visual Studio', 'VS Code', 'Jupyter Notebook', 'Arduino', 'Cisco Packet Tracer'] },
    { category: 'Autres', items: ['WordPress', 'EasyPHP', 'Travail en équipe', 'PBL', 'Anglais B2'] }
  ];

  const experiences = [
    {
      title: 'Alternant Chargé Mission Data',
      company: 'SIA Habitat',
      period: '09/2024 - En cours',
      description: 'Alternance en contrat de professionnalisation dans le domaine de la data.',
      achievements: ['Formation en alternance', 'Application de compétences data', 'Projet innovants']
    },
    {
      title: 'Stage - Développement d\'applications',
      company: 'Industrie (Cycle Ingénieur 1ère année)',
      period: '01/2023 - 04/2023',
      description: 'Création d\'applications internes pour tablette afin de gérer le matériel et les visites.',
      achievements: ['Applications tablette', 'Gestion de matériel', 'Visual Studio']
    },
    {
      title: 'Stage - Développement web',
      company: 'LSEE - Faculté des Sciences de Béthune',
      period: '04/2022 - 07/2022',
      description: 'Création d\'un site pour répertorier le matériel informatique.',
      achievements: ['Site web EasyPHP', 'WordPress', 'Gestion inventaire']
    }
  ];

  const education = [
    {
      title: 'Cycle Ingénieur (Alternant)',
      school: 'CESI - Lille',
      period: '08/2024 - En cours',
      description: 'Formation d\'ingénieur en alternance chez SIA Habitat - Douai'
    },
    {
      title: 'Cycle Ingénieur (Étudiant)',
      school: 'CESI - Lille',
      period: '09/2022 - 09/2024',
      description: 'Formation ingénieur avec mobilité internationale et projets PBL'
    },
    {
      title: 'Cycle Préparatoire',
      school: 'CESI - Arras',
      period: '09/2020 - 07/2022',
      description: 'Préparation au cycle ingénieur'
    },
    {
      title: '1ère année Licence Informatique',
      school: 'Faculté Jean Perrin - Lens',
      period: '09/2019 - 07/2020',
      description: 'Formation initiale en informatique'
    }
  ];

  const stats = [
    { label: 'Années d\'études', value: '5', icon: Calendar },
    { label: 'Projets réalisés', value: '10+', icon: Code },
    { label: 'Stages/Alternance', value: '3', icon: Users },
    { label: 'Langages maîtrisés', value: '8', icon: Coffee }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-soft p-8 mb-8"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            <Avatar className="w-32 h-32">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" />
              <AvatarFallback className="text-2xl">KR</AvatarFallback>
            </Avatar>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-2">
                Kilyion Romary
              </h1>
              <p className="text-xl text-primary-600 dark:text-primary-400 mb-4">
                Alternant Chargé Mission Data - Étudiant Ingénieur
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl">
                Étudiant en 5ème année à CESI École d'Ingénieurs, actuellement alternant chez SIA Habitat. 
                Formé au PBL avec des compétences solides en développement et réseau. 
                Rigoureux, organisé et doté d'un excellent esprit d'équipe.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <MapPin className="w-4 h-4 mr-2" />
                  Lille/Douai, France
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Phone className="w-4 h-4 mr-2" />
                  06 32 63 54 72
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Mail className="w-4 h-4 mr-2" />
                  kilyion.romary@viacesi.fr
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-4">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://linkedin.com/in/kilyion-romary-806531216" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://github.com/Kilyion04" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button className="bg-primary-500 hover:bg-primary-600 text-white">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Télécharger CV
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-soft p-6 text-center">
                <Icon className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-soft p-8"
          >
            <h2 className="text-2xl font-display font-semibold text-gray-900 dark:text-white mb-6">
              Compétences Techniques
            </h2>
            
            <div className="space-y-6">
              {skills.map((skillGroup, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-soft p-8"
          >
            <h2 className="text-2xl font-display font-semibold text-gray-900 dark:text-white mb-6">
              Expérience Professionnelle
            </h2>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-4 border-primary-500 pl-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {exp.company}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    {exp.description}
                  </p>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                        <Award className="w-3 h-3 text-primary-500 mr-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Formation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-soft p-8 mt-8"
        >
          <h2 className="text-2xl font-display font-semibold text-gray-900 dark:text-white mb-6">
            Formation
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div key={index} className="border-l-4 border-accent-500 pl-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {edu.title}
                  </h3>
                  <Badge variant="outline" className="text-xs">
                    {edu.period}
                  </Badge>
                </div>
                <p className="text-accent-600 dark:text-accent-400 font-medium mb-2">
                  {edu.school}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Projets marquants */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-soft p-8 mt-8"
        >
          <h2 className="text-2xl font-display font-semibold text-gray-900 dark:text-white mb-6">
            Projets Marquants
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Solution de trajet économe en énergie
              </h3>
              <p className="text-green-600 dark:text-green-400 font-medium mb-2">
                Mobilité internationale (09/2023 - 02/2024)
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Développement d'une solution Python pour déterminer des trajets optimisés énergétiquement 
                pour les livraisons, en prenant en compte la topographie des lieux.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Gestion de matériel industriel
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                Stage 1ère année cycle ingénieur
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Applications tablette pour la gestion du matériel et des visites d'entreprise 
                développées avec Visual Studio.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
