
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Server, Database, Activity, TrendingUp, Users, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Dashboard = () => {
  const dashboardCards = [
    {
      title: 'IA Football',
      description: 'Système de prédiction en temps réel',
      status: 'Actif',
      statusColor: 'bg-green-500',
      icon: BarChart3,
      stats: { accuracy: '78%', predictions: '1.2k', revenue: '€2.4k' }
    },
    {
      title: 'Serveurs Minecraft',
      description: 'Monitoring et administration',
      status: 'En ligne',
      statusColor: 'bg-blue-500',
      icon: Server,
      stats: { servers: '2', players: '45', uptime: '99.9%' }
    },
    {
      title: 'Base de données',
      description: 'Performance et stockage',
      status: 'Optimal',
      statusColor: 'bg-green-500',
      icon: Database,
      stats: { size: '2.3GB', queries: '15k/h', latency: '12ms' }
    }
  ];

  const recentActivity = [
    { action: 'Prédiction football générée', time: 'Il y a 5 min', type: 'ai' },
    { action: 'Nouveau joueur connecté', time: 'Il y a 12 min', type: 'minecraft' },
    { action: 'Sauvegarde automatique', time: 'Il y a 23 min', type: 'system' },
    { action: 'API call limit atteint', time: 'Il y a 1h', type: 'warning' }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'ai': return <BarChart3 className="w-4 h-4" />;
      case 'minecraft': return <Users className="w-4 h-4" />;
      case 'system': return <Database className="w-4 h-4" />;
      case 'warning': return <Activity className="w-4 h-4" />;
      default: return <Zap className="w-4 h-4" />;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'ai': return 'text-blue-500';
      case 'minecraft': return 'text-green-500';
      case 'system': return 'text-gray-500';
      case 'warning': return 'text-yellow-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-2">
            Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Vue d'ensemble de vos projets et systèmes
          </p>
        </motion.div>

        {/* Main Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        >
          {dashboardCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-soft p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {card.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {card.description}
                      </p>
                    </div>
                  </div>
                  <Badge className={`${card.statusColor} text-white`}>
                    {card.status}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  {Object.entries(card.stats).map(([key, value]) => (
                    <div key={key}>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">
                        {value}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 capitalize">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-soft p-6"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Activité Récente
            </h2>
            
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <div className={`${getActivityColor(activity.type)}`}>
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {activity.action}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-soft p-6"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Statistiques Rapides
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  <span className="text-gray-900 dark:text-white">Revenus ce mois</span>
                </div>
                <span className="text-lg font-bold text-green-500">+€1.2k</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-900 dark:text-white">Utilisateurs actifs</span>
                </div>
                <span className="text-lg font-bold text-blue-500">234</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Activity className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-900 dark:text-white">Uptime global</span>
                </div>
                <span className="text-lg font-bold text-purple-500">99.9%</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-900 dark:text-white">Requêtes/heure</span>
                </div>
                <span className="text-lg font-bold text-yellow-500">15.2k</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
