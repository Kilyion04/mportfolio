
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Server, Users, Activity, Settings, Power, AlertCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';

interface ServerStatus {
  id: string;
  name: string;
  status: 'online' | 'offline' | 'maintenance';
  players: {
    online: number;
    max: number;
  };
  version: string;
  uptime: string;
  performance: {
    cpu: number;
    ram: number;
    tps: number;
  };
  lastUpdate: string;
}

const MinecraftServers = () => {
  const { isAuthenticated } = useAuth();
  const [servers, setServers] = useState<ServerStatus[]>([
    {
      id: 'survival',
      name: 'Serveur Survie',
      status: 'online',
      players: { online: 12, max: 50 },
      version: '1.20.4',
      uptime: '5j 12h 34m',
      performance: { cpu: 45, ram: 68, tps: 19.8 },
      lastUpdate: 'Il y a 2 minutes'
    },
    {
      id: 'creative',
      name: 'Serveur Créatif',
      status: 'online',
      players: { online: 8, max: 30 },
      version: '1.20.4',
      uptime: '2j 8h 15m',
      performance: { cpu: 23, ram: 42, tps: 20.0 },
      lastUpdate: 'Il y a 1 minute'
    },
    {
      id: 'modded',
      name: 'Serveur Moddé',
      status: 'maintenance',
      players: { online: 0, max: 25 },
      version: '1.19.2 (Forge)',
      uptime: '0j 0h 0m',
      performance: { cpu: 0, ram: 0, tps: 0 },
      lastUpdate: 'Il y a 30 minutes'
    }
  ]);

  // Simuler les mises à jour en temps réel
  useEffect(() => {
    const interval = setInterval(() => {
      setServers(prev => prev.map(server => ({
        ...server,
        players: {
          ...server.players,
          online: server.status === 'online' ? 
            Math.max(0, server.players.online + (Math.random() > 0.5 ? 1 : -1)) : 0
        },
        performance: server.status === 'online' ? {
          cpu: Math.max(0, Math.min(100, server.performance.cpu + (Math.random() - 0.5) * 10)),
          ram: Math.max(0, Math.min(100, server.performance.ram + (Math.random() - 0.5) * 5)),
          tps: Math.max(0, Math.min(20, server.performance.tps + (Math.random() - 0.5) * 0.5))
        } : server.performance,
        lastUpdate: 'Il y a quelques secondes'
      })));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: ServerStatus['status']) => {
    switch (status) {
      case 'online': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'offline': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      case 'maintenance': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
    }
  };

  const getStatusIcon = (status: ServerStatus['status']) => {
    switch (status) {
      case 'online': return <CheckCircle className="w-4 h-4" />;
      case 'offline': return <AlertCircle className="w-4 h-4" />;
      case 'maintenance': return <Settings className="w-4 h-4" />;
    }
  };

  const getStatusLabel = (status: ServerStatus['status']) => {
    switch (status) {
      case 'online': return 'En ligne';
      case 'offline': return 'Hors ligne';
      case 'maintenance': return 'Maintenance';
    }
  };

  const getPerformanceColor = (value: number, type: 'cpu' | 'ram' | 'tps') => {
    if (type === 'tps') {
      if (value >= 19.5) return 'text-green-600 dark:text-green-400';
      if (value >= 18) return 'text-yellow-600 dark:text-yellow-400';
      return 'text-red-600 dark:text-red-400';
    } else {
      if (value <= 50) return 'text-green-600 dark:text-green-400';
      if (value <= 80) return 'text-yellow-600 dark:text-yellow-400';
      return 'text-red-600 dark:text-red-400';
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
            Serveurs Minecraft
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Monitoring en temps réel de nos serveurs Minecraft avec statistiques de performance et gestion administrative.
          </p>
        </motion.div>

        {/* Global Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          <Card className="bg-white dark:bg-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Serveurs actifs</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">
                    {servers.filter(s => s.status === 'online').length}
                  </p>
                </div>
                <Server className="w-8 h-8 text-primary-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Joueurs connectés</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">
                    {servers.reduce((acc, s) => acc + s.players.online, 0)}
                  </p>
                </div>
                <Users className="w-8 h-8 text-accent-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Performance moy.</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">
                    {(servers.filter(s => s.status === 'online').reduce((acc, s) => acc + s.performance.tps, 0) / servers.filter(s => s.status === 'online').length || 0).toFixed(1)} TPS
                  </p>
                </div>
                <Activity className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Servers List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          {servers.map((server, index) => (
            <motion.div
              key={server.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Card className="bg-white dark:bg-gray-800 hover:shadow-soft dark:hover:shadow-glow transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <CardTitle className="text-xl font-display">{server.name}</CardTitle>
                      <Badge className={getStatusColor(server.status)}>
                        {getStatusIcon(server.status)}
                        <span className="ml-1">{getStatusLabel(server.status)}</span>
                      </Badge>
                    </div>
                    
                    {isAuthenticated && (
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Settings className="w-4 h-4 mr-2" />
                          Config
                        </Button>
                        <Button
                          variant={server.status === 'online' ? 'destructive' : 'default'}
                          size="sm"
                        >
                          <Power className="w-4 h-4 mr-2" />
                          {server.status === 'online' ? 'Arrêter' : 'Démarrer'}
                        </Button>
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Players */}
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Joueurs</p>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span className="text-lg font-semibold text-gray-900 dark:text-white">
                          {server.players.online}/{server.players.max}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(server.players.online / server.players.max) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Performance CPU */}
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">CPU</p>
                      <div className="flex items-center space-x-2">
                        <Activity className="w-4 h-4 text-gray-500" />
                        <span className={`text-lg font-semibold ${getPerformanceColor(server.performance.cpu, 'cpu')}`}>
                          {server.performance.cpu.toFixed(1)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-300 ${
                            server.performance.cpu <= 50 ? 'bg-green-500' :
                            server.performance.cpu <= 80 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${server.performance.cpu}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Performance RAM */}
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">RAM</p>
                      <div className="flex items-center space-x-2">
                        <Activity className="w-4 h-4 text-gray-500" />
                        <span className={`text-lg font-semibold ${getPerformanceColor(server.performance.ram, 'ram')}`}>
                          {server.performance.ram.toFixed(1)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-300 ${
                            server.performance.ram <= 50 ? 'bg-green-500' :
                            server.performance.ram <= 80 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${server.performance.ram}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* TPS */}
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">TPS</p>
                      <div className="flex items-center space-x-2">
                        <Activity className="w-4 h-4 text-gray-500" />
                        <span className={`text-lg font-semibold ${getPerformanceColor(server.performance.tps, 'tps')}`}>
                          {server.performance.tps.toFixed(1)}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Uptime: {server.uptime}
                      </p>
                    </div>
                  </div>

                  {/* Server Info */}
                  <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                      <span>Version: {server.version}</span>
                      <span>{server.lastUpdate}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Admin Notice */}
        {!isAuthenticated && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <Card className="bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800">
              <CardContent className="p-6">
                <p className="text-primary-700 dark:text-primary-300">
                  <strong>Note:</strong> Connectez-vous pour accéder aux fonctions d'administration des serveurs.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MinecraftServers;
