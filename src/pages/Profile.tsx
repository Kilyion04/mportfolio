
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Mail, ExternalLink, Award, Code, Users, Coffee } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Profile = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Docker'] },
    { category: 'IA & Data', items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'OpenAI API'] },
    { category: 'DevOps', items: ['Docker', 'GitHub Actions', 'AWS', 'Vercel', 'Linux'] }
  ];

  const experiences = [
    {
      title: 'Développeur Full-Stack Freelance',
      company: 'Indépendant',
      period: '2023 - Présent',
      description: 'Développement d\'applications web modernes et d\'outils d\'intelligence artificielle pour diverses entreprises.',
      achievements: ['15+ projets livrés', 'IA de prédiction sportive', 'Dashboards Minecraft']
    },
    {
      title: 'Développeur Backend',
      company: 'TechCorp',
      period: '2021 - 2023',
      description: 'Développement d\'APIs REST et de microservices pour des applications à fort trafic.',
      achievements: ['API gérant 1M+ requêtes/jour', 'Réduction des temps de réponse de 40%', 'Migration vers Docker']
    }
  ];

  const stats = [
    { label: 'Projets Complétés', value: '25+', icon: Code },
    { label: 'Clients Satisfaits', value: '15+', icon: Users },
    { label: 'Années d\'expérience', value: '4', icon: Calendar },
    { label: 'Cafés Bus', value: '∞', icon: Coffee }
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
              <AvatarFallback className="text-2xl">DT</AvatarFallback>
            </Avatar>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-2">
                DevTech
              </h1>
              <p className="text-xl text-primary-600 dark:text-primary-400 mb-4">
                Développeur Full-Stack & Spécialiste IA
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl">
                Passionné par le développement web moderne et l'intelligence artificielle, 
                je crée des solutions innovantes qui allient performance technique et expérience utilisateur exceptionnelle.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <MapPin className="w-4 h-4 mr-2" />
                  France
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Mail className="w-4 h-4 mr-2" />
                  contact@devtech.com
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Calendar className="w-4 h-4 mr-2" />
                  Disponible pour nouveaux projets
                </div>
              </div>
              
              <div className="mt-6">
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
      </div>
    </div>
  );
};

export default Profile;
